import { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields: Name, Email, and Message are required.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Using Web3Forms API to send email
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e97d1388-3ffd-4ec3-b7bf-ba59dbfeadce', // Get free key at https://web3forms.com
          to_email: 'rakuhasan2017@gmail.com',
          from_name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact from ${formData.name}`,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to mailto if API fails
      const mailtoLink = `mailto:rakuhasan2017@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.number}>06.</span>
          Get In Touch
        </h2>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Let's Work Together</h3>
            <p className={styles.infoText}>
              I'm currently open to new opportunities and collaborations. 
              Whether you have a project in mind, want to hire me, or just want to say hi, 
              feel free to reach out!
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:rakuhasan2017@gmail.com">rakuhasan2017@gmail.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <span className={styles.contactLabel}>Location</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://github.com/rakibalhasan2017" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rakib-al-hasan-55721a216" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.facebook.com/rakib.hasan.837589" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Built with ❤️ using React & TypeScript</p>
        <p>© {new Date().getFullYear()} Rakib Al Hasan. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
