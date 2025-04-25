import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeartPulse, Search, Filter, Brain, Upload, ImageIcon, FileText } from "lucide-react"
import { AiAnalysisList } from "@/components/ai-analysis-list"

export default function AiAnalysisPage() {
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
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
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
              className="text-sm font-medium text-slate-900 hover:text-purple-600 transition-colors"
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
              New Analysis
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">AI Analysis</h1>
                <p className="text-slate-500 mt-1">Automated diagnostic analysis powered by AI</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Scan
                </Button>
                <Button variant="outline">
                  <Brain className="mr-2 h-4 w-4" />
                  AI Settings
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">MRI Analysis</h3>
                      <p className="text-blue-100">AI-powered MRI scan analysis</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary" className="bg-white text-purple-600 hover:bg-blue-50">
                      Upload MRI Scan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">CT Scan Analysis</h3>
                      <p className="text-purple-100">AI-powered CT scan analysis</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary" className="bg-white text-pink-600 hover:bg-blue-50">
                      Upload CT Scan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Lab Report Analysis</h3>
                      <p className="text-emerald-100">AI-powered lab report analysis</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-blue-50">
                      Upload Lab Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Analysis History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                      <Input type="search" placeholder="Search analyses..." className="pl-8 bg-white" />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>

                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
                      <TabsTrigger value="all">All Analyses</TabsTrigger>
                      <TabsTrigger value="mri">MRI Scans</TabsTrigger>
                      <TabsTrigger value="ct">CT Scans</TabsTrigger>
                      <TabsTrigger value="lab">Lab Reports</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-4">
                      <AiAnalysisList />
                    </TabsContent>
                    <TabsContent value="mri" className="mt-4">
                      <AiAnalysisList filter="MRI Scan" />
                    </TabsContent>
                    <TabsContent value="ct" className="mt-4">
                      <AiAnalysisList filter="CT Scan" />
                    </TabsContent>
                    <TabsContent value="lab" className="mt-4">
                      <AiAnalysisList filter="Blood Report" />
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
