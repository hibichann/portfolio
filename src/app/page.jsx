import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import About from "./components/About"
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
		<Navbar />
			<div className='container mt-24 mx-auto px-4 py-12'>
				<HeroSection />
				<About/>
			</div>
		</main>
	)
}
