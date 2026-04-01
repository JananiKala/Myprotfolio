import { motion } from "framer-motion";
import "./Projects.css";

const Projects = ({ projects }) => {
  const pickHref = (project, preferredLabels) => {
    if (!project || !Array.isArray(project.links)) return "";
    const href =
      project.links.find((link) =>
        preferredLabels.includes(String(link?.label || "").toLowerCase()),
      )?.href || "";
    return String(href || "").trim();
  };

  const pickViewHref = (project) =>
    pickHref(project, ["view", "live", "demo", "play store", "website"]);

  const items = Array.isArray(projects) ? projects : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projects" className="Section ProjectsSection">
      <div className="Container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="Section-title"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="ProjectsGrid"
          aria-label="Project list"
        >
          {items.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="ProjectCard"
              whileHover={{ y: -14, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div className="ProjectMedia">
                {project.image ? (
                  <motion.img
                    className="ProjectImage"
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.09, rotate: 0.2 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                ) : (
                  <div className="ProjectImagePlaceholder" aria-hidden="true">
                    <div className="ProjectImagePlaceholderInner">
                      <div className="ProjectImagePlaceholderTitle">
                        {project.title}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="ProjectBody">
                <h3 className="ProjectTitle">{project.title}</h3>
                <p className="ProjectDesc">{project.description}</p>

                <div
                  className="ProjectActions"
                  aria-label={`${project.title} actions`}
                >
                  {pickViewHref(project) ? (
                    <motion.a
                      className="ProjectLink"
                      href={pickViewHref(project)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} project`}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    >
                      View Project
                    </motion.a>
                  ) : (
                    <span
                      className="ProjectLink Disabled"
                      aria-disabled="true"
                      aria-label={`View ${project.title} project`}
                    >
                      View Project
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
