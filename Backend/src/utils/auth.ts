import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JWT_CONFIG, JWTPayload } from '../config/jwt';

// Función para crear un token JWT
export const createToken = (payload: Omit<JWTPayload, 'iat' | 'exp'>): string => {
  const secret = JWT_CONFIG.SECRET;
  if (!secret) throw new Error('JWT secret is not defined');
  // Forzamos el tipo para evitar el error de TypeScript
  const options = {
    expiresIn: JWT_CONFIG.EXPIRES_IN as any,
    algorithm: JWT_CONFIG.ALGORITHM,
  };
  return jwt.sign(payload, secret, options);
};

// Función para verificar un token JWT
export const verifyToken = (token: string): JWTPayload | null => {
  try {
    const secret: Secret = JWT_CONFIG.SECRET as Secret;
    if (!secret) throw new Error('JWT secret is not defined');
    const decoded = jwt.verify(token, secret) as JWTPayload;
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};
// Función para encriptar contraseña
export const hashPassword = async (password: string): Promise<string> => {
  // Salt rounds: número de veces que se aplica el hash (más alto = más seguro pero más lento)
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Función para comparar contraseña con hash
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

// Función para extraer token del header Authorization
export const extractTokenFromHeader = (authHeader: string | undefined): string | null => {
  if (!authHeader) return null;
  
  // Formato esperado: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }
  
  return parts[1];
};
