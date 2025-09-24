import { Outlet } from "react-router-dom";
import { AppSidebar } from "../../../components/app-sidebar";
import { SiteHeader } from "../../../components/site-header";
import { SidebarInset, SidebarProvider } from "../../../components/ui/sidebar";

export default function AdminPage() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            {/* Aquí se renderizan las rutas hijas */}
            <Outlet />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
