"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { project } from "@/public/index";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  demoLink: string;
  sourceLink: string;
}

const projects: Project[] = [
  {
    title: "BuildBot Gh",
    description:
      "A simple web app for Financial House in Ghana to allow users refer others for rewards.",
    image: project,
    demoLink: "htpps://buildbotgh.com",
    sourceLink: "https://github.com/amartey-tricky/buildbot-gh",
  },
  {
    title: "Mr. Ampadu Portfolio",
    description:
      "A portfolio website for Mr. Ampadu, an administrator from Ghana.",
    image: project,
    demoLink: "https://mrampadu.com",
    sourceLink: "https://github.com/amartey-tricky/mr-ampadu",
  },
  {
    title: "VheeWorld Foundation",
    description:
      "A website for the VheeWorld Foundation, a non-profit organization that aims to end streetism in Ghana.",
    image: project,
    demoLink: "https://vheeworld.org",
    sourceLink: "https://github.com/amartey-tricky/vhee",
  },
];

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

export function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projects_container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.projects_animation}
        >
          <motion.div variants={itemVariants}>
            <h2 className={styles.projects_title_h2}>Recent Projects</h2>
            <p className={styles.projects_title_p}>
              Here are some of my recent projects. I'm always looking for new
              challenges and opportunities to work on.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className={styles.projects_project}
          >
            {projects.map((project, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className={styles.projects_project_item}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                />
                <div className={styles.projects_project_item_content}>
                  <h3 className={styles.projects_project_item_title}>
                    {project.title}
                  </h3>
                  <p className={styles.projects_project_item_description}>
                    {project.description}
                  </p>
                  <div className={styles.projects_project_item_links}>
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projects_project_item_link}
                    >
                      <ExternalLink size={16} />
                      Website
                    </Link>
                    <Link
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projects_project_item_link}
                    >
                      <ExternalLink size={16} />
                      Source Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
