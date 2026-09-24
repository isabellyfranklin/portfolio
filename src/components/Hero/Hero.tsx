import style from "./Hero.module.css";

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

      <a href="#projetos" className={style.button}>
        Ver Projetos ↗
      </a>
    </section>
  );
}
