"use client"

import { useEffect, useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useToast } from "../hooks/use-toast";
import api from "../services/api"

export function CompanyList() {
    const [companies, setCompanies] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const [isOpen, setIsOpen] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState<any | null>(null)

    const { toast } = useToast();


    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await api.get("/companies")
                if (res.data.success) setCompanies(res.data.data)
            } catch (err) {
                console.error("Error fetching companies:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchCompanies()
    }, [])

    const handleDelete = async (id: number) => {
        try {
            const res = await api.delete(`/companies/${id}`)
            if (res.data.success) {
                setCompanies(companies.filter((company) => company.id !== id))
                toast({
                    title: "Empresa eliminada ✅",
                    description: `La empresa se eliminó correctamente.`,
                    duration: 3000,
                    variant: "default",
                });
            }
        } catch (err) {
            console.error("Error deleting company:", err)
            toast({
                title: "Error",
                description: "No se pudo eliminar la empresa",
                variant: "destructive",
            });
        }
    }

    const openUpdateModal = (company: any) => {
        setSelectedCompany(company)
        setIsOpen(true)
    }

    const handleUpdate = async () => {
        if (!selectedCompany) return
        try {
            const res = await api.put(`/companies/${selectedCompany.id}`, selectedCompany)
            if (res.data.success) {
                setCompanies(companies.map((c) => (c.id === selectedCompany.id ? res.data.data : c)))
                setIsOpen(false)
                toast({
                    title: "Empresa actualizada ✅",
                    description: `La empresa se actualizó correctamente.`,
                });
            }
            
        } catch (err) {
            console.error("Error updating company:", err)
            toast({
                title: "Error",
                description: "No se pudo actualizar la empresa",
                variant: "destructive",
            });
        }
    }

    if (companies.length === 0 && !loading) return <p>No hay empresas registradas.</p>

    if (loading) return <p>Cargando empresas...</p>

    return (
        <>
        <div className="overflow-hidden rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>CUIT</TableHead>
                        <TableHead>Dirección</TableHead>
                        <TableHead>Contacto</TableHead>
                        <TableHead>Moneda</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.length > 0 ? (
                        companies.map((company) => (
                            <TableRow key={company.id}>
                                <TableCell>{company.id}</TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.cuit}</TableCell>
                                <TableCell>{company.address ?? "-"}</TableCell>
                                <TableCell>{company.contact_info ?? "-"}</TableCell>
                                <TableCell>
                                    {company.settings?.default_currency ?? "-"}
                                </TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button className="h-8" size="sm" variant="outline" onClick={() => openUpdateModal(company)}>
                                        Editar
                                    </Button>
                                    <Button className="h-8" size="sm" variant="destructive" onClick={() => handleDelete(company.id)}>
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
                                No hay empresas registradas.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Empresa</DialogTitle>
            <DialogDescription>Modifica los datos de la empresa y guarda los cambios.</DialogDescription>
          </DialogHeader>

          {selectedCompany && (
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Nombre"
                value={selectedCompany.name}
                onChange={(e) => setSelectedCompany({ ...selectedCompany, name: e.target.value })}
              />
              <Input
                placeholder="CUIT"
                value={selectedCompany.cuit}
                onChange={(e) => setSelectedCompany({ ...selectedCompany, cuit: e.target.value })}
              />
              <Input
                placeholder="Dirección"
                value={selectedCompany.address ?? ""}
                onChange={(e) => setSelectedCompany({ ...selectedCompany, address: e.target.value })}
              />
              <Input
                placeholder="Contacto"
                value={selectedCompany.contact_info ?? ""}
                onChange={(e) =>
                  setSelectedCompany({ ...selectedCompany, contact_info: e.target.value })
                }
              />
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleUpdate}>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
    )
}
