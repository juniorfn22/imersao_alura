import React from 'react';
import './App.css';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain/index';
import Carousel from './components/Carousel/index';
import Footer from './components/Footer/index';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      videoDescription={"Vem com o jukera"}
      url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default App;
