import { Algorithm } from "jsonwebtoken";
import jwt from "jsonwebtoken";

// Configuración de JWT
export const JWT_CONFIG = {
  // Clave secreta para firmar tokens (en producción usar variable de entorno)
  SECRET: process.env.JWT_SECRET || 'clave_secreta_predeterminada',

  // Tiempo de expiración del token (24 horas)
  EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',

  // Algoritmo de encriptación
  ALGORITHM: 'HS256' as Algorithm,
};

// Tipos para el payload del JWT
export interface JWTPayload {
  userId: number;
  username: string;
  role: 'superadmin' | 'admin' | 'supervisor' | 'vendedor';
  companyId?: number;
  iat?: number; // issued at
  exp?: number; // expiration
}
