import usePersistentState from "../hooks/usePersistentState";

function Settings() {

  const [counter, setCounter] = usePersistentState("counter", 0);
  const [theme, setTheme] = usePersistentState("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.body.style.backgroundColor = "#1e293b";
      document.body.style.color = "#f8f8f8";
    } else {
      document.body.style.backgroundColor = "#f8f8f8";
      document.body.style.color = "#1e293b";
    }
  };


  const functionCOunter = () => {
    setCounter(counter + 1);
  };
  return (
    <div style={{ padding: "80px 20px 20px 20px", textAlign: "center" }}>
      <h1>⚙️ Configuración</h1>
      <p>Preferencias de la aplicación</p>
      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "oscuro" : "claro"}
      </button>
      <p>Contador: {counter}</p>
      <button onClick={functionCOunter}>+</button>
    </div>
  );
}

export default Settings;
