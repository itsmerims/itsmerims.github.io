"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
    return (
        <section className='md:h-screen' id='home'>
            <div className='flex flex-col my-auto text-center justify-center items-center py-16 md:flex-row md:text-left md:space-x-4'>
                <div className='px-0 sm:mt-12 md:mt-20 lg:mt-32'>
                    <p className='font-mono sm:text-md md:text-md lg:text-lg xl:text-lg text-pink-400'>Hi, my name is</p>
                    <h1 className='font-bold md:text-9xl sm:text-7xl text-6xl mt-2 md:mt-0 text-slate-200'>John Rimuel B&#x2e;</h1>
                    <h1 className='font-bold md:text-8xl text-6xl mt-2 md:mt-0 text-tagline'>I turn <span className='text-coffee'>coffee</span> into code&#x2e;</h1>
                    <p className='sm:text-lg md:text-lg lg:text-lg xl:text-xl text-left mx-auto md:mx-0 mb-6 mt-4 w-10/12 md:w-2/3 text-slate-400'>
                        I&#39;m a{" "}
                        <span className='font-bold text-pink-400'>
                            Junior Programmer{" "}
                        </span>
                        based in the Philippines. I&#39;m specialized in designing {" (and ocassionally in building) "} exceptional digital experiences. Currently, I&#39;m invested in learning web development using Next.js, Three.js Tailwind CSS, Typescript and many more.
                    </p>
                    <div className='p-0'>
                        <Link
                            to="projects"
                            className={"cursor-pointer bg-transparent hover:text-white hover:bg-pink-500 font-semibold py-2 px-4 border text-pink-400 border-pink-400 hover:border-transparent rounded  background-transparent uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Projects</Link>

                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center mt-5'>
                <Link
                    to="about"
                    className={"cursor-pointer "}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                ><IoIosArrowDown color='white' size={35} className="animate-bounce"/></Link>
            </div>
        </section>
    )
}

export default HeroSection