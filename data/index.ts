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
	githubUrl?: string;
}

export const projectArr = [
	{
		title: "Topline Trading",
		description:
			"Topline Trading is a leading provider of funds and equity for talented traders to expand their trading portfolios.",
		image: "/tt.png",
		technologies: [
			{ name: "Next.js", icon: "/tools/build/next.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "TypeScript", icon: "/tools/build/ts.svg" },
			{ name: "PostgreSql", icon: "/tools/pgsql.svg" },
			{ name: "Docker", icon: "/tools/dock.svg" },
			{ name: "Sentry", icon: "/tools/sentry.svg" },
		],
		liveUrl: "https://toplinetrading.co/",
		featured: true,
	},
	{
		title: "Let's Vote - Secure Voting",
		description:
			"A Saas application that allows organizations and individuals to create competition and ensure a secure voting process.",
		image: "/p3.png",
		technologies: [
			{ name: "HTML", icon: "/tools/build/html.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "JavaScript", icon: "/tools/build/js.svg" },
			{ name: "Python", icon: "/tools/build/pyn.svg" },
			{ name: "Django", icon: "/tools/build/dj.svg" },
		],
		liveUrl: "https://augustine1234.pythonanywhere.com/",
		githubUrl: "https://github.com/010binary/Alx-Portfoilo-Project",
		featured: true,
	},
	{
		title: "Let's Vote - Secure Voting",
		description:
			"A Saas application that allows organizations and individuals to create competition and ensure a secure voting process.",
		image: "/p3.png",
		technologies: [
			{ name: "HTML", icon: "/tools/build/html.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "JavaScript", icon: "/tools/build/js.svg" },
			{ name: "Python", icon: "/tools/build/pyn.svg" },
			{ name: "Django", icon: "/tools/build/dj.svg" },
		],
		liveUrl: "https://augustine1234.pythonanywhere.com/",
		githubUrl: "https://github.com/010binary/Alx-Portfoilo-Project",
	},
	{
		title: "Let's Vote - Secure Voting",
		description:
			"A Saas application that allows organizations and individuals to create competition and ensure a secure voting process.",
		image: "/p3.png",
		technologies: [
			{ name: "HTML", icon: "/tools/build/html.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "JavaScript", icon: "/tools/build/js.svg" },
			{ name: "Python", icon: "/tools/build/pyn.svg" },
			{ name: "Django", icon: "/tools/build/dj.svg" },
		],
		liveUrl: "https://augustine1234.pythonanywhere.com/",
		githubUrl: "https://github.com/010binary/Alx-Portfoilo-Project",
	},
	{
		title: "Let's Vote - Secure Voting",
		description:
			"A Saas application that allows organizations and individuals to create competition and ensure a secure voting process.",
		image: "/p3.png",
		technologies: [
			{ name: "HTML", icon: "/tools/build/html.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "JavaScript", icon: "/tools/build/js.svg" },
			{ name: "Python", icon: "/tools/build/pyn.svg" },
			{ name: "Django", icon: "/tools/build/dj.svg" },
		],
		liveUrl: "https://augustine1234.pythonanywhere.com/",
		githubUrl: "https://github.com/010binary/Alx-Portfoilo-Project",
	},
];

export const projects: Project[] = [
	{
		id: 1,
		title: "Topline Trading",
		description:
			"Topline Trading is a leading provider of funds and equity for talented traders to expand their trading portfolios.",
		image: "/tt.png",
		technologies: [
			{ name: "Next.js", icon: "/tools/build/next.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "TypeScript", icon: "/tools/build/ts.svg" },
			{ name: "PostgreSql", icon: "/tools/pgsql.svg" },
			{ name: "Docker", icon: "/tools/dock.svg" },
			{ name: "Sentry", icon: "/tools/sentry.svg" },
		],
		liveUrl: "https://toplinetrading.co/",
	},
	{
		id: 2,
		title: "Let's Vote - Secure Voting",
		description:
			"A Saas application that allows organizations and individuals to create competition and ensure a secure voting process.",
		image: "/p3.png",
		technologies: [
			{ name: "HTML", icon: "/tools/build/html.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "JavaScript", icon: "/tools/build/js.svg" },
			{ name: "Python", icon: "/tools/build/pyn.svg" },
			{ name: "Django", icon: "/tools/build/dj.svg" },
		],
		liveUrl: "https://augustine1234.pythonanywhere.com/",
		githubUrl: "https://github.com/010binary/Alx-Portfoilo-Project",
	},
	{
		id: 3,
		title: "Topline Trading",
		description:
			"Topline Trading is a leading provider of funds and equity for talented traders to expand their trading portfolios.",
		image: "/tt.png",
		technologies: [
			{ name: "Next.js", icon: "/tools/build/next.svg" },
			{ name: "HTML", icon: "/tools/build/html.svg" },
			{ name: "Tailwind", icon: "/tools/build/tail.svg" },
			{ name: "JavaScript", icon: "/tools/build/js.svg" },
			{ name: "Python", icon: "/tools/build/pyn.svg" },
			{ name: "Django", icon: "/tools/build/dj.svg" },
		],
		liveUrl: "https://toplinetrading.co/",
	},

];

export const testimonials = [
	{
		quote:
			"I had the pleasure of working alongside Augustine Chukwuemeka at Foremedia (https://foremediagroup.com/). He is a very talented software engineer. Augustine has consistently demonstrated his passion and exceptional ability to solve complex problems and deliver high-quality solutions which will make him an invaluable asset to any team. I highly recommend him for any challenging development projects!",
		name: "Nsikak Ekpo mMBA",
		title: "Manager at ForeMedia Group UK Limited",
		social: Linkedin,
		profile: "/testimonials/1716149761570.jpeg",
	},
	{
		quote:
			"I had the pleasure of working with Augustine, and he stands out as an exceptional problem solver who approaches challenges with creativity and precision. He’s highly time-conscious, consistently delivering quality work within deadlines. What truly sets Augustine apart is his passion for software development, his enthusiasm drives him to continually teach and learn from his teammates, making him a proactive and invaluable team player.",
		name: "Aslam Dhikrullahi",
		title: " Graphic designer / Co-Founder of Adtec Innovation Studios",
		social: Linkedin,
		profile: "/testimonials/1690870466399.jpeg",
	},
	{
		quote:
			"Collaborating with Augustine was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Augustine's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Augustine is the ideal partner.",
		name: "Ivivid",
		title: "CEO of Topline Trading Limited",
		social: Twitter,
		profile: "/testimonials/1234557454.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/socials/git.svg",
		href: "https://github.com/010binary",
	},
	{
		id: 2,
		img: "/socials/twit.svg",
		href: "https://x.com/August13200296",
	},
	{
		id: 3,
		img: "/socials/link.svg",
		href: "https://www.linkedin.com/in/alpha-augustine/",
	},
	{
		id: 4,
		img: "/socials/what.svg",
		href: "https://wa.link/8fojb2",
	},
];

export const codeSnippets = {
	js: `
function Developer() {
  return (
    skills: [ "TypeScript", "NestJs", "ExpressJs",
              "NextJs", "MongoDb", "PostgreSql",
              "React", "GraphQL", "Docker",
			  "Jest", "Mocha", "Chai"
            ],
    passion: "Building reliable applications",
  )
}
console.log(Developer())
`.trim(),

	py: `
from typing import Union


def Developer() -> Union[dict, str]:
    return {
        "skills": [ "Django", "Flask", "FastAPI", 
				    "MySql", "PostgreSQL", "MongoDB",
				    "Redis", "GraphQL", "Docker",
				    "RabbitMq", "Celery", "Pytest"
                  ],
        "passion": "Building reliable applications",
    }


print(Developer())
`.trim(),

	java: `
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {

	    String[] skills = {
	        "Spring", "Springboot", "Spring cloud",
			"Hibernate", "JDBC", "Spring Boot Actuator",
	        "DrizzleORM", "SQL", "PostGres"
	        };
	    String passion = "Building reliable applications";

		System.out.println(Arrays.toString(skills));
	    System.out.println("Passion: " + passion)
	}
}
	 `.trim(),
};

export const skills = [
	{
		name: "Application Development",
		icon: Code2,
		description: "Writing, Testing and Debugging of application code.",
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
		items: ["JavaScript", "TypeScript", "Python", "Java"],
	},
	{
		category: "Frameworks",
		items: ["React", "NextJs", "ExpressJs", "Apollo", "NestJs", "Spring Framework"],
	},
	{
		category: "Databases",
		items: ["MySQL", "SQLite", "Redis", "PostgreSQL", "MongoDB"],
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
		items: ["Grafana", "Prometheus", "Sentry"],
	},
	{
		category: "Other Tools",
		items: ["Docker", "BASH", "RabbitMq", "Github Actions"],
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
		title: "Software Engineer (Contract)",
		company: "Fuziondot",
		date: "Oct 2024 – Dec 2024",
		location: "Remote, UK",
		description:
			"Designed and developed a real-time data gathering system using Puppeteer, Node.js, and Socket.io, enabling seamless scraping and delivery of validated data. Optimized performance with MongoDB Clusters and containerized backend services using Docker, and integrated an AI-powered chat system leveraging ChatGPT to improve user engagement.",
	},
	{
		title: "Software Engineer",
		company: "ForeMedia Group UK Limited",
		date: "Apr 2024 – Oct 2024",
		location: "Lagos, Nigeria",
		description:
			"Collaborated with a cross-functional team to build a streaming service for African entertainment, developing RESTful APIs with Node.js and Express and integrating Supabase for data management. Implemented video processing pipelines using Python and Django-ninja, and optimized front-end performance with Next.js using SSR and SSG. Established automated testing and CI/CD pipelines to ensure code quality and efficient deployments.",
	},
	{
		title: "Software Engineer",
		company: "Asque Africa",
		date: "Aug 2023 – Aug 2024",
		location: "Lagos, Nigeria",
		description:
			"Developed a community-driven digital publishing and marketplace platform, connecting African creatives globally. Used NestJS and Node.js with MongoDB for the backend and React.js with Redux for a responsive front-end experience. Implemented a scalable microservices architecture using Docker, enabling efficient deployment and scaling of features like listing and selling African-themed literature and artwork.",
	},
	{
		title: "Software Engineer",
		company: "Adtec Innovation Studios",
		date: "Sept 2022 – May 2023",
		location: "Lagos, Nigeria",
		description:
			"Led the development of an internal tool to automate critical business processes, including order management, invoicing, and inventory tracking. Built the backend using Django and MySQL, leveraging Django ORM for efficient database operations. Designed modular RESTful APIs with Django REST Framework and implemented unit and integration tests, achieving a 40% improvement in operational efficiency. Set up CI/CD pipelines with GitHub Actions for streamlined deployment.",
	},
];
