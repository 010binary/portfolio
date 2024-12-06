"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
	return (
		<section id="testimonials" className="py-10 space-y-5">
			<h1 className="heading">
				Kind words from
				<span className="text-purple"> satisfied clients</span>
			</h1>

			<div className="flex flex-col items-center ">
				<div className="h-[50vh] md:h-[25rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
					<InfiniteMovingCards
						items={testimonials}
						direction="right"
						speed="slow"
					/>
				</div>
			</div>
		</section>
	);
};

export default Clients;
