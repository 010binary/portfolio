"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
	return (
		<main className="max-w-7xl w-full">
			<Hero />
			<Grid />
			<RecentProjects />
			<Clients />
			<Experience />
			<Approach />
		</main>
	);
};

export default Home;
