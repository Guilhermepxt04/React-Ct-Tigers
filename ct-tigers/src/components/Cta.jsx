import React from "react";
import { motion } from "framer-motion";
import Style from '../components/css/Cta.module.css'

export default function Cta() {
    return (
        <section className={Style.cta}>

            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                    <h1> PRONTO PARA COMEÇAR <br /> SEUS TREINOS?</h1>
                    <p>Agende sua primeira Aula Experimental gratuita e descubra seu verdadeiro potencial </p>
                    <button><a href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20aulas">Agendar aula grátis</a></button>

            </motion.div>

        </section>
    )

}   