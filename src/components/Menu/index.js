import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';
import Button from '../Button/index';
import {Link} from 'react-router-dom';
// import Home from '../../pages/home/index';
// import ButtonLink from './components/ButtonLink';

function Menu () {
    return (
    <nav className="Menu">
      <Link to='/'>
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
        </Button>

        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
          Nova Categoria
        </Button>
    </nav>
    );
}

export default Menu;