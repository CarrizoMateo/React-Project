import React from 'react'

function item(props) {
  return (
    <div>
        <p>{props.description}</p>
      {/* <h2>Camiseta {props.producto}</h2> */}
      {/* <p>Precio: ${props.precio}</p> */}
    </div>
  )
}

export default item
