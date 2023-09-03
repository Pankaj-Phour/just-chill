import './App.css';
import { Navbar } from './navbar.js';
import { Home } from './home.js';
import { Contact } from './contact.js';
import { About } from './about.js';
import { Help } from './help.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      {/* <Route index element={<Navbar />} /> */}
      <Route path='/' element={<Home />} />
      {/* <Home /> */}
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/help' element={<Help />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
