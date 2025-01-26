import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminPanel = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="glass-card" style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2EC4B6' }}>Admin Panel</h2>
      <button onClick={logout} className="skeu-button" style={{ marginBottom: '1rem' }}>
        Logout
      </button>
      {/* Rest of the Admin Panel code */}
    </div>
  );
};

export default AdminPanel;