"use client";

import { motion } from "framer-motion";
import { skills, technologies } from "@/data";
import { useState } from "react";
import { Spotlight } from "../ui/Spotlight";
import TimeLine from "@/components/TimeLine";

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
	const [activeTab, setActiveTab] = useState("skills");

	return (
		<main className="min-h-screen bg-gradient-to-br">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-26 md:top-10 left-0 md:left-full"
					fill="purple"
				/>
				<Spotlight className="left-72 md:left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>
			<div
				className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
			>
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="relative container mx-auto px-4 pt-28 pb-10">
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
						<h1 id="About-heading" className="heading mb-8 text-center">
							About <span className="text-purple">Me</span>
						</h1>

						<p className="text-lg text-gray-300">
							I&apos;m a passionate software engineer specializing in building
							efficient and scalable
							<span className="text-purple">
								{" "}
								backend systems. Based in Lagos, Nigeria,{" "}
							</span>
							I&apos;m open to relocation and eager to embrace new challenges.
							With a strong enthusiasm for learning new technologies, I
							continually strive to improve and deliver impactful solutions.
						</p>
					</motion.header>

					{/* Navigation Tabs */}
					<motion.nav
						variants={itemVariants}
						className="flex justify-center space-x-4 mb-2"
						role="tablist"
						aria-label="Skills and Technologies"
					>
						<button
							type="button"
							role="tab"
							aria-selected={activeTab === "skills"}
							aria-controls="skills-panel"
							onClick={() => setActiveTab("skills")}
							className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
						>
							<span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span
								className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
              px-7 text-sm font-medium backdrop-blur-3xl gap-2 ${
								activeTab === "skills"
									? "bg-white text-black"
									: "bg-slate-950 text-white"
							}`}
							>
								Skills
							</span>
						</button>
						<button
							type="button"
							role="tab"
							aria-selected={activeTab === "technologies"}
							aria-controls="technologies-panel"
							onClick={() => setActiveTab("technologies")}
							className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
						>
							<span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
							<span
								className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
              px-7 text-sm font-medium backdrop-blur-3xl gap-2 ${
								activeTab === "technologies"
									? "bg-white text-black"
									: "bg-slate-950 text-white"
							}`}
							>
								Technologies
							</span>
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
					<div className="pt-8">
						<TimeLine />
					</div>
				</motion.div>
			</div>
		</main>
	);
}
