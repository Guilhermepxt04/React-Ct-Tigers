import React from "react";
import { motion } from "framer-motion";
import Style from "./Fundo-branco.module.css"
import Img from "../assets/img/beneficios.jpg"

export default function MuayThai() {
    return (

        <section id="muaythai" className={Style.muaythai}>


            <motion.div
                initial={{ opacity: 0, translateY: "20%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{ duration: 0.6 }}>
                <h2>Muay thai</h2>
                <p>Oferecemos aulas de Muay Thai, conhecido como a "arte das 8 armas". Essa luta, de origem tailandesa, utiliza punhos, cotovelos, joelhos e pernas para ataques e defesa. Nossa metodologia torna acessível a todos, independentemente do nível de condicionamento físico.</p>
                <img src={Img} alt="" />
            </motion.div>


        </section>

    )
}