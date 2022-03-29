import React, { useState, useReducer, useEffect } from 'react'
import Question from './Question'

function QuizHome() {
    const [questionData, setQuestionData] = useState([])
       
       
    const qFormat = {
            id: "",
            question: "",
            empathy: "",
            assertiveness: "",
            creativity: "",
            ambition: "",
            optimism: "",
        }

    useEffect(() => {
        fetch('http://127.0.0.1:3000/quizzes')
        .then((res) => res.json())
        .then((data) => setQuestionData(data))
    },[])
    function PresentQuestions(){
        return (
            Object.values(questionData).map(each => (
                <Question eachQuestion={each}/>
            ))
        )
    }
    const initialState = {
            a: 0,
            b: 0, 
            c: 0, 
            d: 0,
            e: 0
        }
    const [state, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action) {
        let newState
        switch (action.type) {
        case 'a':
            newState = { ...state, a: state.a + 1 }
            break
        case 'b':
            newState = { ...state, b: state.b + 1 }
            break
        case 'c':
            newState = { ...state, c: state.c + 1 }
            break
        case 'd':
            newState = { ...state, d: state.d + 1 }
            break
        case 'e':
            newState = { ...state, e: state.e + 1 }
            break
        default:
            return state;
        }
        return newState
    }
    function handleClick(e) {
        console.log(e)
        dispatch({type: e.target.name})
    }



  return (
    <div>
        QuizHome

        <div>
            <button name="a" onClick={handleClick}>a</button>
            <button name="b" onClick={handleClick}>b</button>
            <button name="c" onClick={handleClick}>c</button>
            <button name="d" onClick={handleClick}>d</button>
            <button name="e" onClick={handleClick}>e</button>
        </div>
        <div>
            <h1> a: {state.a}</h1>
            <h1> b: {state.b}</h1>
            <h1> c: {state.c}</h1>
            <h1> d: {state.d}</h1>
            <h1> e: {state.e}</h1>
        </div>
        <div>
            <PresentQuestions />
        </div>
    </div>
  )
}

export default QuizHome