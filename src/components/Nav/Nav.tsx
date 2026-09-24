import { useState } from 'react'
import style from './nav.module.css'

export function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return(
        <header className={style.mainHeader}>
            <p className={style.logo}>IF.</p>
            <nav>
            <div className={style.mobile} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className={style.lines}></div>
                <div className={style.lines}></div>
                <div className={style.lines}></div>
            </div>
            <ul className={isMenuOpen ? `${style.navbar} ${style.open}` : style.navbar}>
                    <a href="#">
                        <li>Inico</li>
                    </a>
                    <a href="#">
                        <li>Sobre</li>
                    </a>
                    <a href="#">
                        <li>Certificaçoes</li>
                    </a>
                    <a href="#">
                        <li>Projetos</li>
                    </a>
                    <a href="#">
                        <li>Contato</li>
                    </a>
            </ul>
            </nav>
        </header>
    )
}