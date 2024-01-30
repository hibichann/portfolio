import React from "react"
import Link from "next/link"

const NavItem = ({ href, title }) => {
	return (
		// <li >
		<Link
			className='inline-block p-4 text-[#adb7be] text-2xl sm:text-xl'
			href={href}>
			{title}
		</Link>
	)
}

export default NavItem
