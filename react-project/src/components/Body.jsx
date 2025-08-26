import React from 'react'
import Productos from './Productos'
import Item from './item'
function Body() {
  return (
    <div>
        <Productos/>
        <Item description="Esta es una tienda de camisetas de futbol, para los apasionados de este deporte"/>
        {/* <Item producto="Camiseta Argentina" precio="34999"/> */}
        {/* <Item producto="Camiseta Liverpool" precio="45999"/> */}
        {/* <Item producto="Camiseta Boca" precio="29999"/>*/ }
    </div>
  )
}

export default Body
