import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, Clock, MoreVertical, Edit, X, Check, MessageSquare, Phone } from "lucide-react"

// Sample appointments data
const appointments = [
  {
    id: "APT-2023-0001",
    patientId: "UHID-TN-2023-0001",
    patientName: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    doctor: "Dr. Ramesh Kumar",
    department: "Cardiology",
    date: "Today",
    time: "10:30 AM",
    status: "Confirmed",
    type: "Follow-up",
  },
  {
    id: "APT-2023-0002",
    patientId: "UHID-TN-2023-0004",
    patientName: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    doctor: "Dr. Priya Sundaram",
    department: "Cardiology",
    date: "Today",
    time: "11:45 AM",
    status: "In Progress",
    type: "Emergency",
  },
  {
    id: "APT-2023-0003",
    patientId: "UHID-TN-2023-0002",
    patientName: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    doctor: "Dr. Vijay Anand",
    department: "Obstetrics",
    date: "Today",
    time: "02:15 PM",
    status: "Scheduled",
    type: "Regular Checkup",
  },
  {
    id: "APT-2023-0004",
    patientId: "UHID-TN-2023-0007",
    patientName: "சுரேஷ் வெங்கடேசன்",
    englishName: "Suresh Venkatesh",
    doctor: "Dr. Karthik Raja",
    department: "Orthopedics",
    date: "Tomorrow",
    time: "09:30 AM",
    status: "Scheduled",
    type: "Follow-up",
  },
  {
    id: "APT-2023-0005",
    patientId: "UHID-TN-2023-0005",
    patientName: "ராஜேஷ் குமார்",
    englishName: "Rajesh Kumar",
    doctor: "Dr. Meena Krishnan",
    department: "ENT",
    date: "Tomorrow",
    time: "11:00 AM",
    status: "Scheduled",
    type: "Regular Checkup",
  },
]

export function AppointmentsList() {
  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="rounded-lg border p-4 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {appointment.englishName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">
                    {appointment.patientName} ({appointment.englishName})
                  </h3>
                  <Badge
                    variant={
                      appointment.status === "Confirmed"
                        ? "outline"
                        : appointment.status === "In Progress"
                          ? "success"
                          : "secondary"
                    }
                    className={
                      appointment.status === "In Progress"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : appointment.status === "Confirmed"
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : ""
                    }
                  >
                    {appointment.status}
                  </Badge>
                  {appointment.type === "Emergency" && <Badge variant="destructive">Emergency</Badge>}
                </div>

                <div className="text-sm text-slate-500">
                  ID: {appointment.patientId} | Appointment: {appointment.id}
                </div>

                <div className="text-sm font-medium">Doctor: {appointment.doctor}</div>

                <div className="text-sm text-slate-500">Department: {appointment.department}</div>

                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {appointment.date}
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {appointment.time}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:self-start">
              {appointment.status === "Scheduled" && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700"
                  >
                    <Check className="h-3 w-3 mr-1" />
                    Confirm
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Cancel
                  </Button>
                </>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Reschedule
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Reminder
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Patient
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
