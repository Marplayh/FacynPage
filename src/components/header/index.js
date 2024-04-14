/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../assets/logo.png';
import whatsapp from '../../assets/whatsapp.png';
import './styles.scss';

export default function Header(){
    const handleClick = (e, targetId, offset = 50) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        
        // Calcule a posição final com o ajuste de offset
        const finalPosition = targetPosition - offset;
            window.scrollTo({
                top: finalPosition,
                behavior: 'smooth'
            });
        }
    };
        return (
            <div>            
                    <nav className="navbarT">
                        <a href="#">
                            <img src={Logo} className="logo" alt='imagem Logo'/>
                        </a>
                        <div className="navLinks">
                            <ul className='links'>
                                <li className="itemLinks">
                                    <a  aria-current="page" href="#home" onClick={(e) => handleClick(e, 'home', 100)}>HOME</a>
                                </li>
                                <li className="itemLinks">
                                    <a  href="#servicos" onClick={(e) => handleClick(e, 'servicos', 100)}>SERVIÇOS</a>
                                </li>
                                <li className="itemLinks">
                                    <a href="#planos" onClick={(e) => handleClick(e, 'planos', 100)}>PLANOS</a>
                                </li>
                                <li className="itemLinks">
                                    <a href="#faq" onClick={(e) => handleClick(e, 'faq', 100)}>FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className='contact'>
                            <a><img src={whatsapp} className='whatsapp' alt='ícone do whatsapp'></img></a>
                            <p>Entre em contato</p>
                        </div>
                    </nav>
            </div>
        );
}