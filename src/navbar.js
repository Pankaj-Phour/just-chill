import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';
import { EventEmitter } from './apiService';

export const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="navLogo">
                React Forms
            </div>
            <div className="navItem">
                <Link className='links' to='/' onClick={(event)=> EventEmitter.dispatch('navChange',event)}>Home</Link>
            </div>
            <div className="navItem">
                <Link className='links' to='/about'>About us</Link>
            </div>
            <div className="navItem" >
                <Link className='links' to='/contact'>Contact us</Link>
            </div>
            <div className="navItem">
                <Link className='links' to='/help'>Help</Link>
            </div>
        </nav>
        <Outlet />
    </div>
  )
}
