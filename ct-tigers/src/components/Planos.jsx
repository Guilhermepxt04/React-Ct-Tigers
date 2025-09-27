import React from "react";
import { motion } from "framer-motion";
import Style from './Fundo-preto.module.css'
import Img from '../assets/img/personal1.png'

export default function Planos() {
    return (
        <section id="planos" className={Style.planos}>


            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                <h2>Aulas coletivas</h2>

                <p>Trabalhamos com aulas coletivas em dias de semana e aos finais de semana.</p>

                <img src={Img} alt="Aulas coletivas" />

            </motion.div>

            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                <h2>Personal Fight</h2>

                <p>Também atuamos com Personal. Nossos treinos são personalizados para atender às suas necessidades</p>

                <img src={Img} alt="Personal Fight" />

            </motion.div>

        </section>
    )
}