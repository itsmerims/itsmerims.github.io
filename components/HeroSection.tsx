"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
    return (
        <section className='flex h-screen' id='home'>
            <div className='flex w-screen m-auto text-center justify-center items-center place-content-center py-16 md:flex-row md:text-left md:space-x-4'>
                <div className='h-auto py-7 px-5'>
                    <h1 className='font-bold text-7xl mt-6 md:mt-0'>John Rimuel&#x2e;</h1>
                    <p className='text-lg mb-6 mt-4'>
                        I'm a{" "}
                        <span className='font-bold text-slate-800 dark:text-pink-600'>
                            Developer{" "}
                        </span>
                        originaly based in Quezon Province Philippines.<br /> I love designing, coding, learning new tech and collaborating with others.
                    </p>
                    <div>
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