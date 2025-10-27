import React from "react";
import { motion } from "framer-motion";
import Style from '../components/css/Modalidades.module.css'
import ImgMuay from '../assets/img/luvas-muaythai.webp'
import ImgPersonal from '../assets/img/personal.webp'
import ImgKrav from '../assets/img/krav.webp'
import ImgBoxe from '../assets/img/boxe.webp'
import CardProps from "./CardProps";

export default function Planos() {
    return (
        <section id="modalidades" className={Style.planos}>


            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>

                <h2><span>Nossas</span> Modalidades</h2>

                <div className={Style.cards}>
                    <CardProps 
                    img={ImgKrav}
                    titulo="Krav Maga"
                    texto="Sistema de defesa pessoal israelense, focado em situações reais de combate e autodefesa eficaz."
                    lista1="Autodefesa prática"
                    lista2="Condicionamento físico"
                    lista3="Confiança pessoal"
                    />

                    <CardProps 
                    img={ImgMuay}
                    titulo="Muay Thai"
                    texto="Arte marcial tailandesa conhecida como 'a arte das oito armas', combinando técnicas de striking devastadoras."
                    lista1="Resistencia Cardiovascular"
                    lista2="Disciplina"
                    lista3="Técnica de Striking"
                    />

                    <CardProps 
                    img={ImgBoxe}
                    titulo="Boxe"
                    texto="A 'nobre arte' focada na técnica de punhos, agilidade de pés e esquivas precisas para ataque e defesa."
                    lista1="Defesa e Esquiva"
                    lista2="Agilidade e Trabalho de Pés (Footwork)"
                    lista3="Força e Potência nos Golpes"
                    />

                    <CardProps 
                    img={ImgPersonal}
                    titulo="Personal Training"
                    texto="Treino personalizado e individualizado para atingir seus objetivos específicos com acompanhamento profissional."
                    lista1="Plano personalizado"
                    lista2="Atenção individual"
                    lista3="Resultados rápidos"
                    />

                </div>

                <button><a href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20aulas" target="_blank">Escolha o melhor para você e <br />agende uma aula gratuita!!!</a></button>

            </motion.div>

        </section>
    )
}