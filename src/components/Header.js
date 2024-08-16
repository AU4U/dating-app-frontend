import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'
export default function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/> 
        </IconButton>
        <img className='header_logo' src="logo192.png" alt="logo"/>
        <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>
    </div>
  )
}
