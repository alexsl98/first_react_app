import { useState } from "react";
import "./InstagramCard.css";

function InstagramCard({ avatar, name, username, image, description }) {
  const [like, setLike] = useState(false);
  const [cantidadLikes, setCantidadLikes] = useState(1);

  const manejarLike = () => {
    if (like) {
      setLike(false);
      setCantidadLikes(cantidadLikes - 1);
    } else {
      setLike(true);
      setCantidadLikes(cantidadLikes + 1);
    }
  };

  return (
    <article className="instagram-card">
      <header className="instagram-card-header">
        <img
          src={avatar}
          alt="avatar"
          className="instagram-card-avatar"
        />
        <div className="instagram-card-user">
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </header>

      <div className="instagram-card-imagen">
        <img src={image} alt="post" />
      </div>

      {/* Botones con EMOJIS - No requiere instalación */}
      <div className="instagram-card-acciones">
        <button className="instagram-card-boton" onClick={manejarLike}>
          {like ? "❤️" : "🤍"}
        </button>
        <button className="instagram-card-boton">💬</button>
        <button className="instagram-card-boton">🔁</button>
      </div>

      <div className="instagram-card-likes">
        <strong>{cantidadLikes} me gusta</strong>
      </div>

      <div className="instagram-card-descripcion">
        <strong>{username}</strong>
        <span>
          {description}
        </span>
      </div>

      <div className="instagram-card-fecha">
        <span>HACE 2 HORAS</span>
      </div>
    </article>
  );
}

export default InstagramCard;
