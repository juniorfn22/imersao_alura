import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
import Button from '../Button/index';
// import ButtonLink from './components/ButtonLink';


function Menu () {
    return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>

        <Button className="ButtonLink" href="/">
            Novo vídeo
        </Button>
    </nav>
    );
}

export default Menu;