import React, { useState } from "react";
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const renderPageCadastroCategoria = function(input, setInput){
    
    return ( 
    <>
        <PageDefault>
            <h1>Cadastro de Categoria: {input}</h1>
            <form>
                <label>
                    <input type="text" placeholder="Informe a Categoria" onChange={(data) => {
                        setInput(data.target.value); 
                    }}/>
                </label>
                <button>Criar Categoria</button>
            </form>
            <Link to="/">     
                Ir pra HomePage
            </Link>
        </PageDefault>
    </>
    );
}


function CadastroCategoria(){
    const [insertCategoria, setInsertCategoria] = useState("");
    return renderPageCadastroCategoria(insertCategoria, setInsertCategoria);
}

export default CadastroCategoria;