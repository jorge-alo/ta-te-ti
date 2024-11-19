import { WinnerCombo } from "../Constants"



export const HandleChange = (index, board, isSelected,setBoard,setIsSelected,turn,winner,setWinner) => {
    
    
  
    const checkWinner = (boardCheck) => {
        for(const combo of WinnerCombo){
            const [a , b, c] = combo
            if(
               boardCheck[a] && 
               boardCheck[a] == boardCheck[b] &&
               boardCheck[a] == boardCheck[c]
            ) return boardCheck[a]
        }
        return null
    }
    
    const checkEndGame = (newBoard) => {
        return newBoard.every((square) => square !== null)
    }
    
    if(board[index] || winner) return
    const newBoard = [...board]    
    newBoard[index] = isSelected
    setBoard(newBoard)
    const newTurn = isSelected == turn.x ? turn.o : turn.x
   setIsSelected(newTurn)

   window.localStorage.setItem("board", JSON.stringify(newBoard))
   window.localStorage.setItem("turn", newTurn)
  
   const newWinner = checkWinner(newBoard)
   
   if(newWinner){
    setWinner(newWinner)
  
   } else if (checkEndGame(newBoard)){
    setWinner(false)
   }
   
  
}
