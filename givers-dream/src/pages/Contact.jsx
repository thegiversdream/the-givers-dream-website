import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card"
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <h2 style={{ color: '#2EC4B6', marginBottom: '1rem' }}>Contact Us</h2>
      <p style={{ fontSize: '1.2rem', color: '#4A5568', marginBottom: '2rem' }}>
        We’d love to hear from you! Whether you have questions about our programs, want to get involved, or just want to say hello, feel free to reach out to us.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaEnvelope style={{ color: '#2EC4B6' }} />
          <a href="mailto:info@giversdream.org" style={{ color: '#4A5568', textDecoration: 'none' }}>
            info@giversdream.org
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaPhone style={{ color: '#2EC4B6' }} />
          <a href="tel:+27632655329" style={{ color: '#4A5568', textDecoration: 'none' }}>
            +27 63 265 5329
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;