import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-80 border border-gray-300 rounded-md p-10">
        <div>
          <h1 className="text-2xl font-bold mb-4">Crea una cuenta</h1>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <Link to="/inicio" className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md inline-block">
            <button className="w-full h-full">
              Regístrate
            </button>
          </Link>
          <p>
            Si ya tienes cuenta{' '}
            <Link to="/" className="underline text-blue-500">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
