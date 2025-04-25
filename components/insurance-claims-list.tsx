import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FileText, MoreVertical, Download, Send, Phone, RefreshCw } from "lucide-react"

// Sample insurance claims data
const claims = [
  {
    id: "CLM-2023-0001",
    patientId: "UHID-TN-2023-0001",
    patientName: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    amount: "₹10,500",
    status: "Approved",
    progress: 100,
    date: "3 days ago",
    insuranceProvider: "Star Health",
    policyNumber: "STAR-1234567",
  },
  {
    id: "CLM-2023-0002",
    patientId: "UHID-TN-2023-0004",
    patientName: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    amount: "₹28,750",
    status: "Processing",
    progress: 60,
    date: "Today",
    insuranceProvider: "LIC Health",
    policyNumber: "LIC-7654321",
  },
  {
    id: "CLM-2023-0003",
    patientId: "UHID-TN-2023-0007",
    patientName: "சுரேஷ் வெங்கடேசன்",
    englishName: "Suresh Venkatesh",
    amount: "₹15,800",
    status: "Submitted",
    progress: 30,
    date: "Yesterday",
    insuranceProvider: "Apollo Munich",
    policyNumber: "APL-9876543",
  },
  {
    id: "CLM-2023-0004",
    patientId: "UHID-TN-2023-0006",
    patientName: "மாலதி கணேசன்",
    englishName: "Malathi Ganesan",
    amount: "₹22,350",
    status: "Approved",
    progress: 100,
    date: "1 week ago",
    insuranceProvider: "HDFC ERGO",
    policyNumber: "HDFC-2468135",
  },
  {
    id: "CLM-2023-0005",
    patientId: "UHID-TN-2023-0002",
    patientName: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    amount: "₹8,200",
    status: "Rejected",
    progress: 100,
    date: "2 days ago",
    insuranceProvider: "Bajaj Allianz",
    policyNumber: "BAJ-1357924",
  },
]

export function InsuranceClaimsList() {
  return (
    <div className="space-y-4">
      {claims.map((claim) => (
        <div key={claim.id} className="rounded-lg border p-4 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {claim.englishName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">
                    {claim.patientName} ({claim.englishName})
                  </h3>
                  <Badge
                    variant={
                      claim.status === "Approved"
                        ? "success"
                        : claim.status === "Rejected"
                          ? "destructive"
                          : claim.status === "Processing"
                            ? "outline"
                            : "secondary"
                    }
                    className={
                      claim.status === "Approved"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : claim.status === "Rejected"
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : claim.status === "Processing"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-100"
                    }
                  >
                    {claim.status}
                  </Badge>
                </div>

                <div className="text-sm text-slate-500">
                  Claim ID: {claim.id} | Patient ID: {claim.patientId}
                </div>

                <div className="text-sm text-slate-500">
                  Insurance: {claim.insuranceProvider} | Policy: {claim.policyNumber}
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium">{claim.amount}</span>
                  <span className="text-xs text-slate-500">{claim.date}</span>
                </div>

                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Claim Progress</span>
                    <span>{claim.progress}%</span>
                  </div>
                  <Progress value={claim.progress} className="h-1" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:self-start">
              <Button variant="outline" size="sm" className="h-8">
                <FileText className="h-3 w-3 mr-1" />
                Details
              </Button>

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
                    <Download className="mr-2 h-4 w-4" />
                    Download Claim
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Send className="mr-2 h-4 w-4" />
                    Email to Patient
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Insurance
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Check Status
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
