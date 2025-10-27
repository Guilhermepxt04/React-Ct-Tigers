import React from "react";
import { motion } from "framer-motion";
import Style from '../components/css/Planos.module.css'
import ImgMuay from '../assets/img/luvas-muaythai.jpg'
import ImgPersonal from '../assets/img/personal.jpg'
import ImgKrav from '../assets/img/krav.jpg'

export default function Planos() {
    return (
        <section id="planos" className={Style.planos}>


            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                <h2><span>Nossas</span> Modalidades</h2>

                <div className={Style.cards}>
                    <div className={Style.card}>
                        <img src={ImgKrav} alt="Foto de uma tecnica de krav maga" />

                        <div className={Style.cardConteudo}>
                            <h3>Krav Maga</h3>
                            <p>Sistema de defesa pessoal israelense, focado em situações reais de combate e autodefesa eficaz.</p>
                            <ul>
                                <li>Autodefesa prática</li>
                                <li>Condicionamento físico </li>
                                <li>Confiança pessoal</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className={Style.card}>
                        <img src={ImgMuay} alt="Luvas de Muay Thai" />

                        <div className={Style.cardConteudo}>
                            <h3>Muay Thai</h3>
                            <p>Arte marcial tailandesa conhecida como 'a arte das oito armas', combinando técnicas de striking devastadoras.</p>
                            <ul>
                                <li>Resistencia Cardiovascular</li>
                                <li>Disciplina </li>
                                <li>Técnica de Striking</li>
                            </ul>
                        </div>
                        
                    </div>

                    <div className={Style.card}>
                        <img src={ImgPersonal} alt="Luvas de Muay Thai" />

                        <div className={Style.cardConteudo}>
                            <h3>Personal Training</h3>
                            <p>Treino personalizado e individualizado para atingir seus objetivos específicos com acompanhamento profissional.</p>
                            <ul>
                                <li>Plano personalizado</li>
                                <li>Atenção individual </li>
                                <li>Resultados rápidos</li>
                            </ul>
                        </div>
                        
                    </div>

                </div>

            </motion.div>

        </section>
    )
}