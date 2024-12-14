"use client";

import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
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

export default function RecentProjects() {
	return (
		<section className="py-10 pt-20">
			<div className="container px-4 mx-auto space-y-16">
				<h2 id="Project-heading" className="heading text-center">
					A small selection of{" "}
					<span className="text-purple">recent projects</span>
				</h2>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							variants={itemVariants}
							className="group relative bg-[#13162D] rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
						>
							{/* Project Image */}
							<div className="relative h-[240px] mb-8 rounded-2xl overflow-hidden bg-black/50">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
								/>
							</div>

							{/* Project Info */}
							<div className="space-y-4">
								<h3 className="text-xl font-semibold text-white/90 line-clamp-1">
									{project.title}
								</h3>
								<p className="text-gray-400 line-clamp-3 min-h-[48px]">
									{project.description}
								</p>

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
													className="w-5 h-5 object-contain"
												/>
											</div>
										))}
									</div>
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target="_blank"
											className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
										>
											<span>Code</span>
											<Github className="w-4 h-4" />
										</a>
									)}

									<a
										href={project.liveUrl}
										target="_blank"
										className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
									>
										<span>Live</span>
										<ExternalLink className="w-4 h-4" />
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
