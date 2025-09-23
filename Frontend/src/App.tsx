import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import  LoginPage  from './pages/auth/Login';
import  AdminPage  from './pages/admin/dashboard/page';

// Componente principal de la aplicación
const AppContent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/AdminPage" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

// Componente raíz con providers
const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;