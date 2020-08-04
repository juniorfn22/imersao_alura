import React from 'react';
import './App.css';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <div>
      <PageDefault>
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

    </PageDefault>

    </div>
  );
}

export default Home;
