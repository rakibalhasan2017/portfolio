import styles from './Skills.module.css';

const skills = [
  {
    category: 'Full Stack Development',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'JavaScript', 'Socket.io'],
  },
  {
    category: 'AI & GenAI',
    items: ['LangChain', 'LangGraph', 'LangSmith', 'RAG Systems', 'Agentic AI', 'Streamlit'],
  },
  {
    category: 'Data Science',
    items: ['Python', 'Pandas', 'NumPy', 'PyTorch', 'Data Analysis'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'GitHub Actions', 'AWS', 'OpenObserve', 'Linux', 'CI/CD'],
  },
];

const problemSolvingProfiles = [
  { name: 'Codeforces (Main)', url: 'https://codeforces.com/profile/rakib2017' },
  { name: 'Codeforces (Alt)', url: 'https://codeforces.com/profile/wanna_be_poor_rainboy' },
  { name: 'VJudge', url: 'https://vjudge.net/user/Rakuhasan2017' },
  { name: 'LightOJ', url: 'https://lightoj.com/user/user-9sjx5qc5' },
  { name: 'YouKn0wWho Academy', url: 'https://youkn0wwho.academy/' },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}>02.</span>
          Skills & Technologies
        </h2>
        
        {/* Problem Solving Highlight */}
        <div className={styles.problemSolving}>
          <div className={styles.psContent}>
            <div className={styles.psIcon}>🏆</div>
            <div className={styles.psInfo}>
              <h3>Competitive Programming</h3>
              <p>
                Solved <strong>1700+ problems</strong> covering a wide range of data structures and algorithms.
                Completed Phase 2 & 3 at YouKn0wWho Academy with a <strong>Gold Badge</strong> for solving 450+ problems.
              </p>
              <div className={styles.profileLinks}>
                {problemSolvingProfiles.map((profile) => (
                  <a 
                    key={profile.name} 
                    href={profile.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.profileLink}
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className={styles.skillCard}>
              <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
              <ul className={styles.skillList}>
                {skillGroup.items.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.bullet}>▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.experience}>
          <h3 className={styles.experienceTitle}>What I Bring to the Table</h3>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceItem}>
              <div className={styles.experienceIcon}>🧠</div>
              <h4>Problem Solving</h4>
              <p>Strong foundation in DSA with 1700+ problems solved across multiple competitive programming platforms.</p>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.experienceIcon}>🤖</div>
              <h4>AI Innovation</h4>
              <p>Expertise in GenAI, RAG systems, and Agentic AI - building intelligent solutions with cutting-edge tech.</p>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.experienceIcon}>🚀</div>
              <h4>Full Stack Development</h4>
              <p>End-to-end MERN stack development with real-time capabilities using Socket.io.</p>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.experienceIcon}>⚙️</div>
              <h4>DevOps Mindset</h4>
              <p>Containerization, CI/CD pipelines, and cloud deployment for scalable applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
