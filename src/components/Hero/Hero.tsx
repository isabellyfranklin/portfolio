import style from './Hero.module.css'

export function Hero() {

    return(
        <section className={style.hero}>
            <span className={style.portfolio}>PORTFÓLIO</span>
            <h1>Olá, eu sou</h1>
            <h2>Isabelly Franklin</h2>
        </section>
    )
}