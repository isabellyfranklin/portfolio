import style from "./About.module.css";
import myPhoto from "../../assets/Minha foto do linkdin.jpeg"

export function About() { 

  return (
    <section className={style.about}>
      <span className={style.sectionLabel}>SOBRE</span>

      <div className={style.grid}>
        <div className={style.photoWrapper}>
          <img className={style.photo} src={myPhoto} alt="Foto de Isabelly Franklin" />
        </div>

        <div className={style.contentAbout}>
          <h2 className={style.titleAbout}>
            Código com <span className={style.textPink}>propósito</span>
          </h2>

          <div className={style.textGroup}>
            <p className={style.textAbout}>
              Sou Isabelly Franklin, desenvolvedora front-end apaixonada por
              transformar ideias em interfaces que as pessoas realmente gostam
              de usar. Comecei minha jornada na programação após descobrir que o
              design e a lógica podiam andar juntos, e desde então não parei
              mais.
            </p>
            <p className={style.textAbout}>
              Estudo e desenvolvo principalmente com React, além de JavaScript,
              HTML e CSS, e venho me aprofundando em TypeScript, acessibilidade
              e design systems. Acredito que uma boa interface não precisa
              gritar para ser bonita; às vezes o que faz diferença é exatamente
              o que você escolhe tirar.
            </p>
            <p className={style.textAbout}>
              Quando não estou codando, estou estudando UX, assistindo séries ou
              explorando novas ferramentas que me ajudem a construir produtos
              melhores.
            </p>
          </div>

          <div className={style.stats}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
