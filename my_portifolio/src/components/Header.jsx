import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../styles/HeaderStyle';
import Button from './Button';

function Header() {
  return (
    <MainHeader>
      <div>
        <h1>MEU PORTIFÓLIO</h1>
      </div>
      <nav>
        <Link to="/sobre">SOBRE</Link>
        <Link to="/theam">TEMA</Link>
      </nav>
      <div>
        <Button path={'/contact'} text={'CONTATOS'}/>
      </div>
    </MainHeader>
  )
}

export default Header;
