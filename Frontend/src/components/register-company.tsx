import { useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import api from "../services/api";

export function CompanyForm({ className, ...props }: React.ComponentProps<"div">) {
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [cuit, setCuit] = useState("");
  const [address, setAddress] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/companies", {
        name,
        cuit,
        address,
        contact_info: contactInfo,
      });

      if (response.data.success) {
        toast({
          title: "Empresa registrada ✅",
          description: `La empresa "${name}" se registró correctamente.`,
            duration: 3000,
            variant: "default",
        });

        // Opcional: limpiar formulario
        setName("");
        setCuit("");
        setAddress("");
        setContactInfo("");
      } else {
        setError(response.data.message);
        toast({
          title: "Error",
          description: response.data.message || "No se pudo registrar la empresa",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Error al conectar con servidor");
      toast({
        title: "Error",
        description: "No se pudo conectar con el servidor",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={cn("flex justify-center items-start py-10", className)} {...props}>
        <div className="w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Registrar Empresa</CardTitle>
          <CardDescription>
            Completa los datos a continuación para crear una nueva empresa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Nombre de la empresa</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="cuit">CUIT</Label>
                <Input
                  id="cuit"
                  type="text"
                  value={cuit}
                  onChange={(e) => setCuit(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="contactInfo">Información de contacto</Label>
                <Input
                  id="contactInfo"
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Registrar Empresa
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
        </div>
    </div>
  );
}
