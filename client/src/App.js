import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomePage from './WelcomePage';
import AlkonistProf from "./AlkonistProf.js";
import CaladriusProf from "./CaladriusProf.js";
import PhoenixProf from "./PhoenixProf.js";
import SirinProf from "./SirinProf.js";
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react'

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUsername(user));
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
    </div>

  );
}


export default App;
