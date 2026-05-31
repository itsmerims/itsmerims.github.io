'use client'

import React from 'react'
import { FaCircle } from 'react-icons/fa'

const experiences = [
    {
        company: "Macquarie",
        position: "Data Engineer - Data DevOps Team",
        period: "2024 - Present",
        location: "Manila, Philippines",
        isActive: true,
        achievements: [
            "Architected scalable ETL pipelines using Control-M and Talend for data integration",
            "Optimized data workflows reducing pipeline execution time by 40%",
            "Designed automated data quality monitoring using Python and SQL",
            "Collaborated with AI teams to implement ML-driven data preprocessing",
        ],
        techStack: ["Python", "SQL", "Snowflake", "Control-M", "Talend", "dbt", "Power BI", "Git"],
    },
    {
        company: "Accenture",
        position: "Data Engineer Associate - Talend Integration Specialist",
        period: "2022 - 2024",
        location: "Manila, Philippines",
        isActive: false,
        achievements: [
            "Delivered 15+ Talend integration projects for Fortune 500 clients",
            "Built complex ETL workflows handling 10M+ daily data transactions",
            "Mentored junior developers on data engineering best practices",
            "Reduced data integration costs by 30% through optimization",
        ],
        techStack: ["Talend", "SQL", "Python", "Snowflake", "Git", "Control-M"],
    },
]

const ExperienceTimeline = () => {
    return (
        <section className='py-20 bg-data-bg' id='experience'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-16">
                    <h2 className="text-white text-center font-bold text-5xl mb-4">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-electric-purple mx-auto rounded-full" />
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline dot and line */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0">
                                <div className={`w-4 h-4 rounded-full border-4 ${exp.isActive ? 'bg-cyber-blue border-cyber-blue shadow-lg shadow-cyan-500/50' : 'bg-data-card border-cyber-blue'}`} />
                                {index !== experiences.length - 1 && (
                                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-24 md:h-32 bg-gradient-to-b from-cyber-blue to-data-border" />
                                )}
                            </div>

                            {/* Content */}
                            <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
                                <div className="bg-data-card border border-data-border rounded-lg p-8 hover:border-cyber-blue hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-cyber-blue font-bold text-xl">{exp.position}</h3>
                                            <p className="text-electric-purple font-semibold">{exp.company}</p>
                                        </div>
                                        {exp.isActive && (
                                            <span className="inline-block px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full font-semibold">
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    {/* Period and Location */}
                                    <div className="text-data-text-secondary text-sm mb-4 space-y-1">
                                        <p>📅 {exp.period}</p>
                                        <p>📍 {exp.location}</p>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-3 text-sm">Key Achievements:</h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className="text-data-text-secondary text-sm flex items-start">
                                                    <span className="text-cyber-blue mr-3 flex-shrink-0">▸</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 text-sm">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs rounded-full font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceTimeline
