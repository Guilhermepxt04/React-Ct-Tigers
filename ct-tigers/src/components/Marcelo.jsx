import React from 'react'
import { motion } from 'framer-motion'
import Style from './Fundo-branco.module.css'
import Image from '../assets/img/marcelo-carvalho.jpg'

export default function Marcelo() {

    return (


        <section id="marcelo" className={Style.marcelo}>


            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>
                <h2>Quem é Marcelo Carvalho</h2>
                <p>Faixa preta de Krav Maga e Kick Boxing, Kruang azul de Muay Thai, Instrutor de Boxe, Tonfa e lâminas. Especializado em defesa pessoal feminina e monitor nivel 3 de Panantukam.
                </p>
                <img src={Image} alt="imagem do instrutor Marcelo" />
            </motion.div>

        </section>
    )
}