import React from "react"
import Link from "next/link"
import NavItem from "./NavItem"
const NavLink = [
	{ href: "/", title: "Home" },
	{ href: "#about", title: "About" },
	{ href: "#projects", title: "Projects" },
	{ href: "#contact", title: "Contact" },
]
const Navbar = () => {
	return (
		<nav>
			<div className='flex flex-wrap items-center justify-between mx-auto p-8'>
				<Link href='/' className='text-5xl text-white'>
					Logo
				</Link>
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
		</nav>
	)
}

export default Navbar
