"use client"
import React from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
const HeroSection = () => {
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='col-span-7 place-self-center'>
					<h1 className='text-white mb-4 text-4xl sm:text-6xl lg:text-6xl text-left font-extrabold'>
						<div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400'>
							Hey, I'm
						</div>
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								"Hibi",
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								"Web Developer",
								1000,
								"Coder",
								1000,
								"Frontend Engineer",
								1000,
							]}
							wrapper='span'
							speed={30}
							repeat={Infinity}
						/>
					</h1>
					<p className='text-[#adb7be] mb-6 text-base lg:text-xl'>
						A full-time frontend developer dedicated to creating user-friendly
						UI interfaces and delivering a smooth browsing experience.
					</p>
					<div>
						<button className='px-6 py-3 w-full sm:w-fit sm:h-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-700 to-cyan-400 text-white'>
							Contact Me
						</button>
						<button className='px-6 py-3 w-full sm:w-fit sm:h-fit rounded-full mr-4 bg-translate border-2 border-white text-white'>
							Resume
						</button>
					</div>
				</div>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full bg-[#222222] w-64 h-64'>
						<Image
							className='m-0 rounded-full'
							src='/images/avatar.png'
							width={300}
							height={300}
							alt='avatar'></Image>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
