import React from "react";
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/gabriel-oliveira-gomide-b343a41b5/" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com/gabriel1og" target="_blank">
                <FaGithub />
            </a>
            <a href="https://instagram.com/gabriel_gomidee" target="_blank">
                <FiInstagram />
            </a>
        </div>
    );
}

export default HeaderSocials;