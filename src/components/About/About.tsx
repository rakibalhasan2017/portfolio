import styles from "./About.module.css";

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
              Hello! I'm a dedicated software enthusiast with a strong
              competitive programming background and solid foundation in data
              structures and algorithms. This analytical mindset, honed through
              solving <strong>1700+ problems</strong> on platforms like
              Codeforces, VJudge, and LightOJ, helps me tackle complex
              challenges efficiently.
            </p>
            <p>
              I recently elevated my expertise in <strong>DevOps</strong> and{" "}
              <strong>Cloud-Native Technologies</strong> through the robust
              DevOps & Cloud Engineering curriculum at BongoDev. This equipped
              me with hands-on command over <strong>Docker</strong>,{" "}
              <strong>Kubernetes</strong>, seamless{" "}
              <strong>CI/CD pipelines</strong>, and advanced observability tools
              like <strong>Prometheus, Grafana, and OpenObserve</strong>.
              Furthermore, I have engineered practical projects incorporating{" "}
              <strong>Generative AI (GenAI)</strong>,{" "}
              <strong>Retrieval-Augmented Generation (RAG)</strong>, and{" "}
              <strong>Agentic AI</strong>.
            </p>
            <p>
              I am deeply passionate about architecting{" "}
              <strong>scalable, secure systems</strong> and delivering{" "}
              <strong>AI-driven solutions</strong>. Furthermore, I am highly experienced in{" "}
              <strong>full-stack development</strong> using the <strong>MERN Stack</strong>,{" "}
              enabling me to engineer seamless, end-to-end web applications. Whether it is optimizing
              complex algorithms, deploying resilient containerized applications
              on Kubernetes, or building intelligent RAG systems, I bring
              relentless curiosity and technical excellence to every project.
            </p>
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlightCard}>
              <span className={styles.highlightNumber}>1700+</span>
              <span className={styles.highlightLabel}>Problems Solved</span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightNumber}>🥇</span>
              <span className={styles.highlightLabel}>
                Gold Badge (YouKn0wWho)
              </span>
            </div>
            <div className={styles.highlightCard}>
              <span className={styles.highlightNumber}>MERN</span>
              <span className={styles.highlightLabel}>
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
