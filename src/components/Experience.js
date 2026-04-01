import { motion } from "framer-motion";
import "./Experience.css";

const Experience = ({ experience }) => {
  const items = Array.isArray(experience) ? experience : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="Section ExperienceSection">
      <div className="Container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="Section-title"
        >
          Experience
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="ExperienceGrid"
        >
          {items.map((item) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              variants={itemVariants}
              className="ExperienceCard"
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <h3 className="ExperienceRole">{item.role}</h3>
              <p className="ExperienceMeta">
                {item.company} · {item.duration}
              </p>
              <p className="ExperienceDescription">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
