import React from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

function Header() {
  return (
        <div>
            <header className='d-flex justify-content-between p-3 bg-secondary'>
               <div className='d-flex '>
                    <h4>Note Share</h4>
                    <div>
                        <Link to="/" className='m-2'>Home</Link>
                        <Link to="explore" className='m-2'>Explore</Link>
                        <Link to='about'className='m-2' >About us</Link>
                    </div>
               </div>
                <div className='d-flex'>
                    <input type='search' placeholder='search'/>
                     <div className='profile'>
                         M 
                     </div>
                </div>
            </header>
        </div>
    )
}

export default Header
