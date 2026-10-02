import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import style from "./Contact.module.css";

const contactItems = [
  {
    icon: <HiOutlineMail />,
    label: "E-MAIL",
    value: "isafranklin883@gmail.com",
    href: "mailto:isafranklin883@gmail.com",
  },
  {
    icon: <FaGithub />,
    label: "GITHUB",
    value: "github.com/isabellyfranklin",
    href: "https://github.com/isabellyfranklin",
  },
  {
    icon: <FaLinkedin />,
    label: "LINKEDIN",
    value: "linkedin.com/in/isabellyfranklin",
    href: "https://www.linkedin.com/in/isabelly-franklin-6baa56268/?isSelfProfile=true",
  },
];

export function Contact() {
  return (
    <section className={style.contact}>
      <div className={style.grid}>
        <div className={style.contentContact}>
          <span className={style.mainTitle}>CONTATO</span>
          <h2 className={style.secondTitle}>
            Vamos trabalhar <span className={style.textPink}>juntas?</span>
          </h2>
          <p className={style.textContac}>
            Estou aberta a novas oportunidades, projetos freelance e
            colaborações. Se você tem uma ideia e precisa de alguém para
            transformá-la em realidade, me chame, adoro novos desafios.
          </p>
        </div>

        <div className={style.sociaMedia}>
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={style.contactItem}
            >
              <div className={style.contactItemLeft}>
                <span className={style.contactIcon}>{item.icon}</span>
                <div>
                  <p className={style.contactLabel}>{item.label}</p>
                  <p className={style.contactValue}>{item.value}</p>
                </div>
              </div>
              <span className={style.arrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}