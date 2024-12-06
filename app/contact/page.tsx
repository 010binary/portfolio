"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spotlight } from "@/components/ui/Spotlight";
import * as z from "zod";
import { contactMethods } from "@/data";

// Form Schema
const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	subject: z.string().min(5, "Subject must be at least 5 characters"),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Animation variants
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

export default function Contact() {
	const [formStatus, setFormStatus] = useState({
		type: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		setFormStatus({ type: "", message: "" });

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to send message");
			}

			setFormStatus({
				type: "success",
				message: "Message sent successfully! I'll get back to you soon.",
			});
			reset(); // Reset form
		} catch (error) {
			setFormStatus({
				type: "error",
				message: "Failed to send message. Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="min-h-screen ">
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			{/**
			 *  UI: grid
			 *  change bg color to bg-black-100 and reduce grid color from
			 *  0.2 to 0.03
			 */}
			<div
				className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
			>
				{/* Radial gradient for the container to give a faded look */}
				<div
					// chnage the bg to bg-black-100, so it matches the bg color and will blend in
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="relative container mx-auto px-4 py-28">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-16"
				>
					{/* Hero Section */}
					<motion.header
						variants={itemVariants}
						className="text-center max-w-6xl mx-auto"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Get in <span className="text-purple"> Touch </span>
						</h1>
						<p className="text-lg text-gray-300">
							Have a question or want to work together? I&apos;d love to hear
							from you. Send me a message and I&apos;ll respond as soon as
							possible.
						</p>
					</motion.header>

					{/* Contact Methods */}
					<motion.section
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
						aria-label="Contact methods"
					>
						{contactMethods.map((method, index) => (
							<motion.article
								key={index}
								variants={itemVariants}
								className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center"
							>
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/20 mb-4">
									<method.icon
										className="w-6 h-6 text-purple-400"
										aria-hidden="true"
									/>
								</div>
								<h2 className="text-xl font-medium text-white mb-2">
									{method.title}
								</h2>
								<p className="text-gray-300 mb-4">{method.description}</p>
								<p className="text-purple-400 font-medium">{method.contact}</p>
							</motion.article>
						))}
					</motion.section>

					{/* Contact Form */}
					<motion.section
						variants={containerVariants}
						className="max-w-6xl mx-auto"
						aria-labelledby="contact-form-heading"
					>
						<h2 id="contact-form-heading" className="sr-only">
							Contact Form
						</h2>

						{formStatus.message && (
							<div
								className={`mb-6 p-4 rounded-lg ${
									formStatus.type === "error"
										? "bg-red-900/50 border border-red-700"
										: "bg-green-900/50 border border-green-700"
								}`}
							>
								<p className="text-white">{formStatus.message}</p>
							</div>
						)}

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-lg p-8"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label htmlFor="name" className="text-white">
										Name
									</label>
									<div className="relative">
										<User
											className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
											aria-hidden="true"
										/>
										<input
											{...register("name")}
											type="text"
											id="name"
											className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:outline-none focus:border-purple-500"
											placeholder="John Doe"
										/>
									</div>
									{errors.name && (
										<p className="text-red-400 text-sm mt-1">
											{errors.name.message}
										</p>
									)}
								</div>

								<div className="space-y-2">
									<label htmlFor="email" className="text-white">
										Email
									</label>
									<div className="relative">
										<Mail
											className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
											aria-hidden="true"
										/>
										<input
											{...register("email")}
											type="email"
											id="email"
											className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 p-3 focus:outline-none focus:border-purple-500"
											placeholder="john@example.com"
										/>
									</div>
									{errors.email && (
										<p className="text-red-400 text-sm mt-1">
											{errors.email.message}
										</p>
									)}
								</div>
							</div>

							<div className="space-y-2">
								<label htmlFor="subject" className="text-white">
									Subject
								</label>
								<input
									{...register("subject")}
									type="text"
									id="subject"
									className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:border-purple-500"
									placeholder="How can I help you?"
								/>
								{errors.subject && (
									<p className="text-red-400 text-sm mt-1">
										{errors.subject.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<label htmlFor="message" className="text-white">
									Message
								</label>
								<textarea
									{...register("message")}
									id="message"
									rows={6}
									className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:border-purple-500"
									placeholder="Your message here..."
								/>
								{errors.message && (
									<p className="text-red-400 text-sm mt-1">
										{errors.message.message}
									</p>
								)}
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>Processing...</>
								) : (
									<>
										Send Message
										<Send className="w-5 h-5" aria-hidden="true" />
									</>
								)}
							</button>
						</form>
					</motion.section>
				</motion.div>
			</div>
		</main>
	);
}
