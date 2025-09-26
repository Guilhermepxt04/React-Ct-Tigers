import React from 'react'
import style from './Header.module.css'
import logo from '../assets/img/logo.png'

function Header() {
    return(
        <header>
            <nav className={style.nav}> 
                <img className={style.logo} src={logo} alt="Logo da equipe Krav Maga Tigers" />
                <a href="#marcelo-carvalho"> Instrutor </a>
                <a href="#kravmaga"> Krav Maga</a>
                <a href="#muay-thai"> Muay-Thai</a>
                <a href="#planos"> Planos</a>
                <a href="#horarios"> Horários </a>
                <a href="#onde-estamos"> Onde Estamos</a>
            </nav>
        </header>
    )
}

export default Header