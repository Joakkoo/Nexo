import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/auth/Login";
import AdminPage from "./pages/admin/dashboard/page";
import NuevaEmpresa from "./pages/admin/dashboard/registerCompany";
import PrivateRoute from "./components/PrivateRoute";

const AppContent: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas privadas */}
        <Route
          path="/superadmin/*"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/superadmin/empresas/nueva"
          element={
            <PrivateRoute>
              <NuevaEmpresa />
            </PrivateRoute>
          }
        />

        {/* Redirecciones */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
