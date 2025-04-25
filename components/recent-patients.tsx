import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, MoreVertical } from "lucide-react"

// Sample Tamil patient data
const patients = [
  {
    id: "UHID-TN-2023-0001",
    name: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    age: 42,
    city: "Chennai",
    status: "Active",
    lastVisit: "Today",
    insuranceStatus: "Verified",
  },
  {
    id: "UHID-TN-2023-0002",
    name: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    age: 35,
    city: "Coimbatore",
    status: "Active",
    lastVisit: "Yesterday",
    insuranceStatus: "Pending",
  },
  {
    id: "UHID-TN-2023-0003",
    name: "கார்த்திக் ராமன்",
    englishName: "Karthik Raman",
    age: 28,
    city: "Madurai",
    status: "Active",
    lastVisit: "2 days ago",
    insuranceStatus: "Verified",
  },
  {
    id: "UHID-TN-2023-0004",
    name: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    age: 56,
    city: "Trichy",
    status: "Critical",
    lastVisit: "Today",
    insuranceStatus: "Verified",
  },
  {
    id: "UHID-TN-2023-0005",
    name: "ராஜேஷ் குமார்",
    englishName: "Rajesh Kumar",
    age: 39,
    city: "Salem",
    status: "Stable",
    lastVisit: "3 days ago",
    insuranceStatus: "Not Insured",
  },
]

export function RecentPatients() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-slate-50">
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Patient</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden md:table-cell">
                  UHID
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden md:table-cell">
                  Age/City
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden md:table-cell">
                  Insurance
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
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle text-sm text-slate-500 hidden md:table-cell">{patient.id}</td>
                  <td className="p-4 align-middle hidden md:table-cell">
                    <div className="text-sm">{patient.age} years</div>
                    <div className="text-xs text-slate-500">{patient.city}</div>
                  </td>
                  <td className="p-4 align-middle">
                    <Badge
                      variant={
                        patient.status === "Active"
                          ? "outline"
                          : patient.status === "Critical"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {patient.status}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle hidden md:table-cell">
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
                  <td className="p-4 align-middle text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
