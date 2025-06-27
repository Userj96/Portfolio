import styles from './HeroStyle.module.css';
import heroImg from '../../assets/hero-img.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CV from '../../assets/cv.pdf';

function Hero() {
  return (
    <section id="hero" className={`${styles.container} section`}>
      <div className={styles.heroContent}>
        <img className={styles.heroLogo} src={heroImg} alt="Anshuman Sharma's Logo" />
        <div className={styles.heroText}>
          <h1>
            Anshuman
            <br />
            Sharma
          </h1>
          <p>⚡️ Full-Stack Developer | 💻 Learning Stuff</p>
        </div>
      </div>

      <div className={styles.linksContainer}>
        <a href="https://github.com/Ade-mir" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FaLinkedin /> LinkedIn
        </a>
         <a href={CV} download className={`${styles.linkButton} ${styles.resumeButton}`}>
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
