import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import './styleFooter.scss';

export default function Footer(){
    return (
        <footer className="footer">
            {/* Seção de ícones de redes sociais */}
            <div className="social-media">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
            </div>

            {/* Seção para o logo da empresa */}
            <div className="logo-area">
                <img src={Logo} alt="Logo da Empresa" className="logo" />
            </div>

            {/* Seção para contatos */}
            <div className="contacts">
                <p><strong>Contato:</strong></p>
                <p>Telefone: (xx) xxxx-xxxx</p>
                <p>Email: contato@empresa.com</p>
                <p>Endereço: Rua Exemplo, 123, Cidade, Estado, CEP</p>
            </div>
        </footer>
    )
}