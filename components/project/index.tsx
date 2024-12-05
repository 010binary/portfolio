"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { project } from "@/public/index";

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

const projects = [
  {
    title: "BuildBot GH",
    description:
      "A web app for buildbot GH to allow users refer prospective customers for a commission.",
    image: project,
    tags: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle",
      "Zod",
      "React Hook Form",
      "React Query",
      "Vercel",
    ],
    liveUrl: "https://buildbotgh.com",
    githubUrl: "https://github.com/amartech/buildbot-gh",
    featured: true,
  },
  {
    title: "VheeWorld Foundation",
    description:
      "A website for VheeWorld Foundation to spread their outreach and also accept donations from potential donors.",
    image: project,
    tags: [
      "Nextjs",
      "typescript",
      "Tailwind CSS",
      "PayStack",
      "Zod",
      "React Hook Form",
      "Vercel",
    ],
    liveUrl: "https://vheeworld.org",
    githubUrl: "https://github.com/amartey-tricky/vhee",
  },
  {
    title: "Mr Ampadu Portfolio",
    description:
      "A porfolio website for Mr. Ampadu, an administrotor of a small business.",
    image: project,
    tags: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://mrampadu.com",
    githubUrl: "https://github.com/amartey-tricky/mr-ampadu",
  },
  {
    title: "Dr Togobo Portfolio",
    description: "A porfolio website for Dr. Togobo, a medical doctor.",
    image: project,
    tags: ["Nextjs", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://ambrosetogobo.com",
    githubUrl: "https://github.com/amartey-tricky/togobo",
  },
];

export function Projects() {
  const [filter, setFilter] = useState("all");

  const filterTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

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
              My Projects
            </h1>
            <p className="text-lg text-gray-300">
              A collection of my recent work, side projects, and open-source
              contributions. Each project represents a unique challenge and
              learning experience.
            </p>
          </motion.header>

          {/* Filter Navigation */}
          <motion.nav
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              type="button"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-purple-600 text-white"
                  : "text-purple-400 hover:bg-purple-600/10"
              }`}
            >
              All Projects
            </button>
            {filterTags.map((tag, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setFilter(tag)}
                aria-pressed={filter === tag}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === tag
                    ? "bg-purple-600 text-white"
                    : "text-purple-400 hover:bg-purple-600/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.nav>

          {/* Projects Grid */}
          <motion.section
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            aria-label="Projects"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <figure className="relative">
                  <Image
                    width={600}
                    height={400}
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-64 object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-purple-600 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium">
                        Featured Project
                      </span>
                    </div>
                  )}
                </figure>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <ul
                    className="flex flex-wrap gap-2 mb-6"
                    aria-label="Technologies used"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <li
                        key={tagIndex}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <footer className="flex gap-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      <span>Live Demo</span>
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      <span>Source Code</span>
                    </Link>
                  </footer>
                </div>
              </motion.article>
            ))}
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
