"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import styles from "./index.module.css";

const codeSnippet = `
function Developer() {
  return (
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "HTML",
              "CSS", "JavaScript", "DrizzleORM", "SQL", "PostGres"],
    passion: "Building beautiful UIs and websites",
  )
}
`.trim();

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

const codeVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.6 },
  },
};

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated Background Elements */}
      <div className={styles.animated_container}>
        <div className={styles.animated_element1} />
        <div className={styles.animated_element2} />
      </div>
      {/* Grid Pattern Overlay */}
      <div className={styles.grid_pattern} />

      <div className={styles.grid_container}>
        <motion.div
          className={styles.grid_motion}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Main Content */}
          <div className={styles.hero_content}>
            <motion.div variants={itemVariants}>
              <span className={styles.hero_intro}>Hello, I'm</span>
              <h1 className={styles.hero_name}>Patrick Annang</h1>
              <h2 className={styles.hero_title}>Front-End Developer</h2>
            </motion.div>
            <motion.p variants={itemVariants} className={styles.hero_about}>
              I craft responsive websites where technology meets creativity.
              Building beautiful web experiences with modern technologies.
            </motion.p>
            <motion.div variants={itemVariants} className={styles.hero_button}>
              <button className={styles.hero_button_a} type="button">
                <Code2 size={20} />
                View Projects
              </button>
              <button className={styles.hero_button_b} type="button">
                <ExternalLink size={20} />
                Contact Me
              </button>
            </motion.div>
            <motion.div variants={itemVariants} className={styles.hero_social}>
              <Link href="#" className={styles.hero_social_icon}>
                <Github size={24} />
              </Link>
              <Link href="#" className={styles.hero_social_icon}>
                <Linkedin size={24} />
              </Link>
            </motion.div>
          </div>
          {/* Right Column - Code Preview */}
          <motion.div variants={codeVariants} className={styles.code_snippet}>
            <div className={styles.code_icon_container}>
              <div className={styles.code_icon_red} />
              <div className={styles.code_icon_yellow} />
              <div className={styles.code_icon_green} />
            </div>
            <pre className="font-mono text-sm">
              <code className="text-purple-300">
                {codeSnippet.split("\n").map((line, i) => (
                  <div key={i} className="line">
                    {line}
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
