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
