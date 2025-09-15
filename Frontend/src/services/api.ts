import axios from 'axios';
import type { ApiResponse, PaginatedResponse } from '../types';

// Configuración base de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token de autenticación
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Funciones de API
export const authApi = {
  login: (credentials: { username: string; password: string }) =>
    api.post<ApiResponse<{ token: string; user: any }>>('/auth/login', credentials),
  
  logout: () => api.post('/auth/logout'),
};

export const companyApi = {
  getAll: () => api.get<ApiResponse<any[]>>('/companies'),
  getById: (id: number) => api.get<ApiResponse<any>>(`/companies/${id}`),
  create: (data: any) => api.post<ApiResponse<any>>('/companies', data),
  update: (id: number, data: any) => api.put<ApiResponse<any>>(`/companies/${id}`, data),
  delete: (id: number) => api.delete<ApiResponse<void>>(`/companies/${id}`),
};

export const productApi = {
  getAll: (companyId: number) => api.get<ApiResponse<any[]>>(`/companies/${companyId}/products`),
  getById: (id: number) => api.get<ApiResponse<any>>(`/products/${id}`),
  create: (companyId: number, data: any) => api.post<ApiResponse<any>>(`/companies/${companyId}/products`, data),
  update: (id: number, data: any) => api.put<ApiResponse<any>>(`/products/${id}`, data),
  delete: (id: number) => api.delete<ApiResponse<void>>(`/products/${id}`),
};

export const saleApi = {
  getAll: (companyId: number) => api.get<ApiResponse<any[]>>(`/companies/${companyId}/sales`),
  getById: (id: number) => api.get<ApiResponse<any>>(`/sales/${id}`),
  create: (companyId: number, data: any) => api.post<ApiResponse<any>>(`/companies/${companyId}/sales`, data),
  update: (id: number, data: any) => api.put<ApiResponse<any>>(`/sales/${id}`, data),
  delete: (id: number) => api.delete<ApiResponse<void>>(`/sales/${id}`),
};

export const clientApi = {
  getAll: (companyId: number) => api.get<ApiResponse<any[]>>(`/companies/${companyId}/clients`),
  getById: (id: number) => api.get<ApiResponse<any>>(`/clients/${id}`),
  create: (companyId: number, data: any) => api.post<ApiResponse<any>>(`/companies/${companyId}/clients`, data),
  update: (id: number, data: any) => api.put<ApiResponse<any>>(`/clients/${id}`, data),
  delete: (id: number) => api.delete<ApiResponse<void>>(`/clients/${id}`),
};

export const cashApi = {
  getRegisters: (companyId: number) => api.get<ApiResponse<any[]>>(`/companies/${companyId}/cash-registers`),
  openRegister: (companyId: number, data: any) => api.post<ApiResponse<any>>(`/companies/${companyId}/cash-registers`, data),
  closeRegister: (id: number, data: any) => api.put<ApiResponse<any>>(`/cash-registers/${id}/close`, data),
  getMovements: (registerId: number) => api.get<ApiResponse<any[]>>(`/cash-registers/${registerId}/movements`),
  addMovement: (registerId: number, data: any) => api.post<ApiResponse<any>>(`/cash-registers/${registerId}/movements`, data),
};

export default api;
