import './styles/App.css';
import Portafolio from './components/portafolio';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/sections/Home';
import About from './components/sections/About';
import Contact from './components/sections/Contac';
import Portfolio from './components/sections/Portfolio';
import Skills from './components/sections/Skills';

function App() {
  return (
    <>
    <Router>
    <Portafolio/>
    <div className='sections'>
    <Routes>
        <Route path="/Home" caseSensitive={false} element={<Home />} />
        <Route path="/About" caseSensitive={false} element={<About />} />
        <Route path="/Contact" caseSensitive={false} element={<Contact />} />
        <Route path="/Portfolio" caseSensitive={false} element={<Portfolio />} />
        <Route path="/Skills" caseSensitive={false} element={<Skills />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
