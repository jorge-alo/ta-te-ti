import { Square } from "./square"


export const WinnerModal = ({winner,handleReset}) => {

    if(winner == null) return null
    const winnerText = winner == false ? "Empate" : "Gano:"
  return (
   
   
        <section className="winner">
            <div className="text">
              <h2>{winnerText}</h2>              
                <div className="win">{winner == false ? "" : <Square>{winner}</Square>}  </div>
                <button onClick={handleReset}>Empezar de nuevo</button>
            </div>
        </section>
      
   
  )
}
