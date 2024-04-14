import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './SocialMediaIcons.scss';

function SocialMediaIcons() {
    return (
        <div className="social-media-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon" />
            </a>
        </div>
    );
}

export default SocialMediaIcons;