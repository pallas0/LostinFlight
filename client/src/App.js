import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomePage from './WelcomePage';
import AlkonistProf from "./AlkonistProf.js";
import CaladriusProf from "./CaladriusProf.js";
import PhoenixProf from "./PhoenixProf.js";
import SirinProf from "./SirinProf.js";
import RokhProf from './RokhProf';
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from './SignUp';
import Login from './Login';






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
     <div class='container-fluid'>
     </div>
    <Route exact path='/AlkonistProf'>
      <AlkonistProf />
    </Route>
    <Route exact path='/CaladriusProf'>
      <CaladriusProf />
    </Route>
    <Route exact path='/PhoenixProf'>
      <PhoenixProf />
    </Route>
    <Route exact path='/RokhProf'>
      <RokhProf />
    </Route>
    <Route exact path='/SirinProf'>
      <SirinProf />
    </Route>
    <Route exact path='/'>
       <WelcomePage />
     </Route>
    </div>

  );
}



export default App;
