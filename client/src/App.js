import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WelcomePage from './WelcomePage';
import AlkonistProf from "./AlkonistProf.js";
import CaladriusProf from "./CaladriusProf.js";
import PhoenixProf from "./PhoenixProf.js";
import SirinProf from "./SirinProf.js";
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
     <div class='container-fluid'>
     <NavBar />
     </div>
     <Route path='/'>
       <WelcomePage />
     </Route>
     {/* <Route path='/quiz'>
       <Quiz />
     </Route>
    <Route path='/login'>
      <Login />
    </Route>
    <Route path=''>

    </Route> */}
    </div>

  );
}



export default App;
