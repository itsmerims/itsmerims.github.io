'use client'

import React from 'react'
import { FaPython, FaDatabase, FaCode, FaGitAlt } from 'react-icons/fa'
import { FaBrain } from 'react-icons/fa'
import { SiSnowflake, SiDbt, SiTableau, SiFlutter } from 'react-icons/si'

const skillCategories = [
    {
        title: "Languages",
        description: "Core programming languages for data solutions",
        icon: FaPython,
        skills: [
            { name: "Python", proficiency: 95 },
            { name: "SQL", proficiency: 90 },
            { name: "TypeScript", proficiency: 85 },
        ],
        color: "cyan",
    },
    {
        title: "Data Platforms",
        description: "Enterprise data warehouse and engineering",
        icon: SiSnowflake,
        skills: [
            { name: "Snowflake", proficiency: 92 },
            { name: "dbt", proficiency: 88 },
            { name: "Talend", proficiency: 90 },
        ],
        color: "blue",
    },
    {
        title: "Orchestration & Workflow",
        description: "Pipeline management and automation",
        icon: FaDatabase,
        skills: [
            { name: "Control-M", proficiency: 88 },
            { name: "Airflow", proficiency: 82 },
            { name: "Git/GitHub", proficiency: 90 },
        ],
        color: "purple",
    },
    {
        title: "Analytics & BI",
        description: "Data visualization and reporting",
        icon: SiTableau,
        skills: [
            { name: "Power BI", proficiency: 85 },
            { name: "Tableau", proficiency: 80 },
            { name: "SQL Analytics", proficiency: 90 },
        ],
        color: "indigo",
    },
    {
        title: "Frontend & Mobile",
        description: "Full-stack development capabilities",
        icon: FaCode,
        skills: [
            { name: "React.js", proficiency: 85 },
            { name: "Next.js", proficiency: 88 },
            { name: "Flutter", proficiency: 80 },
        ],
        color: "cyan",
    },
    {
        title: "AI & Emerging Tech",
        description: "Next-gen data engineering practices",
        icon: FaBrain,
        skills: [
            { name: "AI-Driven Automation", proficiency: 85 },
            { name: "LLM Integration", proficiency: 80 },
            { name: "ML Workflows", proficiency: 78 },
        ],
        color: "purple",
    },
]

const SkillsGrid = () => {
    return (
        <section className='py-20 bg-slate-900' id='skills'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-16">
                    <h2 className="text-white text-center font-bold text-5xl mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-electric-purple mx-auto rounded-full" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon
                        return (
                            <div
                                key={index}
                                className="group bg-data-card border border-data-border rounded-lg p-8 hover:border-cyber-blue transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-cyber-blue/20 rounded-lg group-hover:bg-cyber-blue/40 transition-colors">
                                        <IconComponent className="text-cyber-blue text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{category.title}</h3>
                                        <p className="text-data-text-secondary text-sm">{category.description}</p>
                                    </div>
                                </div>

                                {/* Skills with Progress Bars */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-white font-semibold text-sm">{skill.name}</span>
                                                <span className="text-cyber-blue text-xs font-semibold">{skill.proficiency}%</span>
                                            </div>
                                            <div className="w-full bg-data-border rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="bg-gradient-to-r from-cyber-blue to-electric-purple h-full rounded-full transition-all duration-500 ease-out"
                                                    style={{
                                                        width: `${skill.proficiency}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Category Tag */}
                                <div className="mt-6 pt-6 border-t border-data-border">
                                    <span className="inline-block px-3 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded-full font-semibold">
                                        Category {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Summary Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Core Technologies", value: "15+" },
                        { label: "Years of Experience", value: "3+" },
                        { label: "Projects Delivered", value: "20+" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-cyber-blue/20 to-electric-purple/20 border border-cyber-blue/30 rounded-lg p-8 text-center hover:border-cyber-blue transition-colors">
                            <p className="text-cyber-blue font-bold text-3xl mb-2">{stat.value}</p>
                            <p className="text-data-text-secondary text-sm font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsGrid
