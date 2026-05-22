import styles from "./Experience.module.css";

const experiences = [
  {
    id: 1,
    role: "Intern",
    company: "Bloomatiq",
    period: "February 2026 – Present",
    location: "Bangladesh",
    description: [
      "Focused on DevOps practices, managing the full software lifecycle from development to deployment.",
      "Deployed and managed applications on AWS EC2 servers.",
      "Worked extensively with Docker and Kubernetes for containerization and orchestration.",
      "Implemented secure secret management using HashiCorp Vault to mitigate Kubernetes security vulnerabilities.",
      "Researched and implemented observability solutions using the open-source tool OpenObserve.",
      "Designed and automated CI/CD pipelines using GitHub Actions for efficient and reliable deployments.",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "AWS EC2",
      "HashiCorp Vault",
      "OpenObserve",
      "GitHub Actions",
    ],
    icon: "💼",
  },
  {
    id: 2,
    role: "Software Engineering Attachment",
    company: "SynesisIT",
    period: "3 November 2025 – 23 November 2025",
    location: "Bangladesh",
    description: [
      "Gaining hands-on experience in professional software development practices",
      "Working on real-world projects using modern technologies and frameworks",
      "Collaborating with experienced developers on full-stack applications",
      "Learning industry best practices for code quality, testing, and deployment",
    ],
    technologies: ["React", "Node.js", "Docker", "AWS"],
    icon: "💼",
  },
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}>03.</span>
          Work Experience
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>{exp.icon}</div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>📍 {exp.location}</span>
                  </div>
                </div>

                <ul className={styles.description}>
                  {exp.description.map((item, index) => (
                    <li key={index}>
                      <span className={styles.bullet}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={styles.technologies}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
