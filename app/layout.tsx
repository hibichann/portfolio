import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Hibi",
	description: "Hibi's personal website",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{/* <main className='flex min-h-screen flex-col bg-bg0 bg-fixed bg-cover'> */}
				<main className='flex min-h-screen flex-col bg-bg0 bg-fixed bg-cover'>
					<div className='w-full h-full'>
						<Navbar />

						<section className='text-white place-self-center w-full backdrop-brightness-50 '>
							<div style={{ height: "50px" }}></div>
							{children}
						</section>
					</div>
				</main>
			</body>
		</html>
	)
}
