import React from 'react'
import { motion } from 'framer-motion'
import Style from '../components/css/Marcelo.module.css' 
import Image from '../assets/img/marcelo.webp'

export default function Marcelo() {
    return (
        <section id="marcelo" className={Style.marcelo}>
            
            <motion.div 
                className={Style.container}
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                <div className={Style.imagemContainer}>
                    <img src={Image} alt="Instrutor Marcelo Carvalho" loading="lazy"/>
                </div>

                <div className={Style.textoContainer}>
                    <h2>Quem é Marcelo Carvalho</h2>
                    <p>
                        Faixa preta de Krav Maga e Kick Boxing, Kruang azul de Muay Thai, Instrutor de Boxe, Tonfa e lâminas. Especializado em defesa pessoal feminina e monitor nivel 3 de Panantukam.
                    </p>
                    
                    <h3>Principais Graduações:</h3>
                    <ul>
                        <li>Faixa preta de Krav Maga</li>
                        <li>Faixa preta de Kick Boxing</li>
                        <li>Kruang azul de Muay Thai</li>
                        <li>Instrutor de Boxe, Tonfa e lâminas</li>
                        <li>Especializado em defesa pessoal feminina</li>
                    </ul>

                    <button><a href="#modalidades">Conheça as modalidades</a></button>
                </div>

            </motion.div>
        </section>
    )
}