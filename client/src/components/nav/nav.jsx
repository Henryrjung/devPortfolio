import './nav.scss'
import { Link, NavLink }from 'react-router-dom'
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
        <Link className='logo'>
            Henry Jung
        </Link>

        <ul className='links'>
            <NavLink to='/'><HomeIcon className='link' fontSize="large"/></NavLink>
            <NavLink to='/about'><PersonIcon className='link' fontSize="large"/></NavLink>
            <NavLink to='/portfolio'><CodeIcon className='link' fontSize="large"/></NavLink>   
            <NavLink to='/contact'><EmailIcon className='link' fontSize="large"/></NavLink>
        </ul>
    </div>
  )
}
