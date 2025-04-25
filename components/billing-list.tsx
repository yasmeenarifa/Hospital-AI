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
import { CreditCard, MoreVertical, Download, Printer, Send, Edit } from "lucide-react"

// Sample billing data
const bills = [
  {
    id: "BILL-2023-0001",
    patientId: "UHID-TN-2023-0001",
    patientName: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    amount: "₹12,500",
    status: "Paid",
    date: "Today, 10:23 AM",
    items: "Consultation, MRI Scan, Medication",
    paymentMethod: "Credit Card",
  },
  {
    id: "BILL-2023-0002",
    patientId: "UHID-TN-2023-0004",
    patientName: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    amount: "₹28,750",
    status: "Insurance Pending",
    date: "Today, 09:15 AM",
    items: "Emergency Care, CT Scan, Medication, Room Charges",
    paymentMethod: "Insurance",
  },
  {
    id: "BILL-2023-0003",
    patientId: "UHID-TN-2023-0002",
    patientName: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    amount: "₹5,200",
    status: "Pending",
    date: "Yesterday, 11:45 AM",
    items: "Consultation, Blood Tests, Ultrasound",
    paymentMethod: "Pending",
  },
  {
    id: "BILL-2023-0004",
    patientId: "UHID-TN-2023-0007",
    patientName: "சுரேஷ் வெங்கடேசன்",
    englishName: "Suresh Venkatesh",
    amount: "₹18,900",
    status: "Paid",
    date: "2 days ago, 15:30 PM",
    items: "Consultation, MRI Scan, Physical Therapy",
    paymentMethod: "UPI",
  },
  {
    id: "BILL-2023-0005",
    patientId: "UHID-TN-2023-0005",
    patientName: "ராஜேஷ் குமார்",
    englishName: "Rajesh Kumar",
    amount: "₹8,450",
    status: "Paid",
    date: "3 days ago, 14:10 PM",
    items: "Consultation, CT Scan, Medication",
    paymentMethod: "Cash",
  },
]

export function BillingList() {
  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-slate-50">
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Bill ID</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Patient</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden md:table-cell">Date</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Amount</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Status</th>
              <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 hidden lg:table-cell">
                Items
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {bills.map((bill) => (
              <tr key={bill.id} className="border-b transition-colors hover:bg-slate-50">
                <td className="p-4 align-middle font-medium">{bill.id}</td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        {bill.englishName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{bill.patientName}</div>
                      <div className="text-xs text-slate-500">{bill.englishName}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 align-middle text-slate-500 hidden md:table-cell">{bill.date}</td>
                <td className="p-4 align-middle font-medium">{bill.amount}</td>
                <td className="p-4 align-middle">
                  <Badge
                    variant={bill.status === "Paid" ? "success" : bill.status === "Pending" ? "warning" : "outline"}
                    className={
                      bill.status === "Paid"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : bill.status === "Pending"
                          ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                    }
                  >
                    {bill.status}
                  </Badge>
                </td>
                <td className="p-4 align-middle text-slate-500 hidden lg:table-cell">
                  <span className="line-clamp-1">{bill.items}</span>
                </td>
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
                        <CreditCard className="mr-2 h-4 w-4" />
                        Process Payment
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Printer className="mr-2 h-4 w-4" />
                        Print Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Send className="mr-2 h-4 w-4" />
                        Email to Patient
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Bill
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
