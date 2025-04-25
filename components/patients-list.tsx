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
import { FileText, MoreVertical, Edit, Trash2, FileBarChart, CreditCard } from "lucide-react"

// Extended Tamil patient data
const allPatients = [
  {
    id: "UHID-TN-2023-0001",
    name: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    age: 42,
    gender: "Male",
    city: "Chennai",
    status: "Active",
    lastVisit: "Today",
    insuranceStatus: "Verified",
    phone: "+91 9876543210",
    diagnosis: "Hypertension, Diabetes",
  },
  {
    id: "UHID-TN-2023-0002",
    name: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    age: 35,
    gender: "Female",
    city: "Coimbatore",
    status: "Active",
    lastVisit: "Yesterday",
    insuranceStatus: "Pending",
    phone: "+91 9876543211",
    diagnosis: "Pregnancy - 2nd Trimester",
  },
  {
    id: "UHID-TN-2023-0003",
    name: "கார்த்திக் ராமன்",
    englishName: "Karthik Raman",
    age: 28,
    gender: "Male",
    city: "Madurai",
    status: "Active",
    lastVisit: "2 days ago",
    insuranceStatus: "Verified",
    phone: "+91 9876543212",
    diagnosis: "Fractured Wrist",
  },
  {
    id: "UHID-TN-2023-0004",
    name: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    age: 56,
    gender: "Female",
    city: "Trichy",
    status: "Critical",
    lastVisit: "Today",
    insuranceStatus: "Verified",
    phone: "+91 9876543213",
    diagnosis: "Coronary Artery Disease",
  },
  {
    id: "UHID-TN-2023-0005",
    name: "ராஜேஷ் குமார்",
    englishName: "Rajesh Kumar",
    age: 39,
    gender: "Male",
    city: "Salem",
    status: "Stable",
    lastVisit: "3 days ago",
    insuranceStatus: "Not Insured",
    phone: "+91 9876543214",
    diagnosis: "Acute Bronchitis",
  },
  {
    id: "UHID-TN-2023-0006",
    name: "மாலதி கணேசன்",
    englishName: "Malathi Ganesan",
    age: 62,
    gender: "Female",
    city: "Tirunelveli",
    status: "Discharged",
    lastVisit: "1 week ago",
    insuranceStatus: "Verified",
    phone: "+91 9876543215",
    diagnosis: "Post-Surgery Recovery",
  },
  {
    id: "UHID-TN-2023-0007",
    name: "சுரேஷ் வெங்கடேசன்",
    englishName: "Suresh Venkatesh",
    age: 45,
    gender: "Male",
    city: "Erode",
    status: "Active",
    lastVisit: "4 days ago",
    insuranceStatus: "Verified",
    phone: "+91 9876543216",
    diagnosis: "Lower Back Pain",
  },
]

interface PatientsListProps {
  filter?: string
}

export function PatientsList({ filter }: PatientsListProps) {
  // Filter patients based on status if filter is provided
  const patients = filter ? allPatients.filter((patient) => patient.status === filter) : allPatients

  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-slate-50">
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Patient</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden md:table-cell">UHID</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden md:table-cell">
                Age/Gender
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden lg:table-cell">City</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Status</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden lg:table-cell">
                Insurance
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden lg:table-cell">
                Diagnosis
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b transition-colors hover:bg-slate-50">
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        {patient.englishName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{patient.name}</div>
                      <div className="text-xs text-slate-500">{patient.englishName}</div>
                      <div className="text-xs text-slate-500 md:hidden">{patient.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 align-middle text-sm text-slate-500 hidden md:table-cell">{patient.id}</td>
                <td className="p-4 align-middle hidden md:table-cell">
                  <div className="text-sm">{patient.age} years</div>
                  <div className="text-xs text-slate-500">{patient.gender}</div>
                </td>
                <td className="p-4 align-middle hidden lg:table-cell">{patient.city}</td>
                <td className="p-4 align-middle">
                  <Badge
                    variant={
                      patient.status === "Active"
                        ? "outline"
                        : patient.status === "Critical"
                          ? "destructive"
                          : patient.status === "Discharged"
                            ? "secondary"
                            : "secondary"
                    }
                  >
                    {patient.status}
                  </Badge>
                </td>
                <td className="p-4 align-middle hidden lg:table-cell">
                  <Badge
                    variant={
                      patient.insuranceStatus === "Verified"
                        ? "success"
                        : patient.insuranceStatus === "Pending"
                          ? "warning"
                          : "outline"
                    }
                    className={
                      patient.insuranceStatus === "Verified"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : patient.insuranceStatus === "Pending"
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          : ""
                    }
                  >
                    {patient.insuranceStatus}
                  </Badge>
                </td>
                <td className="p-4 align-middle text-sm text-slate-500 hidden lg:table-cell">{patient.diagnosis}</td>
                <td className="p-4 align-middle text-right">
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
                        <FileText className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Patient
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileBarChart className="mr-2 h-4 w-4" />
                        AI Analysis
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Record
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
