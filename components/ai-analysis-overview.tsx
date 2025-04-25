import { Brain, FileText, ImageIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Sample AI analysis data
const aiAnalyses = [
  {
    id: "AI-REP-001",
    patientId: "UHID-TN-2023-0001",
    patientName: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    type: "MRI Scan",
    status: "Completed",
    confidence: 98,
    date: "Today, 10:23 AM",
  },
  {
    id: "AI-REP-002",
    patientId: "UHID-TN-2023-0004",
    patientName: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    type: "CT Scan",
    status: "Completed",
    confidence: 96,
    date: "Today, 09:15 AM",
  },
  {
    id: "AI-REP-003",
    patientId: "UHID-TN-2023-0002",
    patientName: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    type: "Blood Report",
    status: "Processing",
    confidence: 85,
    date: "Today, 11:45 AM",
  },
]

export function AiAnalysisOverview() {
  return (
    <div className="space-y-4">
      {aiAnalyses.map((analysis) => (
        <div key={analysis.id} className="flex flex-col space-y-2 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {analysis.type === "MRI Scan" ? (
                <ImageIcon className="h-4 w-4 text-blue-500" />
              ) : analysis.type === "CT Scan" ? (
                <ImageIcon className="h-4 w-4 text-purple-500" />
              ) : (
                <FileText className="h-4 w-4 text-emerald-500" />
              )}
              <span className="font-medium">{analysis.type}</span>
            </div>
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

          <div className="flex items-center space-x-2">
            <Brain className="h-4 w-4 text-slate-400" />
            <span className="text-xs text-slate-500">AI Confidence</span>
            <span className="text-xs font-medium">{analysis.confidence}%</span>
          </div>

          <Progress value={analysis.confidence} className="h-1" />

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500">{analysis.date}</span>
            <span className="text-xs text-blue-500 cursor-pointer">View Report</span>
          </div>
        </div>
      ))}
    </div>
  )
}
