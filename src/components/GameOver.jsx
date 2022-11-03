import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import WellDone from '../img/welldone.svg'

import './GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    function verificaPontuacao(){
      if(quizState.score === 0){
        return <p>Burrao, Leigo!*</p>
      }else{
        return <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas!</p>
      }
    }
  return (
    <>
      <div id='gameover'>
        <h2>Fim de Jogo!</h2>
        <p id='scorep'>Pontuação: {quizState.score}</p>
        { verificaPontuacao() }
        <img src={WellDone} alt="Fim do Quiz!" />
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      </div>
    </>
  )
}

export default GameOver
