import { useState } from "react";
import { Link } from "react-router-dom";
import "./Drawer.css";

function Drawer() {
  const [abierto, setAbierto] = useState(false);

  // Función para cerrar el drawer después de navegar
  const cerrarDrawer = () => {
    setAbierto(false);
  };

  return (
    <>
      {/* Botón para abrir el drawer */}
      <button className="drawer-boton-abrir" onClick={() => setAbierto(true)}>
        ☰ Menú
      </button>

      {/* Fondo oscuro (overlay) */}
      {abierto && <div className="drawer-overlay" onClick={cerrarDrawer} />}

      {/* El drawer (menú lateral) */}
      {abierto && (
        <div className="drawer">
          <button className="drawer-boton-cerrar" onClick={cerrarDrawer}>
            ✕ Cerrar
          </button>

          <h2 className="drawer-titulo">React App</h2>

          {/* Convertimos los div en Link */}
          <Link to="/" className="drawer-menu-item" onClick={cerrarDrawer}>
            Inicio
          </Link>

          <Link to="/about" className="drawer-menu-item" onClick={cerrarDrawer}>
            Acerca de
          </Link>

          <Link
            to="/profile"
            className="drawer-menu-item"
            onClick={cerrarDrawer}
          >
            Perfil
          </Link>

          <Link
            to="/settings"
            className="drawer-menu-item"
            onClick={cerrarDrawer}
          >
            Configuración
          </Link>
        </div>
      )}
    </>
  );
}

export default Drawer;
