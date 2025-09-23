import { Request, Response, NextFunction } from 'express';
import { verifyToken, extractTokenFromHeader } from '../utils/auth';
import { JWTPayload } from '../config/jwt';

// Extender el tipo Request para incluir user
declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

// Middleware de autenticación
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Extraer token del header Authorization
    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token de acceso requerido'
      });
    }
    
    // Verificar el token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido o expirado'
      });
    }
    
    // Agregar datos del usuario a la request
    req.user = decoded;
    
    // Continuar con el siguiente middleware
    next();
  } catch (error) {
    console.error('Error in authentication middleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
};

// Middleware para verificar roles específicos
export const requireRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no autenticado'
      });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para acceder a este recurso'
      });
    }
    
    next();
  };
};

// Middleware para verificar que el usuario pertenece a una empresa específica
export const requireCompany = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Usuario no autenticado'
    });
  }
  
  // Superadmin puede acceder a cualquier empresa
  if (req.user.role === 'superadmin') {
    return next();
  }
  
  // Otros usuarios deben tener companyId
  if (!req.user.companyId) {
    return res.status(403).json({
      success: false,
      message: 'Usuario no asociado a ninguna empresa'
    });
  }
  
  next();
};
