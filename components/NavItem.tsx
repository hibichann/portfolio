import React from "react"
import Link from "next/link"
import styles from "@/styles/navitem.module.scss"
console.log(styles)
const NavItem = ({ href, title }) => {
	return (
		// <li >
		<div className={styles.item}>
			<Link
				className='inline-block p-1 text-[#adb7be] text-2xl sm:text-xl hover:text-white transition-all'
				href={href}>
				{title}
			</Link>
			<div className={styles.routeline}></div>
		</div>
	)
}

export default NavItem
