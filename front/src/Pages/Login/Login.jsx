import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiLock, FiArrowRight } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';

const BG  = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';
const API = 'http://localhost:3001';

const Login = () => {
  const [usuario,  setUsuario]  = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res  = await fetch(`${API}/api/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ username: usuario, password }),
    });
    const data = await res.json();

    // Guardamos el objeto usuario en localStorage (vulnerabilidad intencional)
    localStorage.setItem('usuario_banco', JSON.stringify(data.usuario));

    if (data.usuario?.rol === 'admin') navigate('/admin');
    else navigate('/empleado');
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 relative"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-slate-900/82 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/50 mb-4">
            <MdSpaceDashboard className="text-white text-2xl" />
          </div>
          <h1 className="text-white text-2xl font-bold">Banco Unión</h1>
          <p className="text-slate-400 text-sm mt-1">Sistema de Gestión de Nóminas</p>
        </div>

        <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-slate-700/50">
          <h2 className="text-white font-semibold text-lg mb-6">Accede a tu cuenta</h2>

          <div className="mb-4">
            <label className="block text-sm text-slate-400 mb-2">Usuario</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Ej: cajero01 o admin"
                className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-slate-400 mb-2">Contraseña</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
          >
            Entrar <FiArrowRight />
          </button>

          <p className="text-slate-600 text-xs text-center mt-5">
            ¿Problemas de acceso? Contacta al área de Sistemas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
