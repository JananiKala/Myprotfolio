import { motion } from "framer-motion";

const About = ({ profile }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
      id="about"
      className="Section"
    >
      <div className="Container">
        <motion.h2 variants={itemVariants} className="Section-title">
          About
        </motion.h2>
        <motion.p variants={itemVariants} className="Section-text">
          I'm {profile.name}, a {profile.title}. {profile.description}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
