import './App.css';
import WelcomePage from './WelcomePage';
import AlkonistProf from "./AlkonistProf.js";
import CaladriusProf from "./CaladriusProf.js";
import PhoenixProf from "./PhoenixProf.js";
import SirinProf from "./SirinProf.js";
import React, {useState, useEffect} from 'react'

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((name) => setName(name));
      }
    });
  }, []);

  return (
   <div>
     <WelcomePage onLogin={setName}/>
     Hello, Project Ppl!
     <AlkonistProf />
     <CaladriusProf />
     <PhoenixProf />
     <SirinProf />
    </div>

  );
}


export default App;
