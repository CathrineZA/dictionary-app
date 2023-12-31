import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary📖</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sky" />
        </main>
        <footer className="text-center">
          <small>
            Coded with ❤ by{" "}
            <a href="https://github.com/CathrineZA/dictionary-app">Cathy</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
