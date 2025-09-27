import React from "react";
import { motion } from 'framer-motion';
import Style from './Fundo-preto.module.css'
import ImgKrav from '../assets/img/krav-maga.jpg'
import ImgPraticar from '../assets/img/quem-pratica.jpg'

export default function Krav() {
    return(

        <section id="krav" className={Style.krav}>

            
            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                    <h2>O que é Krav Maga</h2>

                    <p>Sistema de defesa pessoal israelense, criado por Imi Lichtenfeld na década de 1940, que utiliza movimentos simples e rápidos para neutralizar ameaças, armadas ou desarmadas, garantindo a proteção fisíca do praticante.</p>

                    <img src={ImgKrav} alt="" />

            </motion.div> 

            <motion.div
            initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                    <h2>Quem Pode Praticar?</h2>

                    <p> Krav Maga é acessível a todos, independentemente de idade, gênero ou preparo físico. Sua simplicidade permite que qualquer pessoa aprenda, desde crianças até idosos, com foco em autodefesa e segurança.</p>

                    <img src={ImgPraticar} alt="" /> 
            </motion.div>
        
        </section>

    )
}