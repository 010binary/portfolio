"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";

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

export function HeroContent() {
  return (
    <section className="relative flex items-center min-h-[75vh]">
      <div
        className="container
  mx-auto
  px-4
  z-10;"
      >
        <motion.div
          className="grid
  grid-cols-1
  lg:grid-cols-2
  gap-12
  items-center;"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-2">
            <motion.div variants={itemVariants}>
              <span
                className="text-purple-400
  font-mono"
              >
                Hello, I&apos;m
              </span>
              <h1
                className="text-5xl
  md:text-7xl
  font-bold
  text-white
  mt-2"
              >
                Patrick Annang
              </h1>
              <h2
                className="text-2xl
  md:text-3xl
  text-purple-200
  mt-2"
              >
                Front-End Developer
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className=" text-gray-300
  text-lg
  max-w-xl"
            >
              I craft responsive websites where technology meets creativity.
              Building beautiful web experiences with modern technologies.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex
  gap-4"
            >
              <button
                className="px-6
  py-3
  bg-purple-600
  text-white
  rounded-lg
  hover:bg-purple-700
  transition-colors
  flex
  items-center
  gap-2"
                type="button"
              >
                <Code2 size={20} />
                View Projects
              </button>
              <button
                className="px-6
  py-3
  border
  border-purple-400
  text-purple-400
  rounded-lg
  hover:bg-purple-400/10
  transition-colors
  flex
  items-center
  gap-2"
                type="button"
              >
                <ExternalLink size={20} />
                Contact Me
              </button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex
  gap-4
  text-gray-400"
            >
              <Link
                href="#"
                className="hover:text-purple-400 
  transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-400  transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </motion.div>
          </div>
          {/* Right Column - Code Preview */}
          <motion.div
            variants={codeVariants}
            className="hidden
  lg:block
  bg-gray-900/50
  backdrop-blur-sm
  rounded-lg
  border
  border-purple-500/20
  p-6"
          >
            <div
              className=" flex
  items-center
  gap-2
  mb-4"
            >
              <div
                className=" w-3
  h-3
  rounded-full
  bg-red-500"
              />
              <div
                className=" w-3
  h-3
  rounded-full
  bg-yellow-500"
              />
              <div
                className="w-3
  h-3
  rounded-full
  bg-green-500"
              />
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
