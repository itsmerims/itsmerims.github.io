"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules";

const HeroSection = () => {
    return (
        <section id='home'>
            <div className='flex flex-col text-center justify-center items-center my-10 py-16 md:flex-row md:text-left md:space-x-4'>
                <div className='md:w-1/2 mt-2'>
                    <Image className='rounded-full shadow-2xl' src="/avatar.png" alt="" width={300} height={300} />
                </div>
                <div className='md:mt-2 md:w-3/5'>
                    <h1 className='font-extrabold text-7xl mt-6 md:mt-0'>Hi, I&#39;m Rims!</h1>
                    <p className='font-mono text-lg mb-6 mt-4'>
                        I'm a{" "}
                        <span className='font-bold text-slate-800 dark:text-teal-600'>
                            Developer{" "}
                        </span>

                    </p>
                    <div>
                    <Link
                        to="projects"
                        className={"cursor-pointer block lg:inline-block bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 border-pink-700 rounded"}
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