"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const codeSnippets = {
  js: `
function Developer() {
  return (
    skills: ["React", "Next.js", "TailwindCSS", "TypeScript", 
              "HTML", "CSS", "JavaScript", "DrizzleORM", "SQL",
              "PostGres"
            ],
    passion: "Building beautiful UIs and websites",
  )
}
console.log(Developer())
`.trim(),

  py: `
from typing import Union


def Developer() -> Union[dict, str]:
    return {
        "skills": ["React", "Next.js", "TailwindCSS",
                   "TypeScript", "HTML", "CSS", 
                   "JavaScript", "DrizzleORM", "SQL", 
                   "PostGres"
                  ],
        "passion": "Building beautiful UIs and websites",
    }


print(Developer())
`.trim(),

  java: `
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] skills = { 
                            "React", "Next.js", "TailwindCSS",
                            "TypeScript", "HTML", "CSS", 
                            "JavaScript", "DrizzleORM", "SQL",
                            "PostGres"
                          };

        String passion = "Building beautiful UIs and websites";
        System.out.println("Skills: " + Arrays.toString(skills));
        System.out.println("Passion: " + passion);
    }
}
`.trim(),
};

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
    y: 1,
    transition: { duration: 0.6, delay: 0.6 },
  },
};

const tabVariants = {
  active: { backgroundColor: "#1F2937", color: "#F3F4F6" },
  inactive: { backgroundColor: "#111827", color: "#9CA3AF" },
};

export function HeroContent() {
  const [activeTab, setActiveTab] = useState<"js" | "py" | "java">("js");
  return (
    <section className="relative flex items-center min-h-[75vh]">
      <div className="container mx-auto px-4 z-10;">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-2">
            <motion.div variants={itemVariants}>
              <span className="text-purple-400 font-mono">Hello, I&apos;m</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mt-2">
                Patrick Annang
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-200 mt-2">
                Front-End Developer
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className=" text-gray-300 text-lg max-w-xl"
            >
              I craft responsive websites where technology meets creativity.
              Building beautiful web experiences with modern technologies.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4">
              <button
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                type="button"
              >
                <Code2 size={20} />
                View Projects
              </button>
              <button
                className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors flex items-center gap-2"
                type="button"
              >
                <ExternalLink size={20} />
                Contact Me
              </button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 text-gray-400"
            >
              <Link
                href="#"
                className="hover:text-purple-400 transition-colors"
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
            initial="hidden"
            animate="visible"
            variants={codeVariants}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-purple-500/20 overflow-hidden"
          >
            <div className="flex justify-between border-b border-gray-700 pr-4">
              <div>
                <motion.button
                  variants={tabVariants}
                  animate={activeTab === "js" ? "active" : "inactive"}
                  onClick={() => setActiveTab("js")}
                  className="px-4 py-2 text-sm font-medium focus:outline-none"
                >
                  JavaScript
                </motion.button>
                <motion.button
                  variants={tabVariants}
                  animate={activeTab === "py" ? "active" : "inactive"}
                  onClick={() => setActiveTab("py")}
                  className="px-4 py-2 text-sm font-medium focus:outline-none"
                >
                  Python
                </motion.button>
                <motion.button
                  variants={tabVariants}
                  animate={activeTab === "java" ? "active" : "inactive"}
                  onClick={() => setActiveTab("java")}
                  className="px-4 py-2 text-sm font-medium focus:outline-none"
                >
                  Java
                </motion.button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6">
              <pre className="font-mono text-sm">
                <code className="text-purple-300">
                  {codeSnippets[activeTab].split("\n").map((line, i) => (
                    <div key={i} className="line">
                      {line}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
