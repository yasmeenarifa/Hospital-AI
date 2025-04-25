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
import { Star, MoreVertical, MessageSquare, Flag, ThumbsUp } from "lucide-react"

// Sample patient feedback data
const feedbacks = [
  {
    id: "FB-2023-0001",
    patientId: "UHID-TN-2023-0001",
    patientName: "செல்வராஜ் முருகன்",
    englishName: "Selvaraj Murugan",
    rating: 5,
    comment:
      "மருத்துவமனையில் உள்ள அனைத்து ஊழியர்களும் மிகவும் உதவிகரமாக இருந்தனர். AI பரிந்துரைகள் துல்லியமாக இருந்தன. (All staff at the hospital were very helpful. AI recommendations were accurate.)",
    date: "Today",
    department: "Cardiology",
    doctor: "Dr. Ramesh Kumar",
    status: "Positive",
  },
  {
    id: "FB-2023-0002",
    patientId: "UHID-TN-2023-0004",
    patientName: "லக்ஷ்மி வேலு",
    englishName: "Lakshmi Velu",
    rating: 4,
    comment:
      "சிகிச்சை நன்றாக இருந்தது, ஆனால் காத்திருப்பு நேரம் சற்று அதிகமாக இருந்தது. (Treatment was good, but waiting time was a bit long.)",
    date: "Yesterday",
    department: "Cardiology",
    doctor: "Dr. Priya Sundaram",
    status: "Positive",
  },
  {
    id: "FB-2023-0003",
    patientId: "UHID-TN-2023-0002",
    patientName: "அனிதா சுரேஷ்",
    englishName: "Anitha Suresh",
    rating: 3,
    comment:
      "மருத்துவர் நல்லவர், ஆனால் கட்டணம் அதிகமாக இருந்தது. AI அறிக்கை பயனுள்ளதாக இருந்தது. (Doctor was good, but charges were high. AI report was useful.)",
    date: "2 days ago",
    department: "Obstetrics",
    doctor: "Dr. Vijay Anand",
    status: "Neutral",
  },
  {
    id: "FB-2023-0004",
    patientId: "UHID-TN-2023-0007",
    patientName: "சுரேஷ் வெங்கடேசன்",
    englishName: "Suresh Venkatesh",
    rating: 2,
    comment:
      "MRI ஸ்கேன் முடிவுகளுக்காக நீண்ட நேரம் காத்திருக்க வேண்டியிருந்தது. AI பகுப்பாய்வு வேகமாக இருந்தது, ஆனால் மருத்துவர் உறுதிப்படுத்த தாமதமானார். (Had to wait a long time for MRI scan results. AI analysis was quick, but doctor was delayed in confirming.)",
    date: "3 days ago",
    department: "Orthopedics",
    doctor: "Dr. Karthik Raja",
    status: "Negative",
  },
  {
    id: "FB-2023-0005",
    patientId: "UHID-TN-2023-0005",
    patientName: "ராஜேஷ் குமார்",
    englishName: "Rajesh Kumar",
    rating: 5,
    comment:
      "சிறந்த அனுபவம். AI மூலம் என் CT ஸ்கேன் விரைவாக பகுப்பாய்வு செய்யப்பட்டது. மருத்துவர் மிகவும் அக்கறையுடன் விளக்கினார். (Excellent experience. My CT scan was quickly analyzed through AI. Doctor explained very carefully.)",
    date: "1 week ago",
    department: "ENT",
    doctor: "Dr. Meena Krishnan",
    status: "Positive",
  },
]

export function PatientFeedbackList() {
  return (
    <div className="space-y-4">
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="rounded-lg border p-4 bg-white">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {feedback.englishName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">
                    {feedback.patientName} ({feedback.englishName})
                  </h3>
                  <Badge
                    variant={
                      feedback.status === "Positive"
                        ? "success"
                        : feedback.status === "Negative"
                          ? "destructive"
                          : "outline"
                    }
                    className={
                      feedback.status === "Positive"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : feedback.status === "Negative"
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : "bg-slate-100 text-slate-800 hover:bg-slate-100"
                    }
                  >
                    {feedback.status}
                  </Badge>
                </div>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < feedback.rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-slate-500">{feedback.date}</span>
                </div>

                <div className="text-sm text-slate-500">
                  Department: {feedback.department} | Doctor: {feedback.doctor}
                </div>

                <div className="mt-2 text-sm">{feedback.comment}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 md:self-start">
              <Button variant="outline" size="sm" className="h-8">
                <MessageSquare className="h-3 w-3 mr-1" />
                Respond
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
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Mark as Addressed
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Flag className="mr-2 h-4 w-4" />
                    Flag for Review
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
