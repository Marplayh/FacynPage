/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Womens from "../../assets/womens.jpg";
import Star from "../../assets/estrela.png";
import './stylesCarousel.scss';

export default function Carousel(){
    return(
        <>
        <div className="container" id="home">
            <div className="textContainer">  
               <p>SIMPLIFICANDO A RECUPERAÇÃO
                DE CRÉDITO IMOBILIÁRIO COM
                SOLUÇÕES INTELIGENTES E EFICIENTES</p>
                <ul>
                    <li><img src={Star} alt="estrela"></img><p>Fácil, rápido e prático</p></li>
                    <li><img src={Star} alt="estrela"></img><p>Automatize suas cobrança</p></li>
                    <li><img src={Star} alt="estrela"></img><p>Eficiência na recuperação de dívidas</p></li>
                    <li><img src={Star} alt="estrela"></img><p>Segurança garantida para suas transações</p></li>
                </ul>
            </div>
            <img className="imageCarousel" src={Womens} alt="Imagem Banner"/>

        </div>
        </>
        
    );
}