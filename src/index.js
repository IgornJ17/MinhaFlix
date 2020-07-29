//=======================Import_Level========================================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


//====================Variable_Level============================================================================================================
const ReturnNotFoundError = () => (window.location.assign("https://editor.p5js.org/igorjuliani16/full/m3o1gJFP")) //Cria 



//==========================MAIN_Level===========================================================================================================
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} /> 
      <Route path="/cadastro/categoria" component={CadastroCategoria} /> 
      <Route component={ReturnNotFoundError} />   
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

/*Executa a implantacao do codigo JSX criado a partir do render() no elemento com o atributo ID `root` localizado no Index.HTML no public*/ 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
