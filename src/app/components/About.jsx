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
						width={ 300 }
						height={ 300 }
						alt='CSS'></Image>
				</div>
				<div>
					<h2 className="text-4xl font-bold mb-4">About me</h2>
					<p>
						全职前端开发者，致力于创造用户友好的UI界面，并提供丝滑的浏览体验。
					</p>
					<p>
						使用Vue/React构建现代化的网站。
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
