import React from 'react'
//import "../Menu/Menu.css"

function ButtonLink(props){
	return(
		<a href={props.href} className={props.className}>
			New video
		</a>
	); //Na chamada do buttonLink recebera um agrgumento que tranportara um objeto do componente contendo membros de configuracao.
}

export default ButtonLink;