import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';

const IMG = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop';
const API = 'http://localhost:3001';

const EMPTY = { nombre_completo: '', username: '', password: '', salario: '', rol: 'cajero' };

const NewUserForm = () => {
  const [form, setForm] = useState(EMPTY);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res  = await fetch(`${API}/api/users`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      console.log('✅ Usuario creado:', data);
      setForm(EMPTY);
      navigate('/admin/empleados');
    } catch (err) {
      console.error('❌ Error al crear usuario:', err);
    }
  };

  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-16 max-w-7xl w-full items-center">

        {/* Columna izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            <span className="text-emerald-400">Panel de </span>
            <span className="text-white">Administración</span>
          </h2>
          <p className="text-slate-400 text-base mb-8 leading-relaxed max-w-md">
            Registra nuevos empleados en el sistema bancario. Los datos
            se almacenan directamente en la base de datos PostgreSQL
            sin cifrado de contraseña.
          </p>
          <img
            src={IMG}
            alt="Dashboard analytics"
            className="w-full h-72 object-cover rounded-2xl shadow-xl border border-slate-700/40 hover:border-emerald-500/50 transition-colors"
          />
        </div>

        {/* Columna derecha (formulario) */}
        <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <FiUserPlus className="text-emerald-400 text-2xl" />
            </div>
            <h3 className="text-white font-bold text-xl">Nuevo Empleado</h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Nombre Completo</label>
              <input
                type="text"
                name="nombre_completo"
                value={form.nombre_completo}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez López"
                className="w-full bg-slate-900 border border-slate-700 text-white text-base rounded-xl px-5 py-3 outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="cajero01"
                  className="w-full bg-slate-900 border border-slate-700 text-white text-base rounded-xl px-5 py-3 outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Password (texto plano)</label>
                <input
                  type="text"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="sin cifrar"
                  className="w-full bg-slate-900 border border-slate-700 text-white text-base rounded-xl px-5 py-3 outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Salario (Bs.)</label>
                <input
                  type="number"
                  name="salario"
                  value={form.salario}
                  onChange={handleChange}
                  placeholder="8500"
                  className="w-full bg-slate-900 border border-slate-700 text-white text-base rounded-xl px-5 py-3 outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Rol</label>
                <select
                  name="rol"
                  value={form.rol}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 text-white text-base rounded-xl px-5 py-3 outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  <option value="cajero">Cajero</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] mt-4 text-lg cursor-pointer"
            >
              <FiUserPlus />
              Registrar Empleado
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUserForm;
