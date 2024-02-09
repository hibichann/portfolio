import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-bg0 bg-fixed bg-cover'>
			<Navbar />
			{/* <div style={{ width: "100vw", height: "100vh" }}></div> */}
			<div className='backdrop-brightness-50 w-full h-full'>
				<div className='container mt-24 mx-auto px-4 py-12 z-10'>
					<HeroSection />
					<About />
				</div>
			</div>
		</main>
	)
}
