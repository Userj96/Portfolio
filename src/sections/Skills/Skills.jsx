// Rebuilt: Skills.jsx
// Implements the new card-based design for a professional look.
import styles from './SkillsStyles.module.css';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const skillsData = {
  frontend: {
    icon: <FaCode />,
    title: "Frontend",
    skills: "HTML, CSS, JavaScript, React, Vite, Tailwind CSS"
  },
  backend: {
    icon: <FaServer />,
    title: "Backend",
    skills: "Node.js, Express, Python, Django, Databases (SQL, MongoDB)"
  },
  other: {
    icon: <FaTools />,
    title: "Other Tools",
    skills: "Git, GitHub, Docker, Figma, Reverse Engineering"
  }
};

function Skills() {
  return (
    <section id="skills" className={`${styles.container} section`}>
      <h1 className="sectionTitle">Technical Skills</h1>
      <div className={styles.skillList}>
        {Object.values(skillsData).map((category) => (
          <div key={category.title} className={styles.skillCard}>
            <h3>{category.icon} {category.title}</h3>
            <p>{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;