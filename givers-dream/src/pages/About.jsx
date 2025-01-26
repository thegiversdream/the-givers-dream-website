import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card"
    >
      <h2>About The Givers Dream</h2>
      <p>
        We are a nonprofit organization founded by three visionary women—Adeline Rukundo, Melani Lallo, and Kristen Setton. Our mission is to mentor and support orphaned girls in Cape Town, South Africa, helping them overcome socio-economic challenges and thrive in life.
      </p>
      <p>
        Through mentorship, essential resources, and community engagement, we aim to create a brighter future for these young girls.
      </p>
    </motion.div>
  );
};

export default About;