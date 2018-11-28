import React from 'react'
import './OneSide.css'

export default (props) => {
  let { side, flipCard, children } = props
  return (
    <div className="card" onClick={flipCard}>
      <div className={side}></div>
      {children}
    </div>
  )
}