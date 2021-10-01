import React from 'react'
import img1 from './../Imagenes/clark-douglas-Va6e3PrBRy4-unsplash.jpg'
import img2 from './../Imagenes/slashio-photography-plwBDw9x5cE-unsplash.jpg'
import img3 from './../Imagenes/steven-cordes-Rk8dItzbiaw-unsplash.jpg'
import { ReactComponent as FlechaIzquierda } from './../Imagenes/iconmonstr-angel-left-thin.svg'
import { ReactComponent as FlechaDerecha } from './../Imagenes/iconmonstr-angel-right-thin.svg'
import styled from 'styled-components';

const Carrousel = () => {
    return (
        <ContenedorPrincipal>
            <Slide> 
                <img src={img1} alt="" />
            <TextoSlide>
                <p>15% de descuento en todos los productos</p>
            </TextoSlide>
            </Slide>
            <Slide> 
                <img src={img2} alt="" />
            <TextoSlide>
                <p>15% de descuento en todos los productos</p>
            </TextoSlide>
            </Slide>
            <Slide> 
                <img src={img3} alt="" />
            <TextoSlide>
                <p>15% de descuento en todos los productos</p>
            </TextoSlide>
            </Slide>
            <div>
                <button>
                    <FlechaIzquierda />
                </button>
                <button>
                    <FlechaDerecha />
                </button>
            </div>

        </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div`

`;

const Slide = styled.div`

`;

const TextoSlide = styled.div`

`;

export default Carrousel;
