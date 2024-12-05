"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Cpu } from "lucide-react";
import styles from "./index.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about_container}>
        <motion.div
          className={styles.grid_container}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className={styles.grid_me}>About Me</h2>
            <p className={styles.grid_about}>
              I'm a passionate front-end developer with a deep love for crafting
              beautiful and functional user interfaces. With years of
              experience, I've honed my skills in modern web technologies like
              React, Next.js, and TypeScript.
            </p>
            <p className={styles.grid_about_p}>
              My goal is to create web experiences that not only look stunning
              but also provide a seamless and intuitive user experience. I'm
              always eager to learn and explore new tools and techniques to stay
              ahead of the curve.
            </p>
          </motion.div>
          <motion.div variants={containerVariants} className={styles.icon_grid}>
            <motion.div
              variants={itemVariants}
              className={styles.icon_container}
            >
              <Code size={36} className={styles.icon} />
              <h3 className={styles.icon_h3}>Coding</h3>
              <p className={styles.icon_p}>
                I love writing clean, efficient, and maintainable code.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className={styles.icon_container}
            >
              <Coffee size={36} className={styles.icon} />
              <h3 className={styles.icon_h3}>Coffee</h3>
              <p className={styles.icon_p}>
                I enjoy a good cup of coffee and find it helps me stay focused
                and productive.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className={styles.icon_container}
            >
              <Cpu size={36} className={styles.icon} />
              <h3 className={styles.icon_h3}>Tech</h3>
              <p className={styles.icon_p}>
                I'm always learning new technologies and staying up-to-date with
                the latest trends.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
