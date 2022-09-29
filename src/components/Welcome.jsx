import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from '../img/quiz.svg'

import './Welcome.css'

const Welcome = () => {
    //com quizState, pega-se os valores
    //com dispatch, altera-se os valores
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar!</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
            Iniciar
        </button>
        <img src={Quiz} alt="Início do Quiz." />
    </div>
  )
}

export default Welcome