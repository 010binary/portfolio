"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectArr } from "@/data";

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
	const [filter, setFilter] = useState("all");

	const filterTags = useMemo(() => {
		const tags = new Set<string>();
		projectArr.forEach((project) => {
			project.technologies.forEach((tech) => tags.add(tech.name));
		});
		return Array.from(tags);
	}, []);

	const filteredProjects = useMemo(() => {
		return filter === "all"
			? projectArr
			: projectArr.filter((project) =>
					project.technologies.some((tech) => tech.name === filter),
				);
	}, [filter]);

	return (
		<main className="min-h-screen">
			<div className="relative container mx-auto px-4 py-28">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-10"
				>
					{/* Hero Section */}
					<motion.header
						variants={itemVariants}
						className="text-center max-w-3xl mx-auto"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							My <span className="text-purple">Projects</span>
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
							className={`px-4 py-2 border border-white-200 rounded-lg transition-colors ${
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
								className={`px-4 py-2 border border-white-200 rounded-lg transition-colors ${
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
								className={`bg-gray-800/50 group backdrop-blur-sm rounded-2xl overflow-hidden p-6 ${
									project.featured ? "md:col-span-2" : ""
								}`}
							>
								<figure className="relative">
									<Image
										width={600}
										height={400}
										src={project.image}
										alt={`Screenshot of ${project.title}`}
										className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
									/>
									{project.featured && (
										<div className="absolute top-4 right-4 flex items-center gap-2 bg-purple-600 px-3 py-1 rounded-full">
											<Star
												className="w-4 h-4 text-yellow-400 fill-yellow-400"
												aria-hidden="true"
											/>
											<span className="text-sm font-medium">
												Featured Project
											</span>
										</div>
									)}
								</figure>
								<div className="py-6">
									<h2 className="text-xl font-bold text-white mb-2">
										{project.title}
									</h2>
									<p className="text-gray-300 mb-4">{project.description}</p>
									{/* Technologies and Live Link */}
									<div className="flex items-center justify-between pt-4">
										<div className="flex -space-x-2">
											{project.technologies.map((tech, index) => (
												<div
													key={index}
													className="w-8 h-8 rounded-full border border-white/10 bg-black/50 flex items-center justify-center backdrop-blur-sm"
													title={tech.name}
												>
													<Image
														src={tech.icon}
														alt={tech.name}
														width={20}
														height={20}
														className="w-5 h-5 lg:w-7 lg:h-7 object-contain"
													/>
												</div>
											))}
										</div>
										{project.githubUrl && (
											<Link
												href={project.githubUrl}
												target="_blank"
												className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
											>
												<span className="lg:text-lg">Code</span>
												<Github className="w-4 h-4 lg:w-6 lg:h-6" />
											</Link>
										)}

										<Link
											href={project.liveUrl}
											target="_blank"
											className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
										>
											<span className="lg:text-lg">Live</span>
											<ExternalLink className="w-4 h-4 lg:w-6 lg:h-6" />
										</Link>
									</div>
								</div>
							</motion.article>
						))}
					</motion.section>
				</motion.div>
			</div>
		</main>
	);
}
