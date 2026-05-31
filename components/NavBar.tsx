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
        label: "Experience",
        page: "experience"
    },
    {
        label: "Skills",
        page: "skills"
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
        <header className='w-screen mx-auto px-4 fixed bg-gradient-to-b from-data-bg/95 to-data-bg/90 backdrop-blur-sm top-0 z-50 sm:px-20 border-b border-data-border/50'>
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className='flex items-center justify-between'>
                        <div className='md:block md:p-0 py-3'>
                            <Link
                                to="home"
                                className="cursor-pointer font-bold text-xl text-cyber-blue hover:text-cyan-400 transition-colors"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Rims
                            </Link>
                        </div>
                        <div className='md:hidden'>
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-cyber-blue hover:bg-data-card focus:ring-cyber-blue" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavBar(!navbar)}>
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
                                    className="cursor-pointer rounded text-data-text-secondary hover:text-cyber-blue block lg:inline-block p-3 transition-colors font-semibold"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavBar(!navbar)}
                                >{item.label}</Link>
                            })}
                            <div className='py-3'>
                                <a href="/Profile.pdf" target="_blank" className='bg-cyber-blue hover:bg-cyan-600 text-data-bg font-semibold py-2 px-4 border border-transparent rounded transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 uppercase text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear'>Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

NavBar.propTypes = {}

export default NavBar