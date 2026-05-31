import React from 'react'
import { FaCode, FaDatabase, FaBrain } from 'react-icons/fa';

const keyDifferentiators = [
  {
    icon: <FaDatabase className='text-cyber-blue' size={24} />,
    title: "Data Architecture",
    description: "Design scalable ETL pipelines and data infrastructure for enterprise solutions"
  },
  {
    icon: <FaBrain className='text-electric-purple' size={24} />,
    title: "AI-Driven Development",
    description: "Leverage AI and ML workflows to automate data processes and enhance analytics"
  },
  {
    icon: <FaCode className='text-accent-glow' size={24} />,
    title: "Clean Code",
    description: "Write modular, maintainable, and performant data solutions"
  }
];

const aboutText = `I'm a Data Engineer passionate about building intelligent, scalable data infrastructure. Currently at Macquarie's Data DevOps team, I architect ETL pipelines and data solutions that empower organizations to leverage data and AI for competitive advantage.

With a strong foundation in Python, SQL, and modern data platforms (Snowflake, dbt), I bridge the gap between business requirements and technical implementation. My expertise spans end-to-end data engineering—from pipeline orchestration (Control-M, Airflow) to analytics (Power BI)—with a growing focus on AI-driven development and automation.

Previously at Accenture, I delivered complex Talend integration projects for Fortune 500 clients. I'm committed to writing clean, modular, and performant code while mentoring others in data engineering best practices.`;

const AboutSection = () => {
  return (
    <section className='py-20 bg-slate-900' id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-white text-center font-bold text-5xl mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-electric-purple mx-auto rounded-full" />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <h3 className='text-white font-bold text-2xl'>Who I Am</h3>
            {aboutText.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className='text-data-text-secondary leading-relaxed text-base'>
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <p className='text-cyber-blue font-semibold'>
                📊 Current Role: Data Engineer @ Macquarie (Data DevOps Team)
              </p>
              <p className='text-data-text-secondary mt-2'>
                Location: Philippines | Open to Remote Opportunities
              </p>
            </div>
          </div>

          {/* Right Column - Key Differentiators */}
          <div className="space-y-6">
            <h3 className='text-white font-bold text-2xl'>What I Bring</h3>
            {keyDifferentiators.map((item, index) => (
              <div key={index} className="p-6 bg-data-card border border-data-border rounded-lg hover:border-cyber-blue hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-data-text-secondary text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection