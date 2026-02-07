"use client";

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="section-title mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-text text-justify">
            Tech-savvy and adaptable Computer Science graduate with a strong interest in building effective and scalable software solutions. Passionate about full-stack development and machine learning, and eager to grow through real-world challenges while contributing to innovative, high-impact projects. I have hands-on experience in both frontend and backend development, with expertise in React.js, Node.js, and modern databases. I'm committed to writing clean, maintainable code and creating user-friendly applications that solve real problems.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <motion.img
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="/akash profile.jpeg"
            alt="Akash Jannu"
            className="rounded-full shadow-lg w-64 h-64 object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About 