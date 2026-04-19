import "./TwiterCard.css";
import { irAInstagram } from "../utils/navigation";
import usePersistentState from "../hooks/usePersistentState";

function TwiterCard({ avatar, name, username }) {
  const [isFollowing, setIsFollowing] = usePersistentState(
    `following_${username}`, 
    false, // ← valor inicial
  );

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="twiter-card">
      <header className="twiter-card-header">
        <img src={avatar} alt="avatar" className="twiter-card-avatar" />
        <div className="twiter-card-info">
          <strong className="twiter-card-name">{name}</strong>
          <span className="twiter-card-username">@{username}</span>
        </div>
      </header>

      <aside>
        <button
          className="twiter-card-button"
          onClick={() => {
            handleFollow();
            irAInstagram();
          }}
        >
          {text}
        </button>
      </aside>
    </article>
  );
}

export default TwiterCard;
