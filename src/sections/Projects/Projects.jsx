import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectsCard from '../../common/ProjectsCard';
import { FaAndroid, FaDatabase, FaGamepad, FaCode, FaRobot } from 'react-icons/fa';

function Projects() {
  return (
    <section id="projects" className={`${styles.container} section`}>
      <h1 className="sectionTitle">Active Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          IconComponent={FaAndroid}
          link="#"
          title="MysticGSI"
          description="OEM GSIs Project. brick factory."
          tags={['Reverse Engineering', 'Developer']}
        />
        <ProjectsCard
          IconComponent={FaDatabase}
          link="#"
          title="MysticLeaks"
          description="Android stuff leaks. shhh..."
          tags={['Datamining', 'Reverse Engineering']}
        />
        <ProjectsCard
          IconComponent={FaGamepad}
          link="#"
          title="Gene Brawl"
          description="Modification for Brawl Stars with battle enhancements for Android/iOS."
          tags={['Reverse Engineering', 'Frida']}
        />
        <ProjectsCard
          IconComponent={FaCode}
          link="#"
          title="MeowAPI"
          description="Unofficial API that provides more data than official. Brawl Stars Util."
          tags={['Reverse Engineering', 'C#']}
        />
        <ProjectsCard
          IconComponent={FaRobot}
          link="#"
          title="SCUtils"
          description="Telegram bot that do fake spectators in battles and offers additional in-game manipulation features."
          tags={['Reverse Engineering', 'C#']}
        />
      </div>
    </section>
  );
}

export default Projects;