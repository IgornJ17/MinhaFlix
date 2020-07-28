import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/minhaFlix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="MinhaFlix logo"/>
      </a>
      <p>
        Um Guia para Estudo e Entreterimento
      </p>
    </FooterBase>
  );
}

export default Footer;
