import { motion } from "motion/react";
import style from "./About.module.css";
import myPhoto from "../../assets/Minha foto do linkdin.jpeg";

export function About() {
  return (
    <section className={style.about} id="about">
      
      <motion.span
        className={style.sectionLabel}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        SOBRE
      </motion.span>

      <div className={style.grid}>

        {/* FOTO */}
        <motion.div
          className={style.photoWrapper}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            className={style.photo}
            src={myPhoto}
            alt="Foto de Isabelly Franklin"
          />
        </motion.div>

        {/* CONTEÚDO */}
        <motion.div
          className={style.contentAbout}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.h2
            className={style.titleAbout}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Código com <span className={style.textPink}>propósito</span>
          </motion.h2>

          <motion.div
            className={style.textGroup}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className={style.textAbout}>
              Sou Isabelly, desenvolvedora front-end apaixonada por transformar ideias em interfaces intuitivas que as pessoas realmente gostam de usar. Comecei minha jornada na programação ao descobrir que design e lógica podem caminhar juntos e, desde então, não parei mais.
            </p>

            <p className={style.textAbout}>
              Desenvolvo principalmente com React, JavaScript, TypeScript, HTML e CSS, e tenho aprofundado meus estudos em Node.js. Acredito que uma boa interface não precisa gritar para ser bonita, às vezes, o que faz a diferença é exatamente o que você escolhe tirar.
            </p>

            <p className={style.textAbout}>
              Quando não estou codando, gosto de estudar UX, ler livros,  ouvir músicas e mergulhar em conteúdos em inglês e russo,  de vídeos a séries e filmes.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            className={style.stats}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >

            <div className={style.stat}>
              <p className={style.statNumber}>4+</p>
              <p className={style.statLabel}>Certificações</p>
            </div>

            <div className={style.stat}>
              <p className={style.statNumber}>JavaScript & React & TS</p>
              <p className={style.statLabel}>Foco de Estudo</p>
            </div>

            <div className={style.stat}>
              <p className={style.statNumber}>4+</p>
              <p className={style.statLabel}>Projetos Pessoais</p>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}