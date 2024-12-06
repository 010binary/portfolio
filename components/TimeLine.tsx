import { motion } from "framer-motion";

interface ExperienceItem {
	title: string;
	date: string;
	description: string;
}

interface TimeLineProps {
	experiences: ExperienceItem[];
}

const experiences = [
	{
		title: "Frontend Developer",
		date: "2022 - Present",
		description:
			"Developed and maintained multiple React applications, implemented responsive designs, and collaborated with UX designers to create intuitive user interfaces.",
	},
	{
		title: "Junior Developer",
		date: "2020 - 2022",
		description:
			"Started my journey in web development, working on various projects and learning fundamental technologies and best practices.",
	},
	{
		title: "Intern",
		date: "2019 - 2020",
		description:
			"Gained hands-on experience in web development, assisting senior developers in various projects and learning industry standards.",
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

const TimeLine = () => {
	return (
		<motion.section
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="mx-auto"
			aria-labelledby="timeline-heading"
		>
			<h2 id="timeline-heading" className="heading mb-4 text-center">
				<span className="text-purple">Experience</span> Timeline
			</h2>

			<ol className="space-y-8">
				{experiences.map((experience, index) => (
					<motion.li
						key={index}
						variants={itemVariants}
						className="relative pl-8 border-l-2 border-purple-600"
					>
						<div
							className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"
							aria-hidden="true"
						/>
						<article>
							<h3 className="text-lg font-medium text-white">
								{experience.title}
							</h3>
							<time className="text-purple-400">{experience.date}</time>
							<p className="text-gray-300 mt-2">{experience.description}</p>
						</article>
					</motion.li>
				))}
			</ol>
		</motion.section>
	);
};

export default TimeLine;
