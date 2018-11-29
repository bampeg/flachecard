import React from 'react'
import './Card.css'

export default (props) => {
  let { side, content } = props
  return (
    <div className="card" >
      <div className={side}></div>
      {content}
    </div>
  )
}