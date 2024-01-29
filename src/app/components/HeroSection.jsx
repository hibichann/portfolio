import React from "react"
import Image from "next/image"

const HeroSection = () => {
	return (
		<div>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='col-span-7 place-self-center'>
					<h1 className='text-white mb-4 text-4xl sm:text-6xl lg:text-6xl text-left font-extrabold'>
						<div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
							Hey, I'm&nbsp;{""}
						</div>
						Hibi
					</h1>
					<p className='text-[#adb7be] mb-6 text-base lg:text-xl'>
						I'm a full-stack developer and I'm passionate about building amazing
						web applications.
					</p>
					<div>
						<button className='px-6 py-3 w-full sm:w-fit sm:h-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-200 via-purple-400 to-pink-500 text-white'>
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
