"use client"
import React, { useState } from "react"
import Link from "next/link"
import NavItem from "./NavItem"
import MenuOverlay from "./MenuOverlay"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
const NavLink = [
	{ href: "/", title: "Home" },
	{ href: "#about", title: "About" },
	{ href: "#projects", title: "Projects" },
	{ href: "#contact", title: "Contact" },
]
const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<nav className='fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-90'>
			<div className='flex flex-wrap items-center justify-between mx-auto p-4'>
				<Link href='/' className='text-2xl md:text-5xl text-white'>
					HIBI’s Site
				</Link>
				<div className='mobile-menu block md:hidden'>
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className='flex items-center p-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
							<Bars3Icon className='h-5 w-5'></Bars3Icon>
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className='flex items-center p-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
							<XMarkIcon className='h-5 w-5'></XMarkIcon>
						</button>
					)}
				</div>
				<div className='menu hidden md:block md:w-auto' id='navbar'>
					<ul className='flex p-4 md:p-4 md:flex-row md:space-x-8 mt-0'>
						{NavLink.map((link, index) => (
							<li key={index}>
								<NavItem href={link.href} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={NavLink} /> : null}
		</nav>
	)
}

export default Navbar
