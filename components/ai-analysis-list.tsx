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
import { Brain, FileText, ImageIcon, MoreVertical, Download, Share2, Printer, Eye } from "lucide-react"

// Extended AI analysis data
const allAnalyses = [
  {
    id: "AI-REP-001",
    patientId: "UHID-TN-2023-0001",
    patientName: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    type: "MRI Scan",
    scanArea: "Brain",
    status: "Completed",
    confidence: 98,
    findings: "No abnormalities detected",
    date: "Today, 10:23 AM",
    doctor: "Dr. Ramesh Kumar",
  },
  {
    id: "AI-REP-002",
    patientId: "UHID-TN-2023-0004",
    patientName: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    type: "CT Scan",
    scanArea: "Chest",
    status: "Completed",
    confidence: 96,
    findings: "Minor pulmonary infiltrates detected",
    date: "Today, 09:15 AM",
    doctor: "Dr. Priya Sundaram",
  },
  {
    id: "AI-REP-003",
    patientId: "UHID-TN-2023-0002",
    patientName: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    type: "Blood Report",
    scanArea: "Complete Blood Count",
    status: "Processing",
    confidence: 85,
    findings: "Analysis in progress",
    date: "Today, 11:45 AM",
    doctor: "Dr. Vijay Anand",
  },
  {
    id: "AI-REP-004",
    patientId: "UHID-TN-2023-0007",
    patientName: "சுரேஷ் வெங்கடேசன்",
    englishName: "Suresh Venkatesh",
    type: "MRI Scan",
    scanArea: "Lumbar Spine",
    status: "Completed",
    confidence: 97,
    findings: "Mild disc bulge at L4-L5",
    date: "Yesterday, 15:30 PM",
    doctor: "Dr. Karthik Raja",
  },
  {
    id: "AI-REP-005",
    patientId: "UHID-TN-2023-0005",
    patientName: "ராஜேஷ் குமார்",
    englishName: "Rajesh Kumar",
    type: "CT Scan",
    scanArea: "Sinus",
    status: "Completed",
    confidence: 94,
    findings: "Moderate mucosal thickening",
    date: "Yesterday, 14:10 PM",
    doctor: "Dr. Meena Krishnan",
  },
  {
    id: "AI-REP-006",
    patientId: "UHID-TN-2023-0006",
    patientName: "மாலதி கணேசன்",
    englishName: "Malathi Ganesan",
    type: "Blood Report",
    scanArea: "Liver Function Test",
    status: "Completed",
    confidence: 99,
    findings: "All parameters within normal range",
    date: "2 days ago, 09:45 AM",
    doctor: "Dr. Senthil Kumar",
  },
]

interface AiAnalysisListProps {
  filter?: string
}

export function AiAnalysisList({ filter }: AiAnalysisListProps) {
  // Filter analyses based on type if filter is provided
  const analyses = filter ? allAnalyses.filter((analysis) => analysis.type === filter) : allAnalyses

  return (
    <div className="space-y-4">
      {analyses.map((analysis) => (
        <div key={analysis.id} className="rounded-lg border p-4 bg-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  analysis.type === "MRI Scan"
                    ? "bg-blue-100"
                    : analysis.type === "CT Scan"
                      ? "bg-purple-100"
                      : "bg-emerald-100"
                }`}
              >
                {analysis.type === "MRI Scan" ? (
                  <ImageIcon className="h-6 w-6 text-blue-600" />
                ) : analysis.type === "CT Scan" ? (
                  <ImageIcon className="h-6 w-6 text-purple-600" />
                ) : (
                  <FileText className="h-6 w-6 text-emerald-600" />
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">
                    {analysis.type}: {analysis.scanArea}
                  </h3>
                  <Badge
                    variant={analysis.status === "Completed" ? "outline" : "secondary"}
                    className={analysis.status === "Completed" ? "bg-blue-50 text-blue-700 hover:bg-blue-50" : ""}
                  >
                    {analysis.status}
                  </Badge>
                </div>

                <div className="text-sm text-slate-500">
                  {analysis.patientName} ({analysis.englishName})
                </div>

                <div className="text-sm text-slate-500">
                  ID: {analysis.patientId} | {analysis.date}
                </div>

                <div className="text-sm font-medium mt-2">Findings: {analysis.findings}</div>

                <div className="flex items-center space-x-2 mt-2">
                  <Brain className="h-4 w-4 text-slate-400" />
                  <span className="text-xs text-slate-500">AI Confidence</span>
                  <span className="text-xs font-medium">{analysis.confidence}%</span>
                  <Progress value={analysis.confidence} className="h-1 w-24" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:self-start">
              <Button variant="outline" size="sm" className="h-8">
                <Eye className="h-3 w-3 mr-1" />
                View
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
                    Download Report
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share with Doctor
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Printer className="mr-2 h-4 w-4" />
                    Print Report
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
