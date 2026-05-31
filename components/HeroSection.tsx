"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
    return (
        <section className='min-h-screen bg-gradient-to-b from-data-bg via-slate-900 to-data-bg' id='home'>
            <div className='flex flex-col my-auto text-center justify-center items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 md:flex-row md:text-left md:space-x-4 md:min-h-screen'>
                <div className='sm:mt-12 md:mt-0 lg:mt-0 animate-slideInUp'>
                    <p className='font-mono sm:text-sm md:text-base lg:text-lg text-cyber-blue font-semibold'>Welcome to my portfolio</p>
                    <h1 className='font-bold md:text-7xl sm:text-5xl text-4xl mt-4 md:mt-4 text-slate-100'>
                        Hi, I&#39;m <span className='text-cyber-blue'>John Rimuel</span>
                    </h1>
                    <h2 className='font-bold md:text-5xl text-3xl mt-3 bg-gradient-to-r from-cyber-blue to-electric-purple bg-clip-text text-transparent'>
                        Data Engineer • ETL Architect
                    </h2>
                    <p className='sm:text-base md:text-lg lg:text-lg text-left mx-auto md:mx-0 mb-8 mt-6 w-full md:w-4/5 text-data-text-secondary leading-relaxed'>
                        Building intelligent data pipelines that turn raw data into strategic advantage.
                        I specialize in scalable ETL solutions, data engineering, and AI-driven workflows at
                        <span className='font-semibold text-cyber-blue'> Macquarie</span>.
                        Passionate about designing robust infrastructure that empowers organizations
                        to leverage data for competitive advantage.
                    </p>
                    <div className='flex flex-row gap-4 justify-center md:justify-start'>
                        <Link
                            to="experience"
                            className='cursor-pointer bg-cyber-blue hover:bg-cyan-600 text-data-bg font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 uppercase text-sm'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            View My Work
                        </Link>
                        <Link
                            to="contact"
                            className='cursor-pointer bg-transparent hover:bg-data-card font-semibold py-3 px-6 border border-cyber-blue text-cyber-blue rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 uppercase text-sm'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center mt-8 md:mt-0'>
                <Link
                    to="about"
                    className='cursor-pointer animate-bounce'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <IoIosArrowDown color='#0ea5e9' size={35} />
                </Link>
            </div>
        </section>
    )
}

export default HeroSection
