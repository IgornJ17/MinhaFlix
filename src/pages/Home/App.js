import React from 'react';
import Menu from '../../components/Menu'
//import './App.css';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Caroseul from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() { //Componente responsavel pela renderizacao e organizacao de nossa pagina atual, os dados sao capturados pelo arquivo Json em data/
  return (
    <div>
      <Menu />

      <BannerMain //Elemento principal da pagina, esse elemento que aparecera de destaque na pagina.
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={""}
      />

      <Caroseul //Caroseul sao as camadas de separacao da pagina, separadas por categorias, ele que criara as categorais.
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Caroseul
        category={dadosIniciais.categorias[1]}
      />


      <Caroseul
        category={dadosIniciais.categorias[2]}
      />


      <Caroseul
        category={dadosIniciais.categorias[3]}
      />

      <Footer/>
    </div>
  );
};

export default Home;
