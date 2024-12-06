import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Link from "next/link";
import MagicButton from "./MagicButton";

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10 relative" id="contact">
			{/* background grid */}
			<div className="absolute inset-0 overflow-hidden">
				<Image
					src="/footer-grid.svg"
					alt="grid"
					fill
					className="object-cover opacity-50"
				/>
			</div>

			<div className="relative z-10 flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw] text-center">
					Ready to take <span className="text-purple">your</span> digital
					presence to the next level?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to me today and let&apos;s discuss how I can help you
					achieve your goals.
				</p>
				<Link href="mailto:asogwaaugustineemeka@gmail.com">
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</Link>
			</div>
			<div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © {new Date().getFullYear()} Asogwa Augustine Chukwuemeka
				</p>

				<div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
					{socialMedia.map((info) => (
						<div
							key={info.id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<Link href={info.href}>
								<Image src={info.img} alt={info.img} width={20} height={20} />
							</Link>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
