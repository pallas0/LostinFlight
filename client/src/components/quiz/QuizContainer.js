import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

function QuizContainer() {
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

  const userTest = {
    id: 1,
    name: "person"
  }

  // console.log(username)

  useEffect(() => {
    fetch("http://127.0.0.1:3000/quiz_questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function updateProfile(discoveredTrait){
    console.log(discoveredTrait)
      function parseTrait(trait_to_parse){
        switch (trait_to_parse) {
            case "Ambition":
                return 1
                break
            case "Empathy":
                return 2
                break
            case "Creativity":
                return 3
                break
            case "Assertiveness":
                return 4
                break
            case "Optimism":
                return 5
                break
            default:
                return 0
        }
    }
    
    const traitId = parseTrait(discoveredTrait)
    console.log(traitId)
    const updates ={
        legend_id: traitId
    }
    fetch(`http://127.0.0.1/users/${userTest.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <Quiz onProfileUpdate={updateProfile} questions={questions} />
    </div>
  );
}

export default QuizContainer;


