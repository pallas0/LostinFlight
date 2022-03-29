import React, { useReducer, useEffect, useState } from "react";

function Quiz() {
  const questionFormat = {
    id: "",
    questionText: "",
    answers: [
      {
        answerText: "",
        attribute: "",
      },
    ],
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inGame, setInGame] = useState(true)
  const [initialList, setInitialList] = useState([]);
  // State reducer for attribute tally
  const initialState = {
    Ambition: 0,
    Empathy: 0,
    Creativity: 0,
    Assertiveness: 0,
    Optimism: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "Ambition":
        newState = { ...state, Ambition: state.Ambition + 1 };
        break;
      case "Empathy":
        newState = { ...state, Empathy: state.Empathy + 1 };
        break;
      case "Creativity":
        newState = { ...state, Creativity: state.Creativity + 1 };
        break;
      case "Assertiveness":
        newState = { ...state, Assertiveness: state.Assertiveness + 1 };
        break;
      case "Optimism":
        newState = { ...state, Optimism: state.Optimism + 1 };
        break;
      default:
        return state;
    }
    return newState;
  }
  function handleClick(e) {
    console.log(e);
    dispatch({ type: e.target.name });
  }
  useEffect(() => {
    console.log(state, inGame);
  }, [state, inGame]);

  const handleAnswerButtonClick = (answer) => {
    dispatch({ type: answer.attribute });

    const nextQuestion = currentQuestion + 1;
    console.log(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else  {
      console.log("end of quiz");
      setInGame(false)
    } 
  };
  const questions = [
    {
      id: 1,
      questionText: "You and your friends are lost in the woods. You",
      answers: [
        {
          answerText:
            "Assure everyone that everything is ok and that you’ll find a way out together",
          attribute: "Empathy",
        },
        {
          answerText:
            "Take the lead and devise a plan that you urge everyone to follow ",
          attribute: "Assertiveness",
        },
        {
          answerText:
            "Trust your senses and walk confidently in the direction from which you came",
          attribute: "Creativity",
        },
      ],
    },
    {
      id: 2,
      questionText: "Question text 2",
      answers: [
        { answerText: "Goblet 3", attribute: "Assertiveness" },
        { answerText: "Goblet 1", attribute: "Creativity" },
        { answerText: "Goblet 2", attribute: "Ambition" },
      ],
    },
    {
      id: 3,
      questionText: "Question text 3",
      answers: [
        {
          answerText:
            "Congratulate the opponent & dismiss yourself to search for more prey.",
          attribute: "Creativity",
        },
        {
          answerText: "Plan a rematch, training starts now.",
          attribute: "Ambition",
        },
        {
          answerText:
            "You’re happy with the battle and congratulate the opponent on their win, there will be more soon.",
          attribute: "Optimism",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <>
        <div className="question-section">
          <div className="question-count">
            <span></span>
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answers.map((answer) => (
            <button onClick={() => handleAnswerButtonClick(answer)}>
              {answer.answerText}
            </button>
          ))}
          {state.Empathy}
        </div>
      </>
    </div>
  );
}

export default Quiz;
