import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectsCard({ link, IconComponent, title, description, tags }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.card}>
        <div>
          <div className={styles.cardHeader}>
            {/* Render the passed icon component */}
            {IconComponent && <IconComponent className={styles.logo} />}
            <h3 className={styles.title}>{title}</h3>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectsCard;