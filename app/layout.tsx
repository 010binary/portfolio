import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Augustine's Portfolio",
	description: "Minimal",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.png" sizes="any" />
			</head>
			<body
				className={`${inter.className} relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<FloatingNav navItems={navItems} />
					<div>
						<Spotlight
							className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
							fill="white"
						/>
						<Spotlight
							className="h-[80vh] w-[50vw] top-26 md:top-10 left-0 md:left-full"
							fill="purple"
						/>
						<Spotlight
							className="left-72 md:left-80 top-28 h-[80vh] w-[50vw]"
							fill="blue"
						/>
					</div>

					<div
						className="h-screen -z-10 w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
					>
						<div
							className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
						/>
					</div>

					{children}
					<Footer />
				</ThemeProvider>
			</body>
			<Analytics />
			<SpeedInsights />
		</html>
	);
}
