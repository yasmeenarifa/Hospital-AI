import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Users, FileText, Brain, CreditCard, HeartPulse, BarChart3, Calendar } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { RecentPatients } from "@/components/recent-patients"
import { AiAnalysisOverview } from "@/components/ai-analysis-overview"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              ArogyaSeva AI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-900 hover:text-purple-600 transition-colors">
              Dashboard
            </Link>
            <Link
              href="/patients"
              className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
            >
              Patients
            </Link>
            <Link
              href="/ai-analysis"
              className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
            >
              AI Analysis
            </Link>
            <Link
              href="/billing"
              className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
            >
              Billing
            </Link>
            <Link href="/crm" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
              CRM
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Help
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
              New Patient
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Hospital Dashboard</h1>
              <p className="text-slate-500 mt-1">Welcome to ArogyaSeva AI Hospital Management System</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Patients"
                value="1,284"
                change="+12.3%"
                icon={<Users className="h-4 w-4" />}
                description="Last 30 days"
                trend="up"
              />
              <StatCard
                title="AI Reports"
                value="328"
                change="+18.7%"
                icon={<Brain className="h-4 w-4" />}
                description="Last 30 days"
                trend="up"
              />
              <StatCard
                title="Revenue"
                value="₹24.3L"
                change="+5.2%"
                icon={<CreditCard className="h-4 w-4" />}
                description="Last 30 days"
                trend="up"
              />
              <StatCard
                title="Appointments"
                value="86"
                change="-2.1%"
                icon={<Calendar className="h-4 w-4" />}
                description="Today"
                trend="down"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle>Recent Patients</CardTitle>
                    <CardDescription>Latest patient registrations and updates</CardDescription>
                  </div>
                  <Link href="/patients" className="text-sm text-blue-500 flex items-center">
                    View all
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardHeader>
                <CardContent>
                  <RecentPatients />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>AI Analysis Overview</CardTitle>
                  <CardDescription>Recent AI-powered diagnostic reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <AiAnalysisOverview />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Revenue Breakdown</CardTitle>
                  <CardDescription>Financial performance by department</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <BarChart3 className="h-10 w-10 text-slate-400 mx-auto" />
                    <p className="text-sm text-slate-500">Revenue analytics visualization</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Insurance Claims Status</CardTitle>
                  <CardDescription>Track pending and approved claims</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <FileText className="h-10 w-10 text-slate-400 mx-auto" />
                    <p className="text-sm text-slate-500">Insurance claims tracking visualization</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
