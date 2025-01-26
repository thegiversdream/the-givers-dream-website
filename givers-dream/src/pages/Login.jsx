import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card"
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <h2 style={{ color: '#2EC4B6', marginBottom: '1rem' }}>Admin Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="glass-card"
          style={{ padding: '0.75rem', border: 'none' }}
        />
        <button type="submit" className="skeu-button">
          Login
        </button>
      </form>
    </motion.div>
  );
};

export default Login;