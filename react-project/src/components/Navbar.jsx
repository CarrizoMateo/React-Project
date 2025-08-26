import React from 'react'

function Navbar() {
  return (
      <nav className='navbar'>
        <div className="nav-left">
        <li>
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
        </li>
        </div>
        <div className="nav-right">
            <span>Carrito🛒</span>
        </div>
      </nav>
  )
}

export default Navbar
