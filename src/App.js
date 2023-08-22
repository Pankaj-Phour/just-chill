import logo from './logo.svg';
import champagne from './champagne.png';
import justChill from './juschill.mp3';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='music'>
      <audio controls>
  <source src={justChill} type="audio/ogg" />
  <source src={justChill} type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={champagne} className="App-bottle1" alt="logo" />
        <img src={champagne} className="App-bottle2" alt="logo" />
        <img src={champagne} className="App-bottle3" alt="logo" />
        <img src={champagne} className="App-bottle4" alt="logo" />
        
        <p>
          Just chill <code>src/App.js</code> Just chill.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chandni Bar
        </a>
      </header>
    </div>
  );
}

export default App;
