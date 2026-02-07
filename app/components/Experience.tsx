"use client";

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const education = [
    {
      title: 'Bachelor of Technology (B.Tech) – Computer Science and Engineering',
      institution: 'Balaji Institute of Technology and Science, Narsampet, Telangana',
      period: 'Nov 2021 – Jul 2025',
      details: 'Currently pursuing',
    },
  ]

  const workExperience = [
    {
      title: 'Full Stack Developer',
      company: 'Zithara.AI',
      period: 'May 2025 - Aug 2025',
      details: [
        'Developed and maintained web applications using React.js and Node.js',
        'Designed and implemented RESTful APIs',
        'Worked with DynamoDB and PostgreSQL for data storage and manipulation',
      ]
    },
    {
      title: 'Python Full Stack Developer',
      company: 'Eduskills Academy',
      period: 'Jan 2025 – Mar 2025',
      details: [
        'Worked with Django and Flask frameworks',
        'Learned frontend-backend integration and database management',
        'Built full-stack applications with Python',
      ]
    },
  ]

  const publications = []

  return (
    <section id="experience" className="py-20">
      <h2 className="section-title mb-12">Experience</h2>
      
      <div className="flex flex-col space-y-12">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-headingText">Work Experience</h3>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div key={index} className="bg-[#444444] p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {exp.title}
                </h4>
                <p className="section-text mb-2">{exp.company}</p>
                {exp.period && (
                  <p className="section-text mb-3">{exp.period}</p>
                )}
                {exp.details && (
                  <ul className="space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="section-text flex items-start">
                        <span className="mr-3">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-headingText">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-[#444444] p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {edu.title}
                </h4>
                <p className="section-text mb-2">{edu.institution}</p>
                <p className="section-text mb-2">{edu.period}</p>
                <p className="section-text">{edu.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publications removed because list is empty */}
      </div>
    </section>
  )
}

export default Experience 