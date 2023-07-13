import React, { Component } from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='icon-links'>
            <a href='/'><li className=''><FacebookIcon /></li></a>
            <a href='/'><li className=''><InstagramIcon/></li></a>
            <a href='/'><li className=''><WhatsAppIcon/></li></a>
            <a href='/'><li className=''><GoogleIcon/></li></a>
            <a href='/'><li className=''><TwitterIcon/></li></a>
        </div>
        <div className='copyright'>
            <span className='brand-name'><a href='/'>BeautyCo</a></span> &copy; Copyright 2023
        </div>
      </div>
    )
  }
}
