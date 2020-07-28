import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/minhaFlix.png';
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button'

function Menu(){ //Function componente para a inicializacao de nossa pagina.
	return (
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={Logo} alt="MinhaFlix logo"/>
			</Link>

			<Button as={Link} className="ButtonLink" to="/cadastro/video">
				New Video
			</Button>
		</nav>
	); //retorna uma configuracao HTML ou JSX para ser executado na chamada da pagina.
}

export default Menu; //Exporta a function menu como um modulo Menu para ser utilizado no App.js (Importado sem a necessidade de chaves)