import React from 'react'

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "2px solid white",
        height: "100px",
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize:"100px",
      }}
      className="square-box"
    >
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square;
