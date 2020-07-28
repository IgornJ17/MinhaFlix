//=======================Import_Level========================================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';


//====================Variable_Level============================================================================================================
const ReturnNotFoundError = () => (<div>Pagina 404</div>) //Cria 



//==========================MAIN_Level===========================================================================================================
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} /> 
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
