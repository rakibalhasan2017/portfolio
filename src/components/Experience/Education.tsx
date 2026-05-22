import styles from "./Education.module.css";

const education = [
  {
    institution: "Chittagong University of Engineering and Technology",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "March 2022 – Present",
    icon: "🎓",
  },
  {
    institution: "Dhaka College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2020",
    icon: "📚",
  },
  {
    institution: "Willes Little Flower School And College",
    degree: "Secondary School Certificate (SSC)",
    period: "2018",
    icon: "🏫",
  },
];

const courses = [
  {
    title: "DevOps & Cloud Engineering",
    provider: "BongoDev",
    certificates: [],
    icon: "☁️",
    isHighlighted: true,
  },
  {
    title: "Andrew Ng's Machine Learning Specialization",
    provider: "DeepLearning.AI (Coursera)",
    certificates: [
      { name: "Supervised Learning", url: "/Coursera_Supervised.pdf" },
      { name: "Advanced Learning", url: "/Coursera_Advanced_Learning.pdf" },
    ],
    icon: "🤖",
  },
  {
    title: "LLM & Transformers Course",
    provider: "Hugging Face",
    certificates: [],
    icon: "🤗",
  },
];

const activities = [
  {
    role: "Organizing Secretary",
    organization: "CUET Computer Club",
    icon: "💻",
  },
  {
    role: "Vice President",
    organization: "Bashundhara Shuvo Shongho",
    icon: "🤝",
  },
  {
    role: "Organizing Secretary",
    organization: "CUET CSE Fest 2025",
    icon: "🎉",
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        {/* Education Section */}
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}>05.</span>
          Education & Certifications
        </h2>

        <div className={styles.educationGrid}>
          {education.map((edu) => (
            <div key={edu.institution} className={styles.eduCard}>
              <span className={styles.eduIcon}>{edu.icon}</span>
              <div className={styles.eduInfo}>
                <h3>{edu.institution}</h3>
                <p className={styles.degree}>{edu.degree}</p>
                <span className={styles.period}>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className={styles.coursesSection}>
          <h3 className={styles.subSectionTitle}>
            📜 Courses & Certifications
          </h3>
          <div className={styles.coursesGrid}>
            {courses.map((course) => (
              <div
                key={course.title}
                className={`${styles.courseCard} ${course.isHighlighted ? styles.highlightedCourse : ""}`}
              >
                <span className={styles.courseIcon}>{course.icon}</span>
                <div className={styles.courseInfo}>
                  <h4>
                    {course.title}
                    {course.isHighlighted && (
                      <span className={styles.highlightBadge}>
                        ⭐ Top Highlight
                      </span>
                    )}
                  </h4>
                  <p className={styles.provider}>{course.provider}</p>
                  {course.certificates.length > 0 && (
                    <div className={styles.certLinks}>
                      {course.certificates.map((cert) => (
                        <a
                          key={cert.name}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.certLink}
                        >
                          📄 {cert.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra-Curricular Activities */}
        <div className={styles.activitiesSection}>
          <h3 className={styles.subSectionTitle}>🌟 Leadership & Activities</h3>
          <div className={styles.activitiesGrid}>
            {activities.map((activity) => (
              <div key={activity.organization} className={styles.activityCard}>
                <span className={styles.activityIcon}>{activity.icon}</span>
                <div className={styles.activityInfo}>
                  <h4>{activity.role}</h4>
                  <p>{activity.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
