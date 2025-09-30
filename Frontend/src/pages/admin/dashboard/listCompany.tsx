import { AppSidebar } from "../../../components/app-sidebar"
import { SiteHeader } from "../../../components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "../../../components/ui/sidebar"
import { Toaster } from "../../../components/ui/toaster"
import { CompanyList } from "../../../components/company-list"

export default function CompaniesPage() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader
          breadcrumbs={[
            { title: "Admin", href: "/admin" },
            { title: "Empresas", href: "/admin/empresas" },
            { title: "Listado" },
          ]}
        />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <Toaster />
              <h2 className="text-2xl font-bold">Listado de Empresas</h2>
              <CompanyList />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
