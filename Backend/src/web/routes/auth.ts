import { Router } from 'express';
import { login, register, getCurrentUser, logout } from '../../controllers/auth.controller';
import { authenticateToken } from '../../middleware/auth';

const router = Router();

// Rutas públicas (no requieren autenticación)
router.post('/login', login);
router.post('/register', register);

// Rutas protegidas (requieren autenticación)
router.get('/me', authenticateToken, getCurrentUser);
router.post('/logout', authenticateToken, logout);

export default router;
