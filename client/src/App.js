import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import WelcomePage from "./WelcomePage";
// import AlkonistProf from "./legend_profiles/AlkonistProf.js";
// import CaladriusProf from "./legend_profiles/CaladriusProf.js";
// import PhoenixProf from "./legend_profiles/PhoenixProf.js";
// import SirinProf from "./legend_profiles/SirinProf.js";
// import RokhProf from './legend_profiles/RokhProf';
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import SignUp from './SignUp';
// import Login from './Login';
<<<<<<< HEAD
import BirdCollection from "./components/collection/BirdCollection";
import QuizContainer from "./components/quiz/QuizContainer";
import PreGameModal from "./PreGameModal";

function App() {
  const userObj = { id: "", username: "", birthday: "", admin: "",  legend: {
    id: "", 
    name: "", 
    bio: "", 
    trait: ""
  }};
  const [username, setUsername] = useState({ userObj });
  const [preGameShowing, setPreGameShowing] = useState(false);
=======
import BirdCollection from './components/collection/BirdCollection';
import QuizContainer from './components/quiz/QuizContainer';
import PreGameModal from './PreGameModal';
import NewLegendModal from './NewLegendModal';


function App() {
  const [username, setUsername] = useState(null);
  const [preGameShowing, setPreGameShowing] = useState(false)
  const [newLegendShowing, setNewLegendShowing] = useState(false)
>>>>>>> main
  const [newUser, setNewUser] = useState({
    userObj
});

  function welcomeNewUser(newUser) {
    setNewUser(newUser);
    setPreGameShowing(true);
  }

<<<<<<< HEAD
  function handleNewUserCreate(newCreatedUser) {
    setUsername(newCreatedUser);
=======
  function handleNewUserCreate(newCreatedUser){
    setUsername(newCreatedUser)
    setNewLegendShowing(true)
<<<<<<< HEAD
>>>>>>> main
=======
    console.log(newCreatedUser)
>>>>>>> main
  }

  //fetch the logged in user
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((name) => setUsername(name));
      }
    });
  }, []);

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <NavBar onLogout={setUsername} user={username} />
=======
          <button onClick={() => setNewLegendShowing(true)}>show me</button>
      {/* <NavBar onLogout={setUsername} user={username}/> */}
>>>>>>> main
=======
      <NavBar onLogout={setUsername} user={username}/>
>>>>>>> main
      <Switch>
        <Route path="/collection">
          <BirdCollection currentuser={username} />
        </Route>
        <Route path="/quiz">
          <QuizContainer user={newUser} onNewUserCreate={handleNewUserCreate} />
        </Route>
        <Route exact path="/">
          <WelcomePage onLogin={setUsername} welcomeNewUser={welcomeNewUser} />
        </Route>
      </Switch>
<<<<<<< HEAD
      {preGameShowing ? <PreGameModal newUser={newUser} /> : null}
=======
          {/* <button onClick={() => setNewLegendShowing(true)}>show me</button> */}
      {preGameShowing ? <PreGameModal newUser={newUser}/> : null}
      {newLegendShowing ? <NewLegendModal /> : null}
>>>>>>> main
    </div>
  );
}

export default App;
