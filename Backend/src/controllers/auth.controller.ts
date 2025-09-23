import { Request, Response } from 'express';
import { AuthService, LoginCredentials, RegisterData } from '../services/auth.service';

// Controlador para el login
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password }: LoginCredentials = req.body;
    
    // Validar datos requeridos
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username y password son requeridos'
      });
    }
    
    // Intentar hacer login
    const result = await AuthService.login({ username, password });
    
    res.json({
      success: true,
      message: 'Login exitoso',
      data: result
    });
    
  } catch (error) {
    console.error('Login error:', error);
    
    res.status(401).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error en el login'
    });
  }
};

// Controlador para el registro
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, role, companyId }: RegisterData = req.body;
    
    // Validar datos requeridos
    if (!username || !password || !role) {
      return res.status(400).json({
        success: false,
        message: 'Username, password y role son requeridos'
      });
    }
    
    // Validar rol
    const validRoles = ['superadmin', 'admin', 'supervisor', 'vendedor'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Rol inválido. Debe ser: superadmin, admin, supervisor o vendedor'
      });
    }
    
    // Intentar registrar usuario
    const result = await AuthService.register({ username, password, role, companyId });
    
    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      data: result
    });
    
  } catch (error) {
    console.error('Register error:', error);
    
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error en el registro'
    });
  }
};

// Controlador para obtener usuario actual
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Usuario no autenticado'
      });
    }
    
    const user = await AuthService.getCurrentUser(userId);
    
    res.json({
      success: true,
      data: user
    });
    
  } catch (error) {
    console.error('Get current user error:', error);
    
    res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : 'Error al obtener usuario'
    });
  }
};

// Controlador para logout (opcional, ya que JWT es stateless)
export const logout = async (req: Request, res: Response) => {
  // Con JWT, el logout es principalmente del lado del cliente
  // Aquí podríamos implementar una blacklist de tokens si fuera necesario
  
  res.json({
    success: true,
    message: 'Logout exitoso'
  });
};
