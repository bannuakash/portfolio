"use client";

import { motion } from 'framer-motion'
// Removed react-icons imports as we will use images
// import { FaPython, FaHtml5, FaReact, FaGithub, FaCode } from 'react-icons/fa'
// import { GrMysql } from 'react-icons/gr'
// import { DiMongodb, DiVisualstudio, DiCodeBadge } from 'react-icons/di'
// import { FaDatabase } from 'react-icons/fa6'

const SkillsAndTools = () => {
  const technicalSkills = [
    { name: 'Python', fileName: 'python_logo.png' },
    { name: 'JavaScript', fileName: 'js_logo.png' },
    { name: 'HTML', fileName: 'html_logo.png' },
    { name: 'CSS', fileName: 'css_logo.png' },
    { name: 'React.js', fileName: 'react_logo.jpg' },
    { name: 'MySQL', fileName: 'my_sql_logo.png' },
    { name: 'MongoDB', fileName: 'mongo_db.png' },
    { name: 'C', fileName: 'c_lan.jpg' },
    { name: 'Java', fileName: 'java_logo.png' },
    { name: 'Tailwind CSS', fileName: 'tailwind_css.png' },
  ];

  const tools = [
    { name: 'Git', fileName: 'git__logo.png' },
    { name: 'GitHub', fileName: 'github_logo.png' },
    { name: 'Cursor', fileName: 'cursor.png' },
    { name: 'Postman', fileName: 'postman.png' },
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills & Tools</h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-textPrimary text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-2 text-textSecondary hover:text-secondary transition-colors"
              >
                {/* Using img tag for the icon */}
                <div className="text-4xl"> {/* Container div for consistent sizing/alignment, adjust if needed */}
                  <img 
                    src={`/${skill.fileName}`} 
                    alt={skill.name}
                    className="w-10 h-10 object-contain" // Adjust size and fit as needed
                  />
                </div>
                <p className="text-sm text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-textPrimary text-center">Tools</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-2 text-textSecondary hover:text-secondary transition-colors"
              >
                 {/* Using img tag for the icon */}
                 <div className="text-4xl"> {/* Container div for consistent sizing/alignment, adjust if needed */}
                  <img 
                    src={`/${tool.fileName}`} 
                    alt={tool.name}
                     className="w-10 h-10 object-contain" // Adjust size and fit as needed
                  />
                </div>
                <p className="text-sm text-center">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsAndTools; 