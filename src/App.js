import logo from './logo.svg';
import champagne from './champagne.png';
import justChill from './juschill.mp3';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <div className='music'>
      <audio controls>
  <source src={justChill} type="audio/ogg" />
  <source src={justChill} type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>
=======
import dancingGirl from './dancinggirl.gif';

function App() {
  const audio = document.getElementById('music');
  console.log(audio);
  setTimeout(() => {
    console.log(audio);
    
  }, 2000);
  return (
    <div className="App">
      <div className='music'>
      {/* <audio controls autoPlay id="music">
  <source src={justChill} type="audio/mp3" />
</audio> */}
>>>>>>> Stashed changes
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={champagne} className="App-bottle1" alt="logo" />
        <img src={champagne} className="App-bottle2" alt="logo" />
        <img src={champagne} className="App-bottle3" alt="logo" />
        <img src={champagne} className="App-bottle4" alt="logo" />
<<<<<<< Updated upstream
=======
        <img src={dancingGirl} className="App-dancinggirl1" alt="logo" />
        <img src={dancingGirl} className="App-dancinggirl2" alt="logo" />
        <img src={dancingGirl} className="App-dancinggirl3" alt="logo" />
        <img src={dancingGirl} className="App-dancinggirl4" alt="logo" />
>>>>>>> Stashed changes
        
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
