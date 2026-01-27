import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Attachment',
    company: 'SynesisIT',
    period: 'Present',
    location: 'Bangladesh',
    description: [
      'Gaining hands-on experience in professional software development practices',
      'Working on real-world projects using modern technologies and frameworks',
      'Collaborating with experienced developers on full-stack applications',
      'Learning industry best practices for code quality, testing, and deployment',
    ],
    technologies: ['React', 'Node.js', 'Docker', 'AWS'],
    icon: '💼',
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
                    <span key={tech} className={styles.tech}>{tech}</span>
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
