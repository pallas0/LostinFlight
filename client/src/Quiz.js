import React, { useEffect, useState } from "react";

function Quiz() {
  const [initialList, setInitialList] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/quizzes`)
      .then((resp) => resp.json())
      .then((data) => setInitialList(data));
  }, []);
  const questions = initialList.map((question) => question.question);
  // console.log(questions)

  return (
    <div>
      <h1>Quiz</h1>
      <div>{questions}</div>
    </div>
  );
}

export default Quiz;
