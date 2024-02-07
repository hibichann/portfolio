"use client"
import React, { useState } from "react"
import Image from "next/image"
const About = () => {
	let data = [
		{
			title: "简介",
			content: `全职前端开发者，致力于创造用户友好的UI界面，并提供丝滑的浏览体验。使用Vue2/Vue3/React构建现代化的网站。

			熟练掌握 HTML、CSS、LESS、SCSS等基础内容
			熟练掌握 JavaScript、TypeScript 语言
			熟练掌握 Vue2、Vue3、VueRouter、Vuex 等Vue技术栈，熟悉Vue3新特性
			熟练掌握 React、ReactHooks、Redux 等React技术栈
			熟练掌握 E-charts 图表组件开发，客制化图表样式
			熟练掌握 ElementUI、ElementPlus、Ant Design 等桌面端UI框架使用
			熟练掌握 VantUI 等移动端UI框架与H5开发`,
		},
		{
			title: "经历",
			content: `* 中国联通手机营业厅 流量策略分发系统
			* 医疗不良（安全）事件系统
			* 中国联通手机营业厅-老用户专区（移动端）
			* 青春影像-校园歌手大赛（移动端）
			* 甘肃联通数据分析大屏（数据大屏）
			`,
		},
	]
	let unSelect =
		"bg-[#333] text-white px-4 py-2 mr-4 transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
	let selected =
		"bg-blue-600 text-white px-4 py-2 mr-4 transition duration-300 ease-in-out"
	let [selIdx, setSelIdx] = useState(0)
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
				<div className=''>
					<h2 className='text-4xl font-bold mb-4'>About me</h2>
					<div className='flex flex-row mb-8'>
						{data.map((item, index) => {
							return (
								<button
									key={index}
									className={index === selIdx ? selected : unSelect}
									onClick={() => {
										setSelIdx(index)
									}}>
									{item.title}
								</button>
							)
						})}
					</div>
					<p className='whitespace-pre-line h-72'>{data[selIdx].content}</p>
				</div>
			</div>
		</section>
	)
}

export default About
