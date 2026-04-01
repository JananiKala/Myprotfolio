import { motion } from "framer-motion";
import "./Skills.css";

const Skills = ({ skills }) => {
  const items = Array.isArray(skills) ? skills : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="Section Alt">
      <div className="Container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="Section-title"
        >
          Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="SkillsGrid"
        >
          {items.map((skill) => (
            <motion.div
              key={skill}
              className="SkillCard"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0px 20px 34px rgba(0, 0, 0, 0.26)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
