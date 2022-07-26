import React from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

function Header() {
  return (
        <div>
            <header className='d-flex justify-content-between p-3 bg-secondary'>
               <div className='d-flex '>
                    <h4 className='app-name-start'>Note</h4>
                    <h4 className='app-name-end'>Share</h4>
                    <div className='navigatin-container'>
                        <Link to="/" className='m-2'>Home</Link>
                        <Link to="explore" className='m-2'>Explore</Link>
                        <Link to='about'className='m-2' >About us</Link>
                    </div>
               </div>
                <div className='d-flex'>
                    <input className='search-box' type='search' placeholder='Search for Note'/>
                     <div className='profile'>
                         M 
                     </div>
                </div>
            </header>
        </div>
    )
}

export default Header
