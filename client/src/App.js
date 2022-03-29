import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomePage from './WelcomePage';
import AlkonistProf from "./AlkonistProf.js";
import CaladriusProf from "./CaladriusProf.js";
import PhoenixProf from "./PhoenixProf.js";
import SirinProf from "./SirinProf.js";
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react'
import QuizHome from './components/tallyHo/QuizHome';

// import Labstor from './components/labstor/Labstor'

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((name) => setUsername(name));
      }
    });
  }, []);

  return (
   <div>
     <NavBar onLogout={setUsername}/>
     <WelcomePage onLogin={setUsername}/>
     <AlkonistProf />
     <CaladriusProf />
     <PhoenixProf />
     <SirinProf />

    </div>

  );
}


export default App;
