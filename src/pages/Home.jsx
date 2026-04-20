import Drawer from "../components/Drawer";
import MyButton from "../components/MyButton";
import TwiterCard from "../components/TwiterCard";
import InstagramCard from "../components/InstagramCard";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Drawer />
      <h1>Bienvenido a mi sitio Web</h1>
      <p>Este es el contenido de la página de inicio.</p>

      {/* Tarjeta de Twitter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <TwiterCard
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYJS5N2kg_zbX-g_49IttarFYvJvbSvQeTQ&s"
          name="Alejandro Sánchez"
          username="alexsl98"
        />
      </div>

      <div className="bg-blue-500 text-white p-4 rounded-lg">
        ¡Tailwind está funcionando!
      </div>

      {/* Tarjeta de Instagram */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <InstagramCard
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYJS5N2kg_zbX-g_49IttarFYvJvbSvQeTQ&s"
          name="Alejandro Sánchez"
          username="alexsl98"
          image="https://picsum.photos/id/104/400/400"
          description="¡Aprendiendo React! 🚀"
        />
      </div>

      {/* Tarjeta de Instagram */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <InstagramCard
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYs2HyD0YakcmXpFmkGb0By5__7STOkweL67JktOutBDdY1a6m0tsGcW-dn81D3N-NJiYYjG4GGzcWXkgkcDNttSb7Go4DIhVud0ABA&s=10"
          name="Leo Messi"
          username="leomessi"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYs2HyD0YakcmXpFmkGb0By5__7STOkweL67JktOutBDdY1a6m0tsGcW-dn81D3N-NJiYYjG4GGzcWXkgkcDNttSb7Go4DIhVud0ABA&s=10"
          description="¡Here we go! 🚀"
        />
      </div>

      <MyButton />
    </div>
  );
}

export default Home;
