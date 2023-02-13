"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image'

interface NavItem {
    label: string
    page: string
}

const Nav_Items: Array<NavItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "About",
        page: "about"
    },
    {
        label: "Projects",
        page: "projects"
    }
]

const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavBar] = useState(false)

    return (
        <header className='w-full mx-auto px-4 fixed bg-slate-900 top-0 z-50 sm:px-20 backdrop-filter backdrop-blur-lg'>
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='md:block md:p-0 py-3'>
                            <Image id='logo' src="/logo.png" alt="Logo" width={60} height={60}></Image>
                        </div>
                        <div className='md:hidden'>
                            <button  data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavBar(!navbar)}>
                                {navbar ? <IoCloseOutline size={30} /> : <FiMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="navbar-default" className={`w-full md:w-auto flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <div className="flex items-center justify-center flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                            {Nav_Items.map((item, index) => {
                                return <Link
                                    key={index}
                                    to={item.page}
                                    className={"cursor-pointer rounded text-slate-100 hover:bg-pink-600 block lg:inline-block p-3"}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavBar(!navbar)}
                                >{item.label}</Link>
                            })}
                            <div className='py-3'>
                            <a href="/cv.simple.pdf" target="_blank" className='bg-transparent hover:text-slate-900 hover:bg-pink-500 font-semibold py-2 px-4 border dark:text-pink-500 text-pink-400 border-pink-400 hover:border-transparent rounded'>Resume</a>
                            </div>
                            {/* <div className='py-3'>
                            {
                                currentTheme === "dark" ? (
                                    <button onClick={() => setTheme("light")} className="p-2 rounded-xl">
                                        <RiSunFill size={20} color='white' />
                                    </button>
                                ) : (
                                    <button onClick={() => setTheme("dark")} className='p-2 rounded-xl'>
                                        <RiMoonFill size={20} />
                                    </button>
                                )
                            }
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

NavBar.propTypes = {}

export default NavBar