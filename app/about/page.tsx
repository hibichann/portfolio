"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Data } from "@/types/about"
import AboutItem from "@/components/AboutItem"
const About = () => {
	return (
		<div>
			<div style={{ height: "50px" }}></div>
			<div>
				<AboutItem className='bg-black bg-opacity-50 backdrop-blur-xl rounded-3xl w-3/4 mx-auto'></AboutItem>
			</div>
			<div style={{ width: "100vw", height: "5550px" }}></div>
		</div>
	)
}

export default About
