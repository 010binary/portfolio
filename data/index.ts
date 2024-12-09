import {
	Brain,
	Code2,
	Coffee,
	GitBranch,
	Server,
	Terminal,
	Zap,
	Mail,
	MessageSquare,
	Phone,
	Linkedin,
	Twitter,
	Database,
} from "lucide-react";
import { project } from "@/public/index";

export const navItems = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Projects", link: "/projects" },
	{ name: "Contact", link: "/contact" },
];

export interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: {
		name: string;
		icon: string;
	}[];
	liveUrl: string;
}

export const projectArr = [
	{
		title: "BuildBot GH",
		description:
			"A web app for buildbot GH to allow users refer prospective customers for a commission.",
		image: project,
		tags: ["Nextjs", "TypeScript", "Tailwind CSS", "PostgreSQL"],
		liveUrl: "https://buildbotgh.com",
		githubUrl: "https://github.com/amartech/buildbot-gh",
		featured: true,
	},
	{
		title: "VheeWorld Foundation",
		description:
			"A website for VheeWorld Foundation to spread their outreach and also accept donations from potential donors.",
		image: project,
		tags: ["Nextjs", "TypeScript", "Tailwind CSS"],
		liveUrl: "https://vheeworld.org",
		githubUrl: "https://github.com/amartey-tricky/vhee",
		featured: true,
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

export const projects: Project[] = [
	{
		id: 1,
		title: "3D Solar System Planets to Explore",
		description:
			"Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
		image: "/p1.svg",
		technologies: [
			{ name: "React", icon: "/re.svg" },
			{ name: "Tailwind", icon: "/tail.svg" },
			{ name: "TypeScript", icon: "/ts.svg" },
			{ name: "Three.js", icon: "/three.svg" },
			{ name: "Framer Motion", icon: "/fm.svg" },
		],
		liveUrl: "/ui.earth.com",
	},
	{
		id: 2,
		title: "Yoom - Video Conferencing App",
		description:
			"Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
		image: "/p2.svg",
		technologies: [
			{ name: "Next.js", icon: "/next.svg" },
			{ name: "Tailwind", icon: "/tail.svg" },
			{ name: "TypeScript", icon: "/ts.svg" },
			{ name: "WebRTC", icon: "/stream.svg" },
			{ name: "Cloudflare", icon: "/c.svg" },
		],
		liveUrl: "/ui.yoom.com",
	},
	{
		id: 3,
		title: "AI Image SaaS - Canva Application",
		description:
			"A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
		image: "/p3.svg",
		technologies: [
			{ name: "React", icon: "/re.svg" },
			{ name: "Tailwind", icon: "/tail.svg" },
			{ name: "TypeScript", icon: "/ts.svg" },
			{ name: "Three.js", icon: "/three.svg" },
			{ name: "Cloudflare", icon: "/c.svg" },
		],
		liveUrl: "/ui.aiimg.com",
	},
	{
		id: 4,
		title: "Animated Apple iPhone 3D Website",
		description:
			"Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
		image: "/p4.svg",
		technologies: [
			{ name: "Next.js", icon: "/next.svg" },
			{ name: "Tailwind", icon: "/tail.svg" },
			{ name: "TypeScript", icon: "/ts.svg" },
			{ name: "Three.js", icon: "/three.svg" },
			{ name: "GSAP", icon: "/gsap.svg" },
		],
		liveUrl: "/ui.apple.com",
	},
];

export const testimonials = [
	{
		quote:
			"I had the pleasure of working alongside Augustine Chukwuemeka at Foremedia (https://foremediagroup.com/). He is a very talented software engineer. Augustine has consistently demonstrated his passion and exceptional ability to solve complex problems and deliver high-quality solutions which will make him an invaluable asset to any team. I highly recommend him for any challenging development projects!",
		name: "Nsikak Ekpo mMBA",
		title: "Manager at ForeMedia Group UK Limited",
		social: Linkedin,
		profile: "/1716149761570.jpeg",
	},
	{
		quote:
			"I had the pleasure of working with Augustine, and he stands out as an exceptional problem solver who approaches challenges with creativity and precision. He’s highly time-conscious, consistently delivering quality work within deadlines. What truly sets Augustine apart is his passion for software development, his enthusiasm drives him to continually teach and learn from his teammates, making him a proactive and invaluable team player.",
		name: "Aslam Dhikrullahi",
		title: " Graphic designer / Co-Founder of Adtec Innovation Studios",
		social: Linkedin,
		profile: "/1690870466399.jpeg",
	},
	{
		quote:
			"Collaborating with Augustine was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Augustine's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Augustine is the ideal partner.",
		name: "Ivivid",
		title: "CEO of Topline Trading",
		social: Twitter,
		profile: "/1234557454.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		href: "https://github.com/010binary",
	},
	{
		id: 2,
		img: "/twit.svg",
		href: "https://x.com/August13200296",
	},
	{
		id: 3,
		img: "/link.svg",
		href: "https://www.linkedin.com/in/alpha-augustine/",
	},
];

export const codeSnippets = {
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

	// this is the Java part
	// 	java: `
	// import java.util.Arrays;

	// public class Main {
	//     public static void main(String[] args) {
	//         String[] skills = {
	//                             "React", "Next.js", "TailwindCSS",
	//                             "TypeScript", "HTML", "CSS",
	//                             "JavaScript", "DrizzleORM", "SQL",
	//                             "PostGres"
	//                           };

	//         String passion = "Building beautiful UIs and websites";
	//         System.out.println("Skills: " + Arrays.toString(skills));
	//         System.out.println("Passion: " + passion);
	//     }
	// }
	// `.trim(),
};

export const skills = [
	{
		name: "Backend Development",
		icon: Code2,
		description: "Building scalable and reliable server-side applications",
	},
	{
		name: "Database Management",
		icon: Database,
		description:
			"Efficiently managing and optimizing relational and NoSQL databases.",
	},
	{
		name: "API Development",
		icon: Server,
		description: "Designing and implementing RESTful and GraphQL APIs",
	},
	{
		name: "Problem Solving",
		icon: Brain,
		description: "Finding elegant solutions to complex problems",
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

export const technologies = [
	{
		category: "Languages",
		items: ["JavaScript", "TypeScript", "Python"],
	},
	{
		category: "Frameworks",
		items: [
			"Django",
			"ExpressJs",
			"FastAPI",
			"Apollo",
			"NextJs",
			"Flask",
			"websocket",
		],
	},
	{
		category: "Databases",
		items: ["MySQL", "SQLite", "Redis", "PostgreSQL", "MongoDB", "SupaBase"],
	},
	{
		category: "Testing",
		items: [
			"Postman",
			"insomnia",
			"pytest",
			"Jest",
			"unittest",
			"mocha and chia",
		],
	},
	{
		category: "Version Control",
		items: ["Git", "Github", "Gitlab"],
	},
	{
		category: "Deployment",
		items: [
			"cPanel",
			"VPS",
			"Render",
			"Aws",
			"Vercel",
			"DigitalOcean",
			"PythonAnywhere",
		],
	},
	{
		category: "Application monitoring",
		items: ["Datadog", "Sentry", "Prometheus"],
	},
	{
		category: "Other Tools",
		items: ["Docker", "BASH", "Kafka", "RabbitMq", "Celery", "Github Actions"],
	},
];

export const contactMethods = [
	{
		icon: Phone,
		title: "Call me",
		description: "Mon-Fri from 8am to 6pm.",
		contact: "+234 811 341 7474",
		href: "tel:+234 811 341 7474",
	},
	{
		icon: Mail,
		title: "Email me",
		description: "I'll respond within 24 hours.",
		contact: "Asogwaaugustineemeka@gmail.com",
		href: "mailto:Asogwaaugustineemeka@gmail.com",
	},
	{
		icon: MessageSquare,
		title: "Message me",
		description: "Let's connect on Twitter.",
		contact: "@August13200296",
		href: "https://x.com/August13200296",
	},
];

export const experiences = [
	{
		title: "Backend Developer (Contract)",
		company: "Fuziondot",
		date: "Sep 2024 – Nov 2024",
		location: "Remote, UK",
		description:
			"Designed and developed a real-time data gathering system using Puppeteer, Node.js, and Socket.io, enabling seamless scraping and delivery of validated data. Optimized performance with MongoDB Clusters and containerized backend services using Docker, and integrated an AI-powered chat system leveraging ChatGPT to improve user engagement.",
	},
	{
		title: "Backend Developer",
		company: "ForeMedia Group UK Limited",
		date: "May 2024 – Oct 2024",
		location: "Lagos, Nigeria",
		description:
			"Collaborated with a cross-functional team to build a streaming service for African entertainment, developing RESTful APIs with Node.js and Express and integrating Supabase for data management. Implemented video processing pipelines using Python and Django-ninja, and optimized front-end performance with Next.js using SSR and SSG. Established automated testing and CI/CD pipelines to ensure code quality and efficient deployments.",
	},
	{
		title: "Backend Developer",
		company: "Asque Africa",
		date: "Sep 2023 – Aug 2024",
		location: "Lagos, Nigeria",
		description:
			"Developed a community-driven digital publishing and marketplace platform, connecting African creatives globally. Used NestJS and Node.js with MongoDB for the backend and React.js with Redux for a responsive front-end experience. Implemented a scalable microservices architecture using Docker, enabling efficient deployment and scaling of features like listing and selling African-themed literature and artwork.",
	},
	{
		title: "Backend Developer",
		company: "Adtec Innovation Studios",
		date: "Aug 2023 – Mar 2024",
		location: "Lagos, Nigeria",
		description:
			"Led the development of an internal tool to automate critical business processes, including order management, invoicing, and inventory tracking. Built the backend using Django and MySQL, leveraging Django ORM for efficient database operations. Designed modular RESTful APIs with Django REST Framework and implemented unit and integration tests, achieving a 40% improvement in operational efficiency. Set up CI/CD pipelines with GitHub Actions for streamlined deployment.",
	},
];
