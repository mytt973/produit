import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {

  return (
 <> <nav className='navbar'>
  <h1>jefpjs</h1>
  
   <Link to="/user">    <div className='btn btn-danger'> Landing</div>  </Link>
   <Link to="/">  <div className='btn btn-danger'> about</div> </Link>
   <Link to="produit">  <div className='btn btn-danger'> Product</div> </Link>
   <Link to="home">     <div className='btn btn-danger'> espace Client</div></Link>
     </nav>


 </>
  )
}
