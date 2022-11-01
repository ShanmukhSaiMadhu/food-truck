import React from 'react'
import './styles.css'
import topbar_logo from '../../assets/topbar_logo.png'
import Search from '../Search'
import Cart from '../Cart'
import Signin from '../Signin'


function Topbar() {
  return (
    <div className='topbar-wrapper'>
        <h1 className='topbar-title'>FoodTruck <span className='topbar-logo'><img src={topbar_logo} /></span></h1> 
        
        <ul className='topbar-list-wrapper'>
            <li className='topbar-list-item'>
                <a href="#">Home</a>
            </li>
            <li className='topbar-list-item'>
                <a href="#">Menu</a>
            </li>
            <li className='topbar-list-item'>
                <a href="#">About</a>
            </li>
            <li className='topbar-list-item'>
                <a href="#">Contact</a>
            </li>
        </ul>

        <div className='topbar-end'>
            <Search />
            <Cart />
            <Signin />
        </div>
        
    </div>
  )
}

export default Topbar