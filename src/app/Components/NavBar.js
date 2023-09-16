"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiFillLinkedin, AiFillGithub, AiTwotoneMail, AiFillMediumSquare} from 'react-icons/ai'
import Logo from '../../../public/static/images/Rob.png'
// import resume from '../../../public/static/Resume.pdf'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])

  return (
		<div
			className={
				shadow
					? "bg-[#d2e5f8] fixed w-full h-20 shadow-xl z-[100] color-green"
					: "bg-[#d2e5f8] fixed w-full h-20 z-[100] color-white"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-15">
				<Image alt="logo" src={Logo} width="200" height="200" />
				<div className="mx-5">
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-20 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/#about">
							<li className="ml-20 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link scroll={true} href="/#skills">
							<li className="ml-20 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-20 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/#articles">
							<li className="ml-20 text-sm uppercase hover:border-b">
								Articles
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-20 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
				</div>
				{/* <a href={resume} download={resume}>
                <button className=' mr-0 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"'>Resume</button>
            </a> */}
				<div onClick={() => setNav(true)} className="md:hidden">
					<AiOutlineMenu size={25} />
				</div>
			</div>
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image src={Logo} alt="/" width="100" height="100" />
							<div
								onClick={() => setNav(false)}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								I drive innovation in ambitious projects.
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Projects
								</li>
							</Link>
							<Link href="/#articles">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Articles
								</li>
							</Link>
							<Link href="/#contact">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40 ">
							<p className="uppercase tracking-widest">Let&apos;s Connect</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<a href={"https://www.linkedin.com/in/robertegeland/"}>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiFillLinkedin />
									</div>
								</a>
								<a href={"https://github.com/RobEgeland"}>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiFillGithub />
									</div>
								</a>
								<a href={"https://medium.com/@robegeland"}>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiFillMediumSquare />
									</div>
								</a>
								<Link href="/#contact">
									<div
										onClick={() => setNav(false)}
										className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
									>
										<AiTwotoneMail />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar