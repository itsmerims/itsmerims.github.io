'use client'

import React, { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle } from 'react-icons/fi'

const ContactSection = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formState)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    const contactMethods = [
        {
            icon: FiMail,
            title: "Email",
            value: "rimuel.dev@gmail.com",
            link: "mailto:rimuel.dev@gmail.com",
            description: "Send me an email directly"
        },
        {
            icon: FiLinkedin,
            title: "LinkedIn",
            value: "itsmerims",
            link: "https://www.linkedin.com/in/itsmerims/",
            description: "Connect with me on LinkedIn"
        },
        {
            icon: FiGithub,
            title: "GitHub",
            value: "itsmerims",
            link: "https://github.com/itsmerims",
            description: "Check out my projects"
        }
    ]

    return (
        <section className='py-20 bg-slate-900' id='contact'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-16">
                    <h2 className="text-white text-center font-bold text-5xl mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-electric-purple mx-auto rounded-full" />
                    <p className="text-data-text-secondary text-center mt-4 max-w-2xl mx-auto">
                        I&apos;m always interested in hearing about new projects and opportunities.
                        Whether you have a question or just want to say hello, feel free to get in touch!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-data-card border border-data-border rounded-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 border border-data-border rounded-lg text-white placeholder-data-text-secondary focus:outline-none focus:border-cyber-blue transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800 border border-data-border rounded-lg text-white placeholder-data-text-secondary focus:outline-none focus:border-cyber-blue transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-800 border border-data-border rounded-lg text-white placeholder-data-text-secondary focus:outline-none focus:border-cyber-blue transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-cyber-blue hover:bg-cyan-600 text-data-bg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 uppercase text-sm"
                            >
                                {submitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Methods */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-2xl mb-8">Other Ways to Reach Me</h3>

                        {contactMethods.map((method, idx) => {
                            const Icon = method.icon
                            return (
                                <a
                                    key={idx}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-6 bg-data-card border border-data-border rounded-lg hover:border-cyber-blue hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 p-3 bg-cyber-blue/20 rounded-lg group-hover:bg-cyber-blue/40 transition-colors">
                                        <Icon className="text-cyber-blue text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold text-lg mb-1">{method.title}</h4>
                                        <p className="text-cyber-blue font-semibold mb-1">{method.value}</p>
                                        <p className="text-data-text-secondary text-sm">{method.description}</p>
                                    </div>
                                    <div className="text-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity">
                                        →
                                    </div>
                                </a>
                            )
                        })}

                        {/* Quick Stats */}
                        <div className="mt-8 p-6 bg-gradient-to-br from-cyber-blue/10 to-electric-purple/10 border border-cyber-blue/30 rounded-lg">
                            <p className="text-white font-semibold mb-4">Response Time</p>
                            <p className="text-data-text-secondary text-sm">
                                I typically respond to emails and messages within <span className="text-cyber-blue font-semibold">24-48 hours</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
