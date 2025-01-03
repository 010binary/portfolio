"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileBadge } from "lucide-react";
import { useState } from "react";
import MagicButton from "../MagicButton";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { codeSnippets } from "@/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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
  // const [activeTab, setActiveTab] = useState<"js" | "py">("js");
  return (
    <section className="relative flex items-center min-h-[75vh] mb-10 lg:mb-0">
      <div className="container mx-auto px-4 z-10;">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-4 pt-4 lg:pt-0 flex justify-center items-center flex-col lg:block text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <span className="text-purple-400 font-mono">Hello, I&apos;m</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mt-2">
                Augustine Chukwuemeka
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-200 mt-2">
                Software Engineer
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className=" text-gray-300 text-lg max-w-xl text-justify"
            >
              I&apos;m a passionate software engineer specializing in building
              efficient and scalable
              <span className="text-purple">
                {" "}
                backend systems. Based in Lagos, Nigeria,{" "}
              </span>
              I&apos;m open to relocation and eager to embrace new challenges.
              With a strong enthusiasm for learning new technologies, I
              continually strive to improve and deliver impactful solutions.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <Link
                href="https://drive.google.com/file/d/1kUMhn65dD3NWAzMnfJnxWX0KtykOTvAd/view?usp=sharing"
                target="_blank"
              >
                <MagicButton
                  title="My Resume"
                  icon={<FileBadge size={20} />}
                  position="right"
                />
              </Link>
              <Link href="mailto:asogwaaugustineemeka@gmail.com">
                <MagicButton
                  title="Contact Me"
                  icon={<ExternalLink size={20} />}
                  position="right"
                />
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between md:justify-normal gap-4"
            >
              {socialMedia.map((info) => (
                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Link href={info.href}>
                    <Image
                      src={info.img}
                      alt={info.img}
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              ))}
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
                  animate={activeTab === "java" ? "active" : "inactive"}
                  onClick={() => setActiveTab("java")}
                  className="px-4 py-2 text-sm font-medium focus:outline-none"
                >
                  Java
                </motion.button>
                <motion.button
                  variants={tabVariants}
                  animate={activeTab === "py" ? "active" : "inactive"}
                  onClick={() => setActiveTab("py")}
                  className="px-4 py-2 text-sm font-medium focus:outline-none"
                >
                  Python
                </motion.button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6 overflow-x-scroll lg:overflow-x-hidden">
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
