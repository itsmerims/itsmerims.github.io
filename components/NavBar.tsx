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
        <header className='w-full mx-auto px-4 fixed top-0 z-50 sm:px-20'>
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className='flex items-center justify-between py-3'>
                        <div className='md:py-5 md:block'>
                        <Image id='logo' src="/logo.png" alt="Logo" width={60} height={60}></Image>
                        </div>
                        <div className='md:hidden'>
                            <button onClick={() => setNavBar(!navbar)}>
                                {navbar ? <IoCloseOutline size={30} /> : <FiMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {Nav_Items.map((item, index) => {
                                return <Link 
                                    key={index}
                                    to={item.page}
                                    className={"cursor-pointer block lg:inline-block"}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavBar(!navbar)}
                                >{item.label}</Link>
                            })}
                            {
                                currentTheme === "dark" ? (
                                    <button onClick={() => setTheme("light")} className="bg-slate-200 p-2 rounded-xl">
                                        <RiSunFill size={20} color='black' />
                                    </button>
                                ) : (
                                    <button onClick={() => setTheme("dark")} className='bg-slate-200 p-2 rounded-xl'>
                                        <RiMoonFill size={20} />
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

NavBar.propTypes = {}

export default NavBar