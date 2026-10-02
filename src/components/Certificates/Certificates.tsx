import { motion } from "motion/react";
import style from "./Certificates.module.css";
import {CertificateCard} from "./CertificateCard"



export function Certificates() {
  return (
    <section className={style.certificates} id="certificates">
      {/* TÍTULO DA SEÇÃO */}
      <motion.span
        className={style.sectionLabel}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        CERTIFICAÇÕES
      </motion.span>

      <div className={style.contentCertificates}>
        {/* TÍTULO */}
        <motion.h2
          className={style.titleCertificates}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Aprendizado contínuo
        </motion.h2>

        {/* CARDS */}
        <motion.div
          className={style.cardCertificates}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <CertificateCard
            className={style.borderSantander}
            year={2026}
            name="Bootcamp com AI React"
            school="Santander"
            certificateUrl=""
          />

          <CertificateCard
            year={2026}
            name="Desenvolvimento Web"
            school="Fundação Bradesco"
          />

          <CertificateCard
            year={2026}
            name="Imersão Engenharia de Dados"
            school="Alura"
          />

          <CertificateCard
            year={2026}
            name="Logica de Programação com JavaScript"
            school="DIO"
          />

          <CertificateCard
            year={2025}
            name="JavaScrip Básico ao Avançado"
            school="Udemy"
          />

          <CertificateCard
            year={2025}
            name="Curso de HTML e CSS"
            school="Curso em Video"
          />
        </motion.div>
      </div>
    </section>
  );
}
