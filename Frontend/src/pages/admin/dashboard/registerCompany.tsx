import { AppSidebar } from "../../../components/app-sidebar";
import { SiteHeader } from "../../../components/site-header";
import {
    SidebarInset,
    SidebarProvider,
} from "../../../components/ui/sidebar";

import { CompanyForm } from "../../../components/register-company"; // <-- importamos el form
import { Toaster } from "../../../components/ui/toaster";

export const iframeHeight = "800px";
export const description = "A sidebar with a header and a search form.";

export default function RegisterCompanyPage() {
    return (
        <div className="[--header-height:calc(--spacing(14))]">
            <SidebarProvider className="flex flex-col">
                <SiteHeader
                    breadcrumbs={[
                        { title: "Admin", href: "/admin" },
                        { title: "Empresas", href: "/admin/empresas" },
                        { title: "Crear" } // este es el actual, no necesita href
                    ]}
                />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            <Toaster />
                            <CompanyForm />

                            {/* Si querés mantener los bloques de ejemplo debajo */}
                            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                                <div className="bg-muted/50 aspect-video rounded-xl" />
                                <div className="bg-muted/50 aspect-video rounded-xl" />
                                <div className="bg-muted/50 aspect-video rounded-xl" />
                            </div>
                        </div>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    );
}
