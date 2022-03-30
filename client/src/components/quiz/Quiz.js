import React, { useReducer, useEffect, useState } from "react";
import { Redirect } from "react-router-dom"

function Quiz({questions}) {
  // console.log(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inGame, setInGame] = useState(true)
  const thequestions = questions.map((eachquestion) => eachquestion);

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
    dispatch({ type: answer.trait });
    
    const nextQuestion = currentQuestion + 1;
    
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    } else  {
      console.log("end of quiz");
      setInGame(false)
      calculate()
    } 
  };

    function calculate(){
      console.log("calculating..." )

      const values = Object.values(state)
      const max = Math.max(...values)

      const arrayOfTraitResult = Object.keys(state).filter(key => state[key] === max)

        if (arrayOfTraitResult.length > 1) {

          console.log("tie breaker")
        } else {
          console.log("you win a " + arrayOfTraitResult[0])
          // writeWinner()
          return <Redirect to="/" />
        }
        }

    function writeWinner(){
      console.log("will write to database friend")
    }
  function AnswerOptions(){
    return (
    <div className="answer-section">
      {thequestions[currentQuestion].quiz_answers.map((answer) => (
        <button onClick={() => handleAnswerButtonClick(answer)}>
          {answer.answerText}
        </button>
      ))}
      
      {    Object.keys(state).reduce((a, b) => state[a] > state[b] ? a : b) }
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
            {inGame ? thequestions[currentQuestion].questionText : "Questions Questions Questions..."}
          </div>
        </div>
        {inGame ? <AnswerOptions /> : null}
        <button onClick={calculate}>Calculate</button>
        
      </>
    </div>
  );
}

export default Quiz;