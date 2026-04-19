// src/pages/AboutUs.jsx
import "./style/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Sección de texto principal */}
        <div className="about-us-text">
          <span className="about-us-badge">✨ SOBRE NOSOTROS</span>
          <h1 className="about-us-title">
            Creamos experiencias{" "}
            <span className="text-gradient">digitales</span> que inspiran
          </h1>
          <p className="about-us-description">
            En mi aplicación, creemos en el poder de la tecnología para conectar
            personas. Este proyecto nace con la idea de aprender y compartir
            conocimiento sobre React y el desarrollo web moderno, creando
            herramientas útiles y atractivas.
          </p>
          <p className="about-us-description">
            Estoy comprometido con la mejora continua y la adopción de las
            mejores prácticas, para ofrecer una experiencia de usuario
            excepcional.
          </p>
        </div>

        {/* Sección visual/decorativa (inspirada en la imagen) */}
        <div className="about-us-visual">
          <div className="visual-card">
            <div className="visual-icon">🚀</div>
            <h3>Pasión por el código</h3>
            <p>Escribir código limpio y eficiente es mi prioridad.</p>
          </div>
          <div className="visual-card">
            <div className="visual-icon">💡</div>
            <h3>Aprendizaje continuo</h3>
            <p>Siempre explorando nuevas tecnologías y tendencias.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
