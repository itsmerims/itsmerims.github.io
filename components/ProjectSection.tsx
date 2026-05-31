"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowRightSquare } from "react-icons/bs";
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "MSW Badminton App",
    image: "/msw-badminton-app.png",
    github: "https://github.com/itsmerims/MSW-Badminton-App",
    link: "",
    description: "A professional badminton club management app for live court status, queue management, deterministic matchmaking, scoring, player ranking, and daily financial tracking.",
    category: "Club Operations",
    tags: ["Next.js", "Supabase", "Tailwind", "ShadCN UI"],
    featured: true,
  },
  {
    name: "CareerCompass VA",
    image: "/careercompass-va.png",
    github: "https://github.com/itsmerims/CareerCompass-VA",
    link: "",
    description: "An AI-powered career roadmap app for virtual assistants, with an interactive quiz, personalized persona results, saved roadmaps, and Firebase-backed persistence.",
    category: "AI Guidance",
    tags: ["Next.js", "Genkit", "Firestore", "Firebase"],
    featured: true,
  },
  {
    name: "ClarityBudgets",
    image: "",
    github: "https://github.com/itsmerims/claritybudgets",
    link: "",
    description: "A focused budgeting and expense tracker with budget management, visual dashboards, multi-currency support, AI category suggestions, and personalized saving tips.",
    category: "Finance",
    tags: ["Next.js", "TypeScript", "Gemini", "Zod"],
    featured: false,
  },
  {
    name: "Miscellaneous Payment System",
    image: "/Miscellaneous-Payment-System.png",
    github: "https://github.com/itsmerims/miscellaneous-payment-system",
    link: "",
    description: "A Java desktop payment system built with Eclipse and WindowBuilder, using text-file storage for CRUD-style record management.",
    category: "Desktop App",
    tags: ["Java", "Eclipse", "WindowBuilder", "CRUD"],
    featured: false,
  },
  {
    name: "TheBreakfastClub Badminton Manager",
    image: "/thebreakfastclub.png",
    github: "https://github.com/itsmerims/TheBreakfastClub-Badminton-App",
    link: "",
    description: "A badminton club management system with session-based routing, admin controls, Firestore-backed state, notifications, and player workflow tooling.",
    category: "Club Operations",
    tags: ["Next.js", "Firebase", "Genkit", "Firestore"],
    featured: false,
  },
]

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [showModal, setShowModal] = React.useState(false);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className='py-20 bg-data-bg' id='projects'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-white text-center font-bold text-5xl mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-electric-purple mx-auto rounded-full" />
          <p className="text-data-text-secondary text-center mt-4 max-w-2xl mx-auto">
            A selection of data engineering and AI-driven projects showcasing my expertise in ETL solutions, data architecture, and intelligent automation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                ? 'bg-cyber-blue text-data-bg shadow-lg shadow-cyan-500/50'
                : 'bg-data-card border border-data-border text-data-text-secondary hover:border-cyber-blue'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-data-card border border-data-border hover:border-cyber-blue transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 ${project.featured ? 'md:col-span-1' : ''
                }`}
            >
              {/* Image Container */}
              <div className='relative w-full h-64 md:h-72 bg-gradient-to-br from-data-border to-data-bg overflow-hidden'>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyber-blue/20 to-electric-purple/20">
                    <div className="text-center">
                      <p className="text-cyber-blue text-4xl mb-2">📊</p>
                      <p className="text-data-text-secondary font-semibold">{project.category}</p>
                    </div>
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-electric-purple text-white text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Content Overlay */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div>
                  <h3 className="text-white font-bold text-xl group-hover:text-cyber-blue transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-cyber-blue text-sm font-semibold mt-1">{project.category}</p>
                </div>

                {/* Description */}
                <p className="text-data-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded font-semibold border border-cyber-blue/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-data-border">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-data-text-secondary hover:text-cyber-blue transition-colors font-semibold text-sm"
                  >
                    <BsGithub size={18} />
                    Code
                  </Link>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-data-text-secondary hover:text-cyber-blue transition-colors font-semibold text-sm"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-data-text-secondary mb-4">
            Want to see more projects?
          </p>
          <Link
            href="https://github.com/itsmerims"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-blue hover:bg-cyan-600 text-data-bg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <BsGithub size={20} />
            Visit My GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
