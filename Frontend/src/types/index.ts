// Tipos principales del sistema
export interface User {
  id: number;
  username: string;
  role: 'superadmin' | 'admin' | 'cajero' | 'vendedor';
  company_id?: number;
}

export interface Company {
  id: number;
  name: string;
  cuit?: string;
  address?: string;
  contact_info?: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  company_id: number;
}

export interface Sale {
  id: number;
  total_amount: number;
  payment_method: 'cash' | 'card' | 'transfer' | 'mixed';
  status: 'pending' | 'completed' | 'cancelled';
  invoiced: boolean;
  client_id?: number;
  user_id?: number;
  company_id: number;
  created_at: string;
}

export interface SaleItem {
  id: number;
  sale_id: number;
  product_id: number;
  quantity: number;
  price: number;
  product?: Product;
}

export interface Client {
  id: number;
  name: string;
  contact_info?: string;
  balance: number;
  company_id: number;
}

export interface CashRegister {
  id: number;
  opening_balance: number;
  closing_balance?: number;
  status: 'open' | 'closed';
  user_id: number;
  company_id: number;
  created_at: string;
}

// Tipos para formularios
export interface LoginForm {
  username: string;
  password: string;
}

export interface ProductForm {
  name: string;
  description?: string;
  price: number;
  stock: number;
}

export interface SaleForm {
  client_id?: number;
  payment_method: 'cash' | 'card' | 'transfer' | 'mixed';
  items: {
    product_id: number;
    quantity: number;
    price: number;
  }[];
}

// Tipos para la API
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
