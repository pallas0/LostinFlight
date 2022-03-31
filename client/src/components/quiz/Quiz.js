import React, { useReducer, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
 
function Quiz( { questions, onProfileUpdate } ) {
  // console.log(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inGame, setInGame] = useState(true)
  const thequestions = questions.map((eachquestion) => eachquestion);
  let history = useHistory()
  
  

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
          // writeWinner(Math.floor(Math.random() * 6))
          // return history.push("/collection")
          console.log("tie breaker")
        } else {
          const discoveredTrait = arrayOfTraitResult[0]
          console.log("you win a " + arrayOfTraitResult[0])
          writeWinner(discoveredTrait)
          
          return history.push("/collection")
        }
        }

    function writeWinner(discoveredTrait) {
      onProfileUpdate(discoveredTrait)
    }
  function AnswerOptions(){
    return (
    <Container className="d-grid gap-2" >
      <Stack gap={3}>
      {thequestions[currentQuestion].quiz_answers.map((answer) => (
        <Button 
        variant={"outline-dark"} 
        onClick={() => handleAnswerButtonClick(answer)}
        size="lg">
          {answer.answerText}
        </Button>
      ))}
      </Stack>
    </Container>
    )
  }

  return (
    <Container className="app d-flex align-items-center justify-content-center">
        <Stack gap={3} className="question-section align-baseline">
          <Row className="question-count d-flex">
            <Col className="d-flex">
              <p>Question number <span>{thequestions[currentQuestion].id}</span></p>
            </Col>
          </Row>
            <hr/>
          <Row className="question-text">
            <Col>
              {inGame ? thequestions[currentQuestion].questionText : "Questions Questions Questions..."}
            </Col>
          </Row>
        </Stack>
        {inGame ? <AnswerOptions /> : null}
        {/* <button onClick={calculate}>Calculate</button> */}
    </Container>
  );
}

export default Quiz;