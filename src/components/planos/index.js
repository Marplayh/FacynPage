import React from "react";
import Coroa from '../../assets/coroa.png';
import Estrela2 from '../../assets/estrela2.png';
import Coracao from '../../assets/coracao.png';
import './stylePlanos.scss';

export default function Planos(){
    return (
        <div className="container-planos" id="planos">
            <h2 className="title-planos">Nossos Planos</h2>
            <div className="container-cards">
                <div className="type-planos">
                    <img src={Coracao} alt='coroa'></img>
                    <h2>Plano Básico<br></br>(Essential)</h2>
                    <p>Uma solução abrangente para empresas que buscam uma abordagem eficaz e
    acessível para a recuperação de créditos.</p>
                </div>
                <div className="type-planos">
                <img src={Estrela2} alt='coroa'></img>
                <h2> Plano Intermediário <br></br>(Advanced)</h2>
                    <p>Oferece recursos adicionais para uma gestão mais detalhada da
    inadimplência, além de consultoria financeira especializada.</p>
                </div>
                <div className="type-planos">
                    <img src={Coroa} alt='coroa'></img>
                    <h2>Plano Avançado <br></br>(Premium)</h2>
                    <p> O plano mais completo, com serviços personalizados, recuperação de
    créditos avançada e suporte prioritário para suas necessidades mais exigentes.</p>
                </div>
            </div>
         
        </div>
    )
}