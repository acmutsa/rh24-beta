import Balancer from "react-wrap-balancer";
import Image from "next/image";
import LetsGetRowdy from "@/components/LetsGetRowdy";

export default function About() {
	return (
		<section className="min-h-screen w-full bg-[#7D9037] relative z-10">
			<div className="max-w-6xl mx-auto pt-48">
				<div className="grid grid-cols-2 gap-y-8">
					<div className="flex flex-col gap-y-6">
						<h1 className="font-oswald font-bold text-6xl text-[#FEF2E6] italic">ABOUT US</h1>
						<p className="text-[#FEF2E6] font-bold text-lg font-mono">
							<Balancer>
								RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA! Students can
								join us to network, code, collaborate, and compete. We welcome hackers from all
								disciplines, backgrounds, & technical levels!
							</Balancer>
						</p>
					</div>
					<div className="relative">
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7D9037] via-transparent  to-[#7D9037] z-20"></div>
						<LetsGetRowdy />
					</div>
					<div>
						<Image
							src="/img/landing/dinos_coding.png"
							height={300}
							width={500}
							alt="Dinosaurs Coding Around A Table"
						></Image>
					</div>
					<div className="flex flex-col justify-center gap-y-6">
						<h1 className="font-oswald font-bold text-6xl text-[#FEF2E6] italic">
							WHO CAN ATTEND?
						</h1>
						<p className="text-[#FEF2E6] font-bold text-lg font-mono">
							<Balancer>
								We're excited to welcome hackers from all disciplines, backgrounds, & technical
								levels! Whether you can't count the number of apps you've built, or you have never
								written a line of code before, RowdyHacks has something for everyone!
							</Balancer>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
