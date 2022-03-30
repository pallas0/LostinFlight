import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomePage from './WelcomePage';
import AlkonistProf from "./legend_profiles/AlkonistProf.js";
import CaladriusProf from "./legend_profiles/CaladriusProf.js";
import PhoenixProf from "./legend_profiles/PhoenixProf.js";
import SirinProf from "./legend_profiles/SirinProf.js";
import RokhProf from './legend_profiles/RokhProf';
import NavBar from './NavBar';
import React, {useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom";
import SignUp from './SignUp';
import Login from './Login';
import Quiz from './components/quiz/Quiz'






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
      <Switch>
        <Route path='/quiz' >
          <Quiz />  
        </Route>
        <Route exact path='/'>
          <WelcomePage />
        </Route> 
     </Switch>
    </div>

  );
}



export default App;
