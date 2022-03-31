import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
import QuizResultsModal from "./QuizResultsModal";

function QuizContainer({ user, onNewUserCreate }) {
  let emptyobj = {
    id: "",
    questionText: "",
    quiz_answers: [
      { answerText: "", trait: "" },
      { answerText: "", trait: "" },
      { answerText: "", trait: "" },
    ],
  };
  const [questions, setQuestions] = useState([emptyobj]);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  console.log(loggedInUser);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/quiz_questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function updateProfile(discoveredTrait) {
    console.log(discoveredTrait);
    function parseTrait(trait_to_parse) {
      switch (trait_to_parse) {
        case "Ambition":
          return 1;
        case "Empathy":
          return 2;
        case "Creativity":
          return 3;
        case "Assertiveness":
          return 4;
        case "Optimism":
          return 5;
        default:
          return 0;
      }
    }
    const traitId = parseTrait(discoveredTrait);

    const userToWrite = {
<<<<<<< HEAD
      username: loggedInUser.username,
      birthday: loggedInUser.birthday,
      legend_id: traitId,
    };
    fetch(`http://127.0.0.1:3000/users/`, {
      method: "POST",
      headers: {
=======
        username: loggedInUser.username,
        birthday: loggedInUser.birthday,
        legend_id: traitId
    }
    fetch(`/users`, {
        method: "POST",
        headers: {
>>>>>>> main
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToWrite),
    })
      .then((response) => response.json())
      .then((data) => onNewUserCreate(data));
  }

  return (
<<<<<<< HEAD
    <>
      <div>
        <Quiz onProfileUpdate={updateProfile} questions={questions} />
      </div>
      <div>
        <QuizResultsModal />
      </div>
    </>
=======
    <div>
      <Quiz onProfileUpdate={updateProfile} questions={questions} />
    </div>
>>>>>>> main
  );
}

export default QuizContainer;
