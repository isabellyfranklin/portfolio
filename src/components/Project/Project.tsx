import { ProjectCard } from "./ProjectCard";
import style from "./Projects.module.css";

const projects = [
  {
    title: "App de Filmes",
    description:
      "Site que exibe os filmes mais populares do momento, consumindo dados da API do TMDB (The Movie Database).",
    tags: ["REACT", "TYPESCRIPT", "SCSS", "AXIOS"],
    repoUrl: "https://github.com/isabellyfranklin/lumi-dashboard",
    demoUrl: "https://github.com/isabellyfranklin/App-de-Filmes",
    previewColor: "#1a1018",
  },
  {
    title: "Sistema Médico",
    description:
      "O Sistema Médico é um painel administrativo pensado para o dia a dia de uma clínica, permitindo visualizar e gerenciar dados de forma prática. O projeto está sendo construído com foco em fundamentos sólidos de front-end: HTML semântico, estilização organizada com SCSS e lógica de interação em TypeScript, sem frameworks.",
    tags: ["HTML5","TYPESCRIPT", "SCSS/SASS", ],
    repoUrl: "https://github.com/isabellyfranklin/Sistema-medico",
    demoUrl: "https://isabellyfranklin.github.io/Sistema-medico/",
    previewColor: "#0f1a18",
  },
  {
    title: "Loja de Beleza",
    description:
      "Landing page de e-commerce para uma loja de maquiagem e produtos de beleza, com vitrine de produtos organizada por categoria.",
    tags: ["HTML5", "CSS3", "JAVASCRIPT(vanilla)"],
    repoUrl: "https://github.com/isabellyfranklin/Loja-de-Beleza",
    demoUrl: "https://isabellyfranklin.github.io/Loja-de-Beleza/",
    previewColor: "#101018",
  },
  {
    title: "Projeto Faculdade ",
    description:
      "Sistema de organização dos estudos da faculdade, estruturado do 1° ao 6° trimestre. Lista as matérias e aulas de cada período, com resumos de conteúdo para revisão e quiz de fixação ao final de cada um. Permite navegar até a página detalhada de cada trimestre, sinalizando os que ainda estão em construção.",
    tags:  ["HTML5", "CSS3", "JAVASCRIPT(vanilla)"],
    repoUrl: "https://github.com/isabellyfranklin/projeto-faculdade-materias",
    demoUrl: "https://isabellyfranklin.github.io/projeto-faculdade-materias/",
    previewColor: "#181018",
  },
];

export function Projects() {
  return (
    <section className={style.projects} id="projetos">
      <span className={style.mainTitle}>PROJETOS</span>
      <h2 className={style.title}>O que eu construí</h2>

      <div className={style.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}