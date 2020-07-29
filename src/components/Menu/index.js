//=======================Import_Level========================================================================================================
import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/minhaFlix.png';
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button'

//====================Variable_Level============================================================================================================
 


//==========================MAIN_Level===========================================================================================================
function Menu(){ //Function componente para a criacao do MenuBar de nossa pagina.
	return (
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={Logo} alt="MinhaFlix logo"/>
			</Link>

			<Button as={Link} className="ButtonLink" to="/cadastro/video">
				Add new video
			</Button>
		</nav>
	); //retorna uma configuracao HTML ou JSX para ser executado na criacao do MenuBar da pagina. Utilizando o Modulo importado do react-router-dom, chamado LINK podemos criar o roteamento baseado na URI informada pelo Client
}

export default Menu; //Exporta a function menu como um modulo Menu para ser utilizado no App.js (Importado sem a necessidade de chaves)