// src/components/InstagramCard.jsx
import { useState } from "react";

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
    <article className="max-w-[600px] min-w-[400px] w-full bg-white border border-gray-200 rounded-lg mb-5 overflow-hidden max-[400px]:min-w-auto max-[400px]:w-[95%]">
      {/* Header con avatar y nombre */}
      <header className="flex items-center p-3 gap-3">
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <strong className="text-sm text-gray-800">{name}</strong>
          <span className="text-xs text-gray-500">@{username}</span>
        </div>
      </header>

      {/* Imagen del post */}
      <div className="w-full aspect-square overflow-hidden">
        <img src={image} alt="post" className="w-full h-full object-cover" />
      </div>

      {/* Botones de acción */}
      <div className="flex gap-4 px-4 py-2">
        <button
          className="bg-transparent border-none cursor-pointer p-2 transition-transform hover:scale-105"
          onClick={manejarLike}
        >
          {like ? "❤️" : "🤍"}
        </button>
        <button className="bg-transparent border-none cursor-pointer p-2 transition-transform hover:scale-105">
          💬
        </button>
        <button className="bg-transparent border-none cursor-pointer p-2 transition-transform hover:scale-105">
          🔁
        </button>
      </div>

      {/* Likes */}
      <div className="px-4 mb-2 text-left">
        <strong className="text-sm text-gray-800">
          {cantidadLikes} me gusta
        </strong>
      </div>

      {/* Descripción */}
      <div className="flex gap-2 px-4 mb-2 text-left">
        <strong className="text-sm text-gray-800">{username}</strong>
        <span className="text-sm text-gray-800">{description}</span>
      </div>

      {/* Fecha */}
      <div className="px-4 pb-3 text-left">
        <span className="text-xs text-gray-400 tracking-wide">
          HACE 2 HORAS
        </span>
      </div>
    </article>
  );
}

export default InstagramCard;
