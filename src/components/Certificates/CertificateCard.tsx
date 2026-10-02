import { motion } from "motion/react";
import style from "./Certificates.module.css";
import iconCertificate from "../../assets/icon-certificate.svg";


interface props {
  year: number;
  name: string;
  school: string;
  certificateUrl?: string;
  className?: string;
}

export function CertificateCard({
  year,
  name,
  school,
  certificateUrl,
  className,
}: props) {
  return (
    <motion.article
      className={`${style.card} ${className}`}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <header className={style.headerCard}>
        <span className={style.iconCard}>
          <img className={style.imgCard} src={iconCertificate} alt="" />
        </span>

        <span className={style.yearCard}>{year}</span>
      </header>

      <h3 className={style.titleCard}>{name}</h3>

      <span className={style.schoolCard}>{school}</span>

      <a
        href={certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        Ver certificado
      </a>
    </motion.article>
  );
}