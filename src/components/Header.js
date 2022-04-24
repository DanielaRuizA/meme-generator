import React from 'react';
import '../stylesheets/Header.css'

export default function Header(){
  return(
    <header className='header'>
      <img  src={require('../images/troll-face.png')} alt='header' className='header-image'/>
      <h1 className='header-title'>Meme Generator</h1>
    </header>
  );
}