import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePassword, createToken } from '../utils/auth';
import { JWTPayload } from '../config/jwt';

const prisma = new PrismaClient();

// Interfaz para el login
export interface LoginCredentials {
  username: string;
  password: string;
}

// Interfaz para el registro
export interface RegisterData {
  username: string;
  password: string;
  role: 'superadmin' | 'admin' | 'supervisor' | 'vendedor';
  companyId?: number;
}

// Interfaz para la respuesta de login
export interface LoginResponse {
  user: {
    id: number;
    username: string;
    role: string;
    companyId?: number;
  };
  token: string;
}

// Servicio de autenticación
export class AuthService {
  // Método para hacer login
  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const { username, password } = credentials;
    
    // Buscar usuario por username
    const user = await prisma.user.findUnique({
      where: { username },
      include: { company: true }
    });
    
    if (!user) {
      throw new Error('Usuario o contraseña incorrectos');
    }
    
    // Verificar contraseña
    const isValidPassword = await comparePassword(password, user.password);
    
    if (!isValidPassword) {
      throw new Error('Usuario o contraseña incorrectos');
    }
    
    // Verificar que el usuario no esté eliminado
    if (user.deleted_at) {
      throw new Error('Usuario desactivado');
    }
    
    // Crear token JWT
    const tokenPayload: Omit<JWTPayload, 'iat' | 'exp'> = {
      userId: Number(user.id),
      username: user.username,
      role: user.role,
      companyId: user.company_id ? Number(user.company_id) : undefined
    };
    
    const token = createToken(tokenPayload);
    
    // Retornar datos del usuario y token
    return {
      user: {
        id: Number(user.id),
        username: user.username,
        role: user.role,
        companyId: user.company_id ? Number(user.company_id) : undefined
      },
      token
    };
  }
  
  // Método para registrar un nuevo usuario
  static async register(data: RegisterData): Promise<LoginResponse> {
    const { username, password, role, companyId } = data;
    
    // Verificar que el username no exista
    const existingUser = await prisma.user.findUnique({
      where: { username }
    });
    
    if (existingUser) {
      throw new Error('El nombre de usuario ya existe');
    }
    
    // Encriptar contraseña
    const hashedPassword = await hashPassword(password);
    
    // Crear usuario
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role,
        company_id: companyId || null
      },
      include: { company: true }
    });
    
    // Crear token JWT
    const tokenPayload: Omit<JWTPayload, 'iat' | 'exp'> = {
      userId: Number(user.id),
      username: user.username,
      role: user.role,
      companyId: user.company_id ? Number(user.company_id) : undefined
    };
    
    const token = createToken(tokenPayload);
    
    // Retornar datos del usuario y token
    return {
      user: {
        id: Number(user.id),
        username: user.username,
        role: user.role,
        companyId: user.company_id ? Number(user.company_id) : undefined
      },
      token
    };
  }
  
  // Método para obtener datos del usuario actual
  static async getCurrentUser(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { company: true }
    });
    
    if (!user || user.deleted_at) {
      throw new Error('Usuario no encontrado');
    }
    
    return {
      id: Number(user.id),
      username: user.username,
      role: user.role,
      companyId: user.company_id ? Number(user.company_id) : undefined,
      company: user.company ? {
        id: Number(user.company.id),
        name: user.company.name,
        cuit: user.company.cuit
      } : undefined
    };
  }
}
