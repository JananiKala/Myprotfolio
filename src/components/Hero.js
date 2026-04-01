import React from "react";
import { motion } from "framer-motion";

import jsIcon from "../assets/js.png";
import firebaseIcon from "../assets/firebase.png";
import gitHubIcon from "../assets/github.png";
import htmlCssIcon from "../assets/htmlCss.png";
import reactNativeIcon from "../assets/reactNative.png";

const Hero = ({ profile, profileImage }) => {
  const orbitRings = [
    {
      key: "ring-1",
      className: "OrbitRing OrbitRing--1",
      duration: "12s",
      radius: 175,
      items: [
        { key: "react-native", label: "React Native", src: reactNativeIcon },
      ],
    },
    {
      key: "ring-3",
      className: "OrbitRing OrbitRing--3",
      duration: "20s",
      radius: 210,
      items: [
        { key: "js", label: "JavaScript", src: jsIcon },
        { key: "github", label: "GitHub", src: gitHubIcon },
        { key: "firebase", label: "Firebase", src: firebaseIcon },
        { key: "html-css", label: "HTML + CSS", src: htmlCssIcon },
      ],
    },
  ];

  return (
    <section className="Section Hero" aria-label="Introduction">
      <div className="Container Hero-inner">
        <div className="Hero-copy">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="Kicker"
          >
            Hello, I’m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="Title"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="Subtitle"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="Lead"
          >
            {profile.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="Actions"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="Button Primary"
              href="#projects"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="Button"
              href={`mailto:${profile.email}`}
            >
              Email Me
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="Links"
            aria-label="Social links"
          >
            {profile.links.map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.1, color: "var(--primary)" }}
                className="Link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="Hero-image-container"
        >
          <div className="Hero-avatar">
            <div className="OrbitRings" aria-hidden="true">
              {orbitRings.map((ring) => (
                <div
                  key={ring.key}
                  className={ring.className}
                  style={{
                    "--orbit-radius": `${ring.radius}px`,
                    "--orbit-duration": ring.duration,
                  }}
                >
                  {ring.items.map((skill, index) => (
                    <span
                      key={skill.key}
                      className="Orbit-item"
                      style={{ "--i": index, "--count": ring.items.length }}
                    >
                      <span className="Orbit-badge">
                        <span className="Orbit-badgeInner">
                          <img
                            className="Orbit-img"
                            src={skill.src}
                            alt={skill.label}
                            data-skill={skill.key}
                          />
                        </span>
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="Hero-image-wrapper">
              <img src={profileImage} alt="Profile" className="Hero-image" />
            </div>
          </div>
          {profile.resume?.href ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="Hero-resumeActions"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="Button Hero-resumeButton"
                href={profile.resume.href}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="Button Primary Hero-resumeButton"
                href={profile.resume.href}
                download={profile.resume.fileName}
              >
                Download Resume
              </motion.a>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
