import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Real-Time Chat Application (Messenger Clone)',
    description: 'Built a real-time chat application supporting instant messaging similar to Facebook Messenger. Implemented bidirectional communication using Socket.io for real-time message delivery. Managed global state using Zustand for messages, users, and chat sessions. Integrated Cloudinary for image uploads and designed secure JWT authentication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Zustand', 'JWT'],
    image: 'https://opengraph.githubassets.com/1/rakibalhasan2017/chat-application',
    liveUrl: '#',
    githubUrl: 'https://github.com/rakibalhasan2017/chat_application',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce web application with JWT-based authentication including user sign-up, login/logout, token refresh, and admin role control. Built RESTful APIs for product management, shopping cart operations, and coupon validation. Integrated SSLCommerz & Stripe payment gateways for secure order processing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
     image: 'https://opengraph.githubassets.com/1/rakibalhasan2017/chat-application',
    liveUrl: '#',
    githubUrl: 'https://github.com/rakibalhasan2017/ecommerce',
  },
  {
    id: 3,
    title: 'YouTube Chatbot with RAG',
    description: 'Designed a full RAG pipeline that answers questions about any YouTube video. Accepts a video ID, downloads the transcript, splits it into chunks, and creates vector embeddings stored in ChromaDB. Implements retrieval to fetch relevant context and calls an LLM to generate accurate answers. Built with LangChain modules and Streamlit UI.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'RAG', 'Streamlit', 'LLM'],
     image: 'https://opengraph.githubassets.com/1/rakibalhasan2017/chat-application',
    liveUrl: '#',
    githubUrl: 'https://github.com/rakibalhasan2017/Langchain_CampusX',
  },
  {
    id: 4,
    title: 'Book Store Full Stack',
    description: 'A comprehensive full-stack book store application with complete CRUD operations for book management. Features user authentication, book catalog browsing, shopping cart functionality, and order management. Built with modern web technologies following best practices for scalable architecture.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
     image: 'https://opengraph.githubassets.com/1/rakibalhasan2017/chat-application',
    liveUrl: '#',
    githubUrl: 'https://github.com/rakibalhasan2017/book-store-full-stack',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}>04.</span>
          Featured Projects
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>Project Preview</span>
                  </div>
                )}
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                 
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.moreProjects}>
          <a href="https://github.com/rakibalhasan2017" target="_blank" rel="noopener noreferrer" className={styles.moreBtn}>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
