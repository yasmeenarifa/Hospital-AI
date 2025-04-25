import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeartPulse, Search, Filter, CreditCard, Download, Plus, BarChart3 } from "lucide-react"
import { BillingList } from "@/components/billing-list"
import { InsuranceClaimsList } from "@/components/insurance-claims-list"

export default function BillingPage() {
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
              className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
            >
              AI Analysis
            </Link>
            <Link
              href="/billing"
              className="text-sm font-medium text-slate-900 hover:text-purple-600 transition-colors"
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
              New Bill
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Billing & Insurance</h1>
                <p className="text-slate-500 mt-1">Manage patient billing and insurance claims</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Generate New Bill
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">₹24.3L</h3>
                      <p className="text-sm text-slate-500">Total Revenue (MTD)</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">₹5.8L</h3>
                      <p className="text-sm text-slate-500">Pending Claims</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">86%</h3>
                      <p className="text-sm text-slate-500">Claim Success Rate</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Financial Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                      <Input type="search" placeholder="Search bills or claims..." className="pl-8 bg-white" />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                  </div>

                  <Tabs defaultValue="bills" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
                      <TabsTrigger value="bills">Patient Bills</TabsTrigger>
                      <TabsTrigger value="insurance">Insurance Claims</TabsTrigger>
                    </TabsList>
                    <TabsContent value="bills" className="mt-4">
                      <BillingList />
                    </TabsContent>
                    <TabsContent value="insurance" className="mt-4">
                      <InsuranceClaimsList />
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
