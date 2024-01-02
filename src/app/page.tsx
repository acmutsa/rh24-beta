import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="w-full">
			<Hero />
			<About />
			<Partners />
			<Footer />
		</main>
	);
}
