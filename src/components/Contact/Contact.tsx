import { motion } from "motion/react";
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
    <section className={style.contact} id="contact">
      <div className={style.grid}>

        {/* CONTEÚDO */}
        <motion.div
          className={style.contentContact}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.span
            className={style.mainTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CONTATO
          </motion.span>

          <motion.h2
            className={style.secondTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            Vamos trabalhar{" "}
            <span className={style.textPink}>juntas?</span>
          </motion.h2>

          <motion.p
            className={style.textContac}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            Estou aberta a novas oportunidades, projetos freelance e
            colaborações. Se você tem uma ideia e precisa de alguém para
            transformá-la em realidade, me chame, adoro novos desafios.
          </motion.p>
        </motion.div>

        {/* REDES SOCIAIS */}
        <motion.div
          className={style.sociaMedia}
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
          {contactItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={style.contactItem}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 60,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className={style.contactItemLeft}>
                <span className={style.contactIcon}>
                  {item.icon}
                </span>

                <div>
                  <p className={style.contactLabel}>
                    {item.label}
                  </p>

                  <p className={style.contactValue}>
                    {item.value}
                  </p>
                </div>
              </div>

              <span className={style.arrow}>↗</span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}