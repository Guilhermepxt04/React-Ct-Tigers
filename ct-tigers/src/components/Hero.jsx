import React from "react";
import Style from '../components/css/Hero.module.css'

export default function Home() {
    return(
        <section className={Style.hero}>
            <div className={Style.conteudo}>
                <h1>CENTRO DE TREINAMENTO <br /><span>TIGERS</span> </h1>
                <p>Krav Maga, Muay Thai, Personal Training além de outras artes em um ambiente de família e profissional</p>
                

                <div className={Style.botoes}>
                    <a href="#modalidades" className={`${Style.botao} ${Style.red}`}>
                        Conheça nossos planos
                    </a>
                    <a href="#ondeEstamos" className={`${Style.botao} ${Style.transparente}`}>
                        Onde nós estamos
                    </a>
                </div>

            </div>
        </section>
    )
}