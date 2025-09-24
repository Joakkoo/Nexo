import { useState } from "react"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useAuth } from "../context/AuthContext"
import { useToast } from "../hooks/use-toast"
import api from "../services/api"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { login } = useAuth()
  const { toast } = useToast()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", { username, password });
      if (response.data.success) {
        const { token, user } = response.data.data;
        login(token, user);

        toast({
          title: "Bienvenido 👋",
          description: `Hola ${user.username}, has iniciado sesión correctamente.`,
        });
        setTimeout(() => {
          window.location.href = "/superadmin";
        }, 3000);
      } else {
        setError(response.data.message);
          toast({
          title: "Error",
          description: response.data.message || "Usuario o contraseña incorrectos",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Error al conectar con servidor");
            toast({
        title: "Error",
        description: "No se pudo conectar con el servidor",
        variant: "destructive",
        duration: 3000,
      });
    }
  };


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Ingrese sus datos</CardTitle>
          <CardDescription>
            Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Ingresar
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              No tienes una cuenta?{" "}
              <a href="#" className="underline underline-offset-4">
                Regístrate
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
