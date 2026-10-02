import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import style from "./Hero.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const title = "Olá, eu sou";
const name = "Isabelly Franklin";

export function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(`.${style.portfolio}`, { opacity: 0, y: 20, duration: 0.6 })
        .from(
          `.${style.hero} h1 .letter`,
          { opacity: 0, duration: 0.03, stagger: 0.03 },
          "-=0.2"
        )
        .from(
          `.${style.name} .letter`,
          { opacity: 0, duration: 0.03, stagger: 0.03 },
          "-=0.1"
        )
        .from(`.${style.description}`, { opacity: 0, y: 20, duration: 0.6 }, "+=0.1")
        .from(`.${style.heroIcons}`, { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, "-=0.2");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={style.hero} id="hero">
      <span className={style.portfolio}>PORTFÓLIO</span>

      <h1>
        {title.split("").map((char, i) => (
          <span key={i} className="letter">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <h2 className={style.name}>
        {name.split("").map((char, i) => (
          <span key={i} className="letter">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      <p className={style.description}>
        <span>
          Desenvolvedora Front-End em formação, focada em criar interfaces que
          unem estética e funcionalidade.
        </span>
      </p>

      <div className={style.heroIcons}>
        <a 
        href="#projetos" 
        className={style.button}>
          Ver Projetos
        </a>

        <a className={style.heroSocialMedia}
          href="https://github.com/isabellyfranklin"
          target="_blank"
          rel="noopener noreferrer"
        >
          < FaGithub />
        </a>

        <a className={style.heroSocialMedia}
          href="https://www.linkedin.com/in/isabelly-franklin-6baa56268/?isSelfProfile=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          < FaLinkedin />
        </a>
      </div>
    </section>
  );
}