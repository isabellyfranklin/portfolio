import style from "./Certificates.module.css";
import iconCertificate from "../../assets/icon-certificate.svg";

interface props {
  year: number;
  name: string;
  school: string;
  certificateUrl?: string;
  className?:string;
}

export function CertificateCard({ year, name, school, certificateUrl,className }: props) {
  return (
    <article className={`${style.card} ${className}`}>
      <header className={style.headerCard}>
        <span className={style.iconCard}>
          <img
            className={style.imgCard}
            src={iconCertificate}
            alt=""
          />
        </span>
        <span className={style.yearCard}>{year}</span>
      </header>

      <h3 className={style.titleCard}>{name}</h3>
      <span className={style.schoolCard}>{school}</span>

      <a
        href={certificateUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={style.link}
      >
        Ver certificado
      </a>
    </article>
  );
}

export function Certificates() {
  return (
    <section className={style.certificates}>
      <span className={style.sectionLabel}>CERTIFICAÇÕES</span>

      <div className={style.contentCertificates}>
        <h2 className={style.titleCertificates}>Aprendizado contínuo</h2>

        <div className={style.cardCertificates}>

          <CertificateCard className={style.borderSantander} year={2026} name="Bootcamp com AI React" school="Santander" />

          <CertificateCard year={2026} name="Desenvolvimento Web" school="Fundação Bradesco" />

          <CertificateCard year={2026} name="Imersão Engenharia de Dados" school="Alura" />

          <CertificateCard year={2026} name="Logica de Programação com JavaScript" school="DIO" />

          <CertificateCard year={2025} name="JavaScrip Básico ao Avançado" school="Udemy" />

          <CertificateCard year={2025} name="Curso de HTML e CSS" school="Curso em Video" />
        </div>
      </div>
    </section>
  );
}