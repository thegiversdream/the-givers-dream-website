import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle, FaImages, FaUserCog, FaMoon, FaSun, FaEnvelope } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card"
      style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(46, 196, 182, 0.1)' }}
    >
      <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
        <Link to="/" className="skeu-button">
          <FaHome /> Home
        </Link>
        <Link to="/about" className="skeu-button">
          <FaInfoCircle /> About
        </Link>
        <Link to="/gallery" className="skeu-button">
          <FaImages /> Gallery
        </Link>
        <Link to="/contact" className="skeu-button">
          <FaEnvelope /> Contact
        </Link>
        {isAuthenticated && (
          <Link to="/admin" className="skeu-button">
            <FaUserCog /> Admin
          </Link>
        )}
        <button onClick={toggleTheme} className="skeu-button">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;