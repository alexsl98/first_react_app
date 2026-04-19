import React, { useState } from "react";
import "./style/Profile.css";

function Profile() {
  // Estado inicial del usuario
  const [usuario, setUsuario] = useState({
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYJS5N2kg_zbX-g_49IttarFYvJvbSvQeTQ&s",
    nombre: "Alejandro Sánchez",
    email: "alejandro@example.com",
    ubicacion: "La Habana, Cuba",
    bio: "Desarrollador React apasionado por la tecnología 🚀",
    sitioWeb: "https://github.com/alexsl98",
  });

  // Estado para saber si estamos editando
  const [editando, setEditando] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Guardar cambios
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditando(false);
    alert("¡Perfil actualizado con éxito!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Avatar */}
        <div className="avatar-section">
          <img src={usuario.avatar} alt="Avatar" className="profile-avatar" />
          {editando && (
            <button className="btn-cambiar-avatar">Cambiar avatar</button>
          )}
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={usuario.nombre}
              onChange={handleChange}
              disabled={!editando}
              className={!editando ? "readonly" : ""}
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
              disabled={!editando}
              className={!editando ? "readonly" : ""}
            />
          </div>

          <div className="form-group">
            <label>Ubicación</label>
            <input
              type="text"
              name="ubicacion"
              value={usuario.ubicacion}
              onChange={handleChange}
              disabled={!editando}
              className={!editando ? "readonly" : ""}
            />
          </div>

          <div className="form-group">
            <label>Biografía</label>
            <textarea
              name="bio"
              rows="4"
              value={usuario.bio}
              onChange={handleChange}
              disabled={!editando}
              className={!editando ? "readonly" : ""}
            />
          </div>

          <div className="form-group">
            <label>Sitio web</label>
            <input
              type="url"
              name="sitioWeb"
              value={usuario.sitioWeb}
              onChange={handleChange}
              disabled={!editando}
              className={!editando ? "readonly" : ""}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
