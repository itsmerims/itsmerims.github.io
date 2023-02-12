"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
    return (
        <section className='flex md:h-screen' id='home'>
            <div className='flex w-screen m-auto text-center justify-center items-center place-content-center py-16 md:flex-row md:text-left md:space-x-4'>
                <div id='container' className='block mt-6 w-screen'>
                    <p className='font-mono text-sm text-pink-700 dark:text-pink-500'>Hi, my name is</p>
                    <h1 className='font-bold md:text-7xl sm:text-5xl text-4xl mt-6 md:mt-0'>John Rimuel B&#x2e;</h1>
                    <h1 className='font-bold md:text-7xl text-4xl mt-6 md:mt-0 text-slate-400 dark:text-tagline'>I turn <span className='text-coffee'>coffee</span> into code&#x2e;</h1>
                    <p className='text-lg mx-auto md:mx-0 mb-6 mt-7 w-10/12 md:w-2/3 text-slate-700 dark:text-slate-400'>
                        I'm a{" "}
                        <span className='font-bold text-slate-800 dark:text-pink-600'>
                            Junior Programmer{" "}
                        </span>
                         based in the Philippines. I have experience in mobile app development using Flutter and integrating Laravel-made REST APIs in it. I'm currently learning Next.js and Tailwind CSS to build websites.
                    </p>
                    <div className='p-0'>
                    <Link
                        to="projects"
                        className={"cursor-pointer bg-transparent hover:bg-pink-500 dark:hover:text-slate-900 text-pink-700 dark:text-pink-500 dark:border-pink-400 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded"}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >Projects</Link>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection