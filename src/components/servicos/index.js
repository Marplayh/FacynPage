import React from "react";
import './styleServicos.scss';
import ImagemServicos from '../../assets/consultando-servicos.png';

export default function Servicos(){
   return(
    <div className="container-servicos" id="servicos">
        <h2 className="title-servicos">Serviços da Empresa</h2>


        <div class="card-container">

            <div class="card">
                <h2>CONCILIAÇÃO AUTOMÁTICA</h2>
                <img src={ImagemServicos} alt="servicos"></img>
                <div class="description">
                    <p>O sistema identifica automaticamente
                    os pagamentos realizados e os concilia
                    com as cobranças em aberto.</p>
                </div>
            </div>


            <div class="card">
                <h2>NOTIFICAÇÃO DO DEVEDOR</h2>
                <img src={ImagemServicos} alt="servicos"></img>
                <div class="description">
                    <p>Notifica o devedor sobre a
                    dívida em aberto através de
                    e-mail, SMS ou carta.
                    A notificação informa o
                    valor da dívida, data de
                    vencimento e instruções
                    para pagamento.</p>
                </div>
            </div>


            <div class="card">
                <h2>GESTÃO DE INADIMPLENCIA</h2>
                <img src={ImagemServicos} alt="servicos"></img>
                <div class="description">
                    <p>O sistema oferece ferramentas para
                    gerenciar a inadimplência, como envio
                    de e-mails automáticos de cobrança e
                    geração de relatórios detalhados.</p>
                </div>
            </div>


            <div class="card">
                <h2>NEGOCIAÇÃO ONLINE</h2>
                <img src={ImagemServicos} alt="servicos"></img>
                <div class="description">
                    <p>O site oferece ferramentas para facilitar
                    a negociação, como chat online e envio
                    de propostas, ele permite que a
                    negociação da dívida ocorra
                    diretamente entre o devedor e a
                    empresa.</p>
                </div>
            </div>
        </div>
    </div>
   )
}