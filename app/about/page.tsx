"use client";

import { About } from "@/components/abouts";
import Approach from "@/components/Approach";

export default function Page() {
	return (
		<>
			<main className="max-w-7xl w-full">
				<About />
				<Approach />
			</main>
		</>
	);
}
