//=======================Import_Level========================================================================================================
import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';
//======================================Extract_Variable===========================================================================================

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

//Extract variable as a function.
const renderPageDefault = (obj) => (
    //Todo componente JSX precisa ter uma estrutura em volta para que o Browser consiga renderizar corretament. 
        <>
            <Menu />
                <Main>
                    { obj }
                </Main>
            <Footer />  
        </>
);


//=======================Main_Function=============================================================================================================
function PageDefault({ children }){
    return renderPageDefault(children);
}

export default PageDefault;

/* Essa estrutura e a estrutura utilizada para criacao de um componente no React. Uma aplicacao react e construida e estruturada com base
em seus Componentes. Os componentes sao os modulos de functions que retornam um codigo JSX.

*/