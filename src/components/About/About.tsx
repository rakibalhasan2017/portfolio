import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}>01.</span>
          About Me
        </h2>
        
        <div className={styles.content}>
          <div className={styles.text}>
           <p>
  Hello! I'm a dedicated software enthusiast with a strong competitive programming background 
  and solid foundation in data structures and algorithms. This analytical mindset, honed through 
  solving <strong>1700+ problems</strong> on platforms like Codeforces, VJudge, and LightOJ, 
  helps me tackle complex challenges efficiently.
</p>
<p>
  I'm experienced in full-stack development using the <strong>MERN Stack</strong>, building 
  scalable web applications with real-time features. Recently, I've extended my expertise to <strong>DevOps</strong> and <strong>cloud-native technologies</strong>, including <strong>Kubernetes</strong>, security management with <strong>Vault</strong>, and observability 
  tools like <strong>OpenObserve</strong>. I've also gained knowledge in <strong>Generative AI (GenAI)</strong>, 
  <strong>Retrieval Augmented Generation (RAG)</strong>, and <strong>Agentic AI</strong> through hands-on projects.
</p>
<p>
  I'm passionate about building scalable, secure systems and AI-driven solutions. Whether it's 
  optimizing algorithms, deploying containerized applications on Kubernetes, or building intelligent 
  RAG systems, I bring dedication and curiosity to every project.
</p>
          </div>
          
          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightNumber}>1700+</span>
              <span className={styles.highlightLabel}>Problems Solved</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightNumber}>🥇</span>
              <span className={styles.highlightLabel}>Gold Badge (YouKn0wWho)</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightNumber}>MERN</span>
              <span className={styles.highlightLabel}>Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
