// src/components/TwiterCard.jsx
import { irAInstagram } from "../utils/navigation";
import usePersistentState from "../hooks/usePersistentState";

function TwiterCard({ avatar, name, username }) {
  const [isFollowing, setIsFollowing] = usePersistentState(
    `following_${username}`,
    false,
  );

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="border border-gray-200 rounded-2xl p-4 my-2 flex justify-between items-center max-w-[600px] min-w-[400px] w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 max-[400px]:flex-col max-[400px]:text-center max-[400px]:gap-3 max-[400px]:min-w-auto max-[400px]:w-[90%]">
      <header className="flex gap-3 items-center max-[400px]:flex-col">
        <img
          src={avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1 max-[400px]:items-center">
          <strong className="text-base font-bold text-gray-900 m-0">
            {name}
          </strong>
          <span className="text-sm text-gray-500 m-0 text-left max-[400px]:text-center">
            @{username}
          </span>
        </div>
      </header>

      <aside>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white border-none rounded-full px-4 py-2 text-sm font-bold cursor-pointer transition-colors duration-300 active:scale-95"
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
  