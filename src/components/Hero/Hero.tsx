import style from "./Hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className={style.hero}>
      <span className={style.portfolio}>PORTFÓLIO</span>
      <h1>Olá, eu sou</h1>
      <h2 className={style.name}>Isabelly Franklin</h2>

      <p className={style.description}>
        <span>
          Desenvolvedora Front-End em formação, focada em criar interfaces que
          unem estética e funcionalidade.
        </span>
      </p>

      <div className={style.heroIcons}>
        <a href="#projetos" className={style.button}>
          Ver Projetos ↗
        </a>

        <a className={style.heroSocialMedia} 
          href="https://github.com/isabellyfranklin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        
        <a className={style.heroSocialMedia}
          href="https://linkedin.com/in/isabellyfranklin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
