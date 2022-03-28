import './App.css';
import WelcomePage from './WelcomePage';
import AlkonistProf from "./AlkonistProf.js";
import CaladriusProf from "./CaladriusProf.js";
import PhoenixProf from "./PhoenixProf.js";
import SirinProf from "./SirinProf.js";
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react'
import Labstor from './components/labstor/Labstor'

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
     <NavBar/>
     <WelcomePage onLogin={setUsername}/>
     Hello, Project Ppl!
     <AlkonistProf />
     <CaladriusProf />
     <PhoenixProf />
     <SirinProf />
     <Labstor/>
    </div>

  );
}


export default App;
