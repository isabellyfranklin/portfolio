import style from "./Projects.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  previewColor: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  repoUrl,
  demoUrl,
  previewColor,
}: ProjectCardProps) {
  return (
    <div className={style.card}>
      <div className={style.preview} style={{ backgroundColor: previewColor }}>
        <span className={style.previewTitle}>{title}</span>
      </div>

      <h3 className={style.cardTitle}>{title}</h3>
      <p className={style.description}>{description}</p>

      <div className={style.tags}>
        {tags.map((tag) => (
          <span key={tag} className={style.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={style.links}>
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={style.link}>
            Repositório
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${style.link} ${style.linkPrimary}`}
          >
            Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}