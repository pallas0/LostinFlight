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

  useEffect(() => {
    fetch("http://127.0.0.1:3000/quiz_questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);
  console.log(questions);
  return (
    <div>
      <Quiz questions={questions} />
    </div>
  );
}

export default QuizContainer;


