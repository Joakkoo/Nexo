"use client"

import * as React from "react"
import {
  BookOpen,
  Command,
  LifeBuoy,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "../components/nav-main"
import { NavSecondary } from "../components/nav-secondary"
import { NavUser } from "../components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: PieChart,
      isActive: true,
    },
    {
      title: "Empresas",
      url: "/superadmin/empresas",
      icon: SquareTerminal,
      isActive: false,
      items: [
        { title: "Listado", url: "/superadmin/empresas" },
        { title: "Crear", url: "/superadmin/empresas/nueva" }
      ]
    },
    {
      title: "Configuración",
      url: "/superadmin/configuracion",
      icon: Settings2,
      items: [
        { title: "Planes", url: "/superadmin/configuracion/planes" },
        { title: "Integraciones", url: "/superadmin/configuracion/integraciones" },
        { title: "General", url: "/superadmin/configuracion/general" }
      ]
    },
    {
      title: "Auditoría",
      url: "/superadmin/auditoria",
      icon: BookOpen,
    },
  ],
  navSecondary: [
    {
      title: "Soporte",
      url: "#",
      icon: LifeBuoy,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-12 !h-[calc(100svh-var(12))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
