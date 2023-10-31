import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import WellDone from "../img/welldone.svg"

import "./Gameover.css"

const Gameover = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      {quizState.score === quizState.questions.length ? <p>Uau, você acertou todas, parabéns!</p> : <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>}
      <img src={WellDone} alt="Fim do quiz" />
      <button onClick={() => dispatch({type: "NEWGAME"})}>Reiniciar</button>
    </div>
  )
}

export default Gameover