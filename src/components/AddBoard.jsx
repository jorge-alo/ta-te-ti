import React from 'react'
import { Square } from './square'

export const AddBoard = ({board,handleChange}) => {
   return(
    <section className="game">
    {board.map((value, index) => {
       
        return( 
            <Square
          key={index}
          index={index}
          value={value}
          handleChange={handleChange}
           />
        )
      })}
      </section>
    )
}
