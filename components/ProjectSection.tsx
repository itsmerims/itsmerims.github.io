"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Daenery's Bayad Center",
    image: "/project1.png",
    github: "https://github.com/itsmerims/miscellaneous-payment-system",
    link: "",
    decription: "A house miscellaneous payment system built with Java using Eclipse and it's WindowBuilder with CRUD functionalities.",
  },
  {
    name: "First Three.js Project",
    image: "/project2.png",
    github: "https://github.com/itsmerims/first-threejs-project",
    link: "https://first-threejs-project.000webhostapp.com/",
    decription: "A interactive three.js web app that has a slow spinning earth that you can spin. This is my first three.js app I learn from a tutorial on Youtube.",
  },
]


const ProjectSection = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <section className='md:h-screen' id='projects'>
      <div className="my-2 pb-12">
        <div>
          <h1 className="text-white text-center font-bold text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-yellow-700 border-0 rounded" />
          </h1>
        </div>

        <div className='md:flex flex-column md:flex-row md:space-y-0 space-y-12 md:space-x-12 mt-10 items-center justify-center'>
          {projects.map((projects, index) => {
            return (
              <div key={index} className="">
                <div className='flex flex-column md:flex-row overflow-hidden cursor-pointer rounded-xl relative group'>
                  <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                    <div>
                      <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div className='flex flex-row justify-between'>
                          <div className="font-bold">{projects.name}</div>
                          <div className="flex flex-row">
                            <Link href={projects.github} target="_blank">
                              <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer mr-4" color='white' />
                            </Link>
                            {
                              projects.link.length == 0
                                ? <button type="button" onClick={() => setShowModal(true)}>
                                    <BsArrowRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" color='white' />
                                  </button>
                                : <Link href={projects.link} target="_blank">
                                  <BsArrowRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" color='white' />
                                </Link>
                            }
                          </div>
                        </div>

                        <div className="opacity-80 text-sm ">
                          {projects.decription}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={projects.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl object-cover group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                  <div></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center w-11/12 mx-auto flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start text-black justify-between pt-4 px-6 rounded-t">
                  <h3 className="text-xl font-bold">
                    Coming Soon
                  </h3>
                </div>
                {/*body*/}
                <div className="relative py-2 px-6 flex-auto">
                  <p className="my-4 text-slate-500 leading-relaxed">
                    This Java project will be uploaded soon.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-2 px-4 rounded-b">
                  <button
                    className="bg-transparent hover:text-white hover:bg-pink-500 font-semibold py-2 px-4 border text-pink-400 border-pink-400 hover:border-transparent rounded  background-transparent uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  )
}

export default ProjectSection