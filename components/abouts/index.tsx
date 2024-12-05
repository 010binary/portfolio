"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Coffee,
  Cpu,
  GitBranch,
  Palette,
  Terminal,
  Zap,
} from "lucide-react";
import { useState } from "react";

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

const skills = [
  {
    name: "Frontend Development",
    icon: Code2,
    description: "Building responsive and interactive user interfaces",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user experiences",
  },
  {
    name: "Problem Solving",
    icon: Brain,
    description: "Finding elegant solutions to complex problems",
  },
  {
    name: "Technical Architecture",
    icon: Cpu,
    description: "Designing scalable application structures",
  },
  {
    name: "Version Control",
    icon: GitBranch,
    description: "Managing code with Git and GitHub",
  },
  {
    name: "Command Line",
    icon: Terminal,
    description: "Proficient in terminal operations and scripting",
  },
  {
    name: "Quick Learner",
    icon: Zap,
    description: "Rapidly adapting to new technologies",
  },
  {
    name: "Team Collaboration",
    icon: Coffee,
    description: "Working effectively in agile environments",
  },
];

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "StoryBook"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "State Management",
    items: ["Zustand", "React Query"],
  },
  {
    category: "Testing",
    items: ["Jest"],
  },
  { category: "Tools", items: ["VS Code", "Git", "Docker", "Webpack", "NeoVim"] },
];

export function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" role="presentation">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-700/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        role="presentation"
      />

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.header
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-300">
              I'm a passionate frontend developer with a keen eye for design and
              a love for creating seamless user experiences. With years of
              experience in web development, I specialize in building modern,
              responsive applications using cutting-edge technologies.
            </p>
          </motion.header>

          {/* Navigation Tabs */}
          <motion.nav
            variants={itemVariants}
            className="flex justify-center space-x-4"
            role="tablist"
            aria-label="Skills and Technologies"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "skills"}
              aria-controls="skills-panel"
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "skills"
                  ? "bg-purple-600 text-white"
                  : "text-purple-400 hover:bg-purple-600/10"
              }`}
            >
              Skills
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "technologies"}
              aria-controls="technologies-panel"
              onClick={() => setActiveTab("technologies")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "technologies"
                  ? "bg-purple-600 text-white"
                  : "text-purple-400 hover:bg-purple-600/10"
              }`}
            >
              Technologies
            </button>
          </motion.nav>

          {/* Content Sections */}
          {activeTab === "skills" && (
            <motion.section
              id="skills-panel"
              role="tabpanel"
              aria-labelledby="skills-tab"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
                >
                  <skill.icon
                    className="w-8 h-8 text-purple-400 mb-4"
                    aria-hidden="true"
                  />
                  <h2 className="text-lg font-medium text-white mb-2">
                    {skill.name}
                  </h2>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </motion.article>
              ))}
            </motion.section>
          )}

          {activeTab === "technologies" && (
            <motion.section
              id="technologies-panel"
              role="tabpanel"
              aria-labelledby="technologies-tab"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {technologies.map((tech, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6"
                >
                  <h2 className="text-lg font-medium text-white mb-4">
                    {tech.category}
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {tech.items.map((item, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.section>
          )}

          {/* Timeline Section */}
          <motion.section
            variants={containerVariants}
            className="max-w-3xl mx-auto"
            aria-labelledby="timeline-heading"
          >
            <h2
              id="timeline-heading"
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              Experience Timeline
            </h2>
            <ol className="space-y-8">
              <motion.li
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-purple-600"
              >
                <div
                  className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"
                  aria-hidden="true"
                />
                <article>
                  <h3 className="text-lg font-medium text-white">
                    Frontend Developer
                  </h3>
                  <time className="text-purple-400">2022 - Present</time>
                  <p className="text-gray-300 mt-2">
                    Developed and maintained multiple React applications,
                    implemented responsive designs, and collaborated with UX
                    designers to create intuitive user interfaces.
                  </p>
                </article>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className="relative pl-8 border-l-2 border-purple-600"
              >
                <div
                  className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"
                  aria-hidden="true"
                />
                <article>
                  <h3 className="text-lg font-medium text-white">
                    Junior Developer
                  </h3>
                  <time className="text-purple-400">2020 - 2022</time>
                  <p className="text-gray-300 mt-2">
                    Started my journey in web development, working on various
                    projects and learning fundamental technologies and best
                    practices.
                  </p>
                </article>
              </motion.li>
            </ol>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
