import { motion } from "framer-motion";

const Contact = ({ phone, email }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="contact" className="Section">
      <div className="Container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="Section-title">
            Contact
          </motion.h2>
          <motion.p variants={itemVariants} className="Section-text">
            "Great ideas start with a simple hello. Let's build something
            amazing together."
          </motion.p>
          <motion.p variants={itemVariants} className="Section-text">
            Want to work together or have a question? connect with me .....
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="Actions ContactActions"
          >
            <motion.a
              className="Button ContactAction"
              href={`tel:${phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {phone}
            </motion.a>
            <motion.a
              className="Button ContactAction"
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {email}
            </motion.a>
          </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
