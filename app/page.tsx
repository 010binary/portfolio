"use client";

import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import TimeLine from "@/components/TimeLine";

const Home = () => {
	return (
		<main className="max-w-7xl w-full">
			<Hero />
			<TimeLine />
			<RecentProjects />
			<Clients />
			<Approach />
		</main>
	);
};

export default Home;
