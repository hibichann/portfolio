import React from "react"
import Image from "next/image"
const About = () => {
	return (
		<section className='text-white'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center p-8 xl:gap-16 sm:p-4'>
				<div className='hidden sm:block'>
					<Image
						className='place-self-center'
						src='/images/about.jpg'
						width={300}
						height={300}
						alt='CSS'></Image>
				</div>
				<div>
					<h2>About me</h2>
					<p>
						I am I am I am I am I am I am I am I am I am I am I am I am I am I
						am I am I am I am I am I am I am I am I am I am I am I am I am I am
						I am I am I am I am I am I am I am I am I am I am I am I am I am I
						am I am I am I am I am I am I am I am
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
