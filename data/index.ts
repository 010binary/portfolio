import {
	Brain,
	Code2,
	Coffee,
	Cpu,
	GitBranch,
	Palette,
	Terminal,
	Zap,
	Mail, MessageSquare, Phone,
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
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
	},
	{
		quote:
			"Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
		name: "Michael Johnson",
		title: "Director of AlphaStream Technologies",
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

export const skills = [
	{
		name: "Backend Development",
		icon: Code2,
		description: "Building responsive and interactive user interfaces",
	},
	{
		name: "UI/UX Design",
		icon: Palette,
		description: "Creating intuitive and beautiful user experiences",
	},
	{
		name: "Problem Solving",
		icon: Brain,
		description: "Finding elegant solutions to complex problems",
	},
	{
		name: "Technical Architecture",
		icon: Cpu,
		description: "Designing scalable application structures",
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
		category: "Frontend",
		items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "StoryBook"],
	},
	{
		category: "Mobile",
		items: ["React Native", "Expo"],
	},
	{
		category: "State Management",
		items: ["Zustand", "React Query"],
	},
	{
		category: "Testing",
		items: ["Jest"],
	},
	{
		category: "Tools",
		items: ["VS Code", "Git", "Docker", "Webpack", "NeoVim"],
	},
];


export const contactMethods = [
	{
		icon: Phone,
		title: "Call me",
		description: "Mon-Fri from 8am to 6pm.",
		contact: "+234 811 341 7474",
	},
	{
		icon: Mail,
		title: "Email me",
		description: "I'll respond within 24 hours.",
		contact: "Asogwaaugustineemeka@gmail.com",
	},
	{
		icon: MessageSquare,
		title: "Message me",
		description: "Let's connect on Twitter.",
		contact: "@August13200296",
	},
];