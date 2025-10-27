import React, {useState} from 'react'
import style from '../components/css/Header.module.css'

export default function Header() {

    const [menuAberto, setMenuAberto] = useState(false);

 
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return(
        <header>
            <nav className={style.nav}> 
                <img className={style.logo} src="/logo.ico" alt="Logo da equipe Krav Maga Tigers" />
                
                <button 
                    className={`${style.hamburger} ${menuAberto ? style.aberto : ''}`} 
                    onClick={toggleMenu} 
                    aria-label="Abrir menu"
                >
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </button>

                <div className={`${style.menuNav} ${menuAberto ? style.menuAberto : ''}`}>
                    <a href="#marcelo" onClick={toggleMenu}> Instrutor </a>
                    <a href="#modalidades" onClick={toggleMenu}> Modalidades</a>
                    <a href="#horarios" onClick={toggleMenu}> Horários </a>
                    <a href="#ondeEstamos" onClick={toggleMenu}> Onde Estamos</a>
                </div>
            </nav>
        </header>
    )
}
