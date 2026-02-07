"use client";

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Fake Profile Identification System',
      description:
        'Built comprehensive machine learning models to detect fake social media profiles. Implemented Random Forest and XGBoost algorithms to analyze behavioral features and identify fraudulent accounts with high accuracy.',
      technologies: ['Python', 'Machine Learning', 'Random Forest', 'XGBoost', 'Data Analysis'],
    },
    {
      title: 'Weather Forecasting Using Machine Learning',
      description:
        'Developed a weather prediction system using multiple machine learning algorithms including Logistic Regression, Decision Tree, and KNN. Implemented feature selection and comprehensive evaluation metrics to optimize prediction accuracy.',
      technologies: ['Python', 'Machine Learning', 'Logistic Regression', 'Decision Tree', 'KNN'],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="section-title mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-secondary">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="section-text mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[#444444] rounded-full text-sm text-[#EAEAEA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects 