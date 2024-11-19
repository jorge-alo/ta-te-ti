import React from 'react'

export const Square = ({index, children, isSelected, handleChange, value}) => {

  const className = `square ${isSelected ? "is-selected" : ""}`
   
  return (
    <div onClick={()=>handleChange(index)} className={className}>
        {value || children}
    </div>
  )
}
