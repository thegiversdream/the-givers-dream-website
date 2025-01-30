import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card"
      style={{ textAlign: 'center', padding: '2rem', background: 'rgba(46, 196, 182, 0.1)' }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2EC4B6' }}
      >
        Welcome to The Givers Dream
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ fontSize: '1.2rem', color: '#4A5568' }}
      >
        Empowering young girls through mentorship, support, and essential resources.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ marginTop: '2rem' }}
      >
        <button className="skeu-button">Get Involved</button>
      </motion.div>
    </motion.div>
  );
};

export default Home;