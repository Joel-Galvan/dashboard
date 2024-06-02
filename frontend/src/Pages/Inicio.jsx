import Header from "../components/Header";
import Contenido from "../components/Contenido";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../Firebase/config"

export default function Inicio() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get('name');
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      // Cierra la sesión del usuario utilizando Firebase
      await auth.signOut();
      // Redirige al usuario a la página de inicio de sesión
      navigate('/')
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          userName={userName}
          onLogout={handleLogout}
        />

        {/* Header y Contenido */}
        <div className="flex-1 flex flex-col">
          <Header />

          {/* Contenido */}
          <div className="flex-1 overflow-auto">
            <Contenido
              userName={userName}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
