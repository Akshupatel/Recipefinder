import React from 'react'
import './navbar.css'
import {  Link } from "react-router-dom";

export default function Navbar() {
  return (
     <div >        
        <div className='navbar'>
        <h2 className='left'> Akshu's Recipes</h2>
        <div className='right'>
            <Link to='/'>Home</Link>
            <Link to='/recipes'>Recipes</Link>
            <Link to='/about'>About</Link>
            </div>
       
        </div>  
     </div>
  )
}
