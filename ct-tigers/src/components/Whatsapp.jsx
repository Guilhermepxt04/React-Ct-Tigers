import React from "react";
import Style from '../components/css/Whatsapp.module.css'
import Img from '../assets/img/logo-whatsapp.webp'

export default function Whatsapp() {
    return (
        <a 
            href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20aulas" 
            className={Style.btWhatsApp} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Link para o WhatsApp">

            <img className={Style.whatsappIcon} src={Img} alt="Ícone do WhatsApp" />
            
            <div className={Style.msg}>Entre em contato</div>
        </a>
    )
}