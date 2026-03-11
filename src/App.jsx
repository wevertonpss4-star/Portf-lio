import "./App.css";

function App() {
  const discordLink = "https://discord.gg/fKvTseGpFg";
  const linkedinLink =
    "https://www.linkedin.com/in/weverton-evangelista-ba98b32b3/";

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">👻 Ghost Dev</h1>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Desenvolvedor em formação</h2>
        <p>
          Criando aplicações modernas utilizando React, Node.js e JavaScript.
        </p>
      </section>

      <section id="sobre" className="card">
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Weverton. Sou estudante de Análise e Desenvolvimento de
          Sistemas e estou focado Tenho conhecimentos em linguagens como
          REACT.JS, NODE.JS, NEXT.JS, HTML e CSS, e venho me aprimorando em
          inteligência artificial
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="card">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
        </div>
      </section>

      <section id="contato" className="card">
        <h2>Contato</h2>
        <p>Contato: 11-96591-0899</p>
        <p>Email: wevertonpss4@gmail.com</p>
        <div className="buttons">
          <a
            className="btn discord"
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar no Discord
          </a>
          <a
            className="btn linkedin"
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Ghost Dev</p>
      </footer>
    </div>
  );
}

export default App;
