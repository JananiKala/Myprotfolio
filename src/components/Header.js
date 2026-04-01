import { motion } from "framer-motion";

const Header = ({ name }) => {
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <header className="Header">
      <div className="Container Header-inner">
        <motion.a
          className="Brand"
          href="#top"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.a>
        <motion.nav
          className="Nav"
          aria-label="Primary"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              className="Nav-link"
              href={`#${item.toLowerCase()}`}
              variants={itemVariants}
              whileHover={{ scale: 1.1, color: "var(--primary-light)" }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
