/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import PickCategory from './components/PickCategory'
import Question from './components/Question'
import Gameover from './components/Gameover'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <>
      <div className="App">
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <Gameover />}
      </div>
    </>
  )
}

export default App
