import { motion } from 'framer-motion';

const GalleryPage = () => {
  const images = [
    process.env.PUBLIC_URL + '/assets/images/image-1.jpeg',
    process.env.PUBLIC_URL + '/assets/images/image-2.jpeg',
    process.env.PUBLIC_URL + '/assets/images/image-3.jpeg',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card"
      style={{ padding: '2rem', background: 'rgba(46, 196, 182, 0.1)' }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2EC4B6' }}>Our Gallery</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            style={{
              borderRadius: '10px',
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default GalleryPage;