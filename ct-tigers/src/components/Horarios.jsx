import React from "react";
import { motion } from "framer-motion";
import Style from './Fundo-branco.module.css'
import Tabela from './Horarios.module.css'

export default function Horarios() {
    return (
        <section id="horarios" className={Style.horarios}>


            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>
                <h2>Horários das Aulas</h2>
                <p>Nosso cronogram atual de Aulas, não se esqueça que pode fazer uma aula experimental nas modalidades e também pode marcar um personal no melhor horário para a sua rotina</p>
            </motion.div>

            <motion.table className={Tabela}
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>
                <thead>
                    <tr>
                        <th>Dia da Semana</th>
                        <th>Horário</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="3">Terça e Quinta</td>
                        <td>18:30 - 19:30</td>
                        <td>Boxe</td>
                    </tr>
                    <tr>
                        <td>19:30 - 20:30</td>
                        <td>Muay-Thai Kids</td>
                    </tr>
                    <tr>
                        <td>20:30 - 21:30</td>
                        <td>Muay-Thai</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Sábado e Domingo</td>
                        <td>08:00 - 10:00</td>
                        <td>Krav Maga</td>
                    </tr>
                    <tr>
                        <td>10:30 - 12:30</td>
                        <td>Krav Maga</td>
                    </tr>
                </tbody>
            </motion.table>

        </section>
    )
}