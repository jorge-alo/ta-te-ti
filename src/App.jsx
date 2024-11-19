import { useState } from "react"
import "./App.css"
import { Square } from "./components/square"
import { HandleChange } from "./helpers/HandleChange"
import { AddBoard } from "./components/AddBoard"
import { WinnerModal } from "./components/WinnerModal"
import { turn } from "./Constants"




function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorege = window.localStorage.getItem("board")
    if(boardFromStorege)return JSON.parse(boardFromStorege)
    return Array(9).fill(null)})

  const [isSelected, setIsSelected] = useState(() => {
    const turnFormStorage = window.localStorage.getItem("turn")
    return turnFormStorage ?? turn.x})
  const [winner, setWinner] = useState(null)
  const handleChange = (index) => {
    HandleChange(index, board, isSelected, setBoard, setIsSelected, turn, winner, setWinner)
  }

  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setIsSelected(turn.x)
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  }
  return (
    <main className="board">

      <h1>Ta te ti</h1>
      <div className="boton">
        <button onClick={handleReset}>Resetea</button>
      </div>

      
        <AddBoard
          board={board}
          handleChange={handleChange}
       />
      

      <section className="turno-square">
        <Square isSelected={isSelected == turn.x} >{turn.x}</Square>
        <Square isSelected={isSelected == turn.o} >{turn.o}</Square>
      </section>


     <WinnerModal
      winner={winner}
      handleReset={handleReset}
     />

    </main>


  )
}

export default App
