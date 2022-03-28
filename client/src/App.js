import './App.css';
import WelcomePage from './WelcomePage';
import AlkonistProf from "./AlkonistProf.js";
import CaladriusProf from "./CaladriusProf.js";
import PhoenixProf from "./PhoenixProf.js";
import SirinProf from "./SirinProf.js";
import React, {useState} from 'react'

function App() {
  const [name, setName] = useState(null);

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
