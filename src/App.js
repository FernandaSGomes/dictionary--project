import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by {""}
            <a
              href="https://the-dictionary-project.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Fernanda Gomes{" "}
            </a>{" "}
            and open-sourced on{" "}
            <a
              href="https://github.com/FernandaSGomes/dictionary--project"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://the-dictionary-project.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
