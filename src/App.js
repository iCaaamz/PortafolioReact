import './styles/App.css';
import Portafolio from './components/portafolio';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Portafolio/>
    </Router>
    </>
  );
}

export default App;
