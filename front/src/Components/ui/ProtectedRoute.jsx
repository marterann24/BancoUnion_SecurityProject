import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated, requiredRol }) => {
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (requiredRol === 'admin') {
    const stored  = localStorage.getItem('usuario_banco');
    const usuario = stored ? JSON.parse(stored) : null;
    if (usuario?.rol !== 'admin') return <Navigate to="/empleado" replace />;
  }

  return children;
};

export default ProtectedRoute;
