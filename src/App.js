import logo from './logo_uss.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Il sito è ancora in fase di <code>Sviluppo</code>.<br/>
          Torna presto per sapere quando sarà live!
        </p>
      </header>
    </div>
  );
}

export default App;
