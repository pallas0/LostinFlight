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
  const [legend, setLegend] = useState()
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

  useEffect(() => {
    console.log(state, inGame);
  }, [state, inGame]);
  
  useEffect(() => {
    calculate()
  }, [inGame]);



  const handleAnswerButtonClick = (answer) => {
    dispatch({ type: answer.attribute });
    
    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    } else  {
      console.log("end of quiz");
      setInGame(false)
    } 
  };

    function calculate(){
      console.log("calculating..." )

      // Object.keys(state).reduce((a, b) => state[a] > state[b] ? a : b) 


      const values = Object.values(state)
      const max = Math.max(...values)

      const arrayOfTraitResult = Object.keys(state).filter(key => state[key] === max)
        if (arrayOfTraitResult.length > 1) {
          tieBreaker(arrayOfTraitResult)
          console.log("tie breaker")
        } else {
          console.log("you win a " + arrayOfTraitResult[0])
          writeWinner()
        }
    }
    function tieBreaker(arr) {
      console.log("in the tiebreaker")
      console.log(arr)
      // arr.map(answer => {
      //   <button >
      //     {answer}
      //   </button>
      // })
    }
    function writeWinner(){
      console.log("will write to database friend")
    }

  const questions = [
    {
      id: 1,
      questionText: "Question 1",
      answers: [
        { answerText: "Empathy", attribute: "Empathy"},
        { answerText: "Assertiveness", attribute: "Assertiveness"},
        { answerText: "Creativity", attribute: "Creativity"},
      ],
    },
    {
      id: 2,
      questionText: "Question 2",
      answers: [
        { answerText: "Assertiveness", attribute: "Assertiveness" },
        { answerText: "Creativity", attribute: "Creativity" },
        { answerText: "Ambition", attribute: "Ambition" },
      ],
    },
    {
      id: 3,
      questionText: "Question text 3",
      answers: [
        { answerText: "Optimism", attribute: "Optimism" },
        { answerText: "Creativity", attribute: "Creativity" },
        { answerText: "Ambition", attribute: "Ambition" },
      ],
    },
    {
      id: 4,
      questionText: "Question text 4",
      answers: [
        { answerText: "Assertiveness", attribute: "Assertiveness" },
        { answerText: "Empathy", attribute: "Empathy" },
        { answerText: "Optimism", attribute: "Optimism" },
      ],
    },
    {
      id: 5,
      questionText: "Question text 5",
      answers: [
        { answerText: "Ambition", attribute: "Ambition" },
        { answerText: "Optimism", attribute: "Optimism" },
        { answerText: "Empathy", attribute: "Empathy" },
      ],
    },
  ];
  function AnswerOptions(){
    return (
    <div className="answer-section">
      {questions[currentQuestion].answers.map((answer) => (
        <button onClick={() => handleAnswerButtonClick(answer)}>
          {answer.answerText}
        </button>
      ))}
      {/* {    Object.keys(state).reduce((a, b) => state[a] > state[b] ? a : b) } */}
    </div>
    )
  }

  return (
    <div className="app">
      <>
        <div className="question-section">
          <div className="question-count">
            <span></span>
          </div>
          <div className="question-text">
            {inGame ? questions[currentQuestion].questionText : "Questions Questions Questions..."}
          </div>
        </div>
        {inGame ? <AnswerOptions /> : null}
        <button onClick={calculate}>Calculate</button>
        
      </>
    </div>
  );
}

export default Quiz;
