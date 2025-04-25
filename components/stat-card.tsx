import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"
import type { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: ReactNode
  description: string
  trend: "up" | "down"
}

export function StatCard({ title, value, change, icon, description, trend }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">{title}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">{icon}</span>
        </div>
        <div className="mt-3">
          <div className="text-2xl font-bold">{value}</div>
          <div className="mt-1 flex items-center text-sm">
            <span className={`flex items-center ${trend === "up" ? "text-emerald-500" : "text-rose-500"}`}>
              {trend === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
              {change}
            </span>
            <span className="ml-2 text-slate-500">{description}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
