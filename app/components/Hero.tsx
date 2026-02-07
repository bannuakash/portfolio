"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wallpaper.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        {/* Add a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content - Right Aligned on Desktop, Centered on Mobile */}
      <div className="absolute top-1/3 md:right-24 right-1/2 md:translate-x-0 translate-x-1/2 z-10 flex flex-col md:items-end items-center w-full max-w-xs md:max-w-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg font-luckiestGuy mb-4 md:text-right"
        >
          AKASH JANNU
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black drop-shadow-lg font-luckiestGuy md:text-right"
        >
          FULL STACK DEVELOPER | CS ENGINEER
        </motion.h2>
      </div>
    </section>
  )
}

export default Hero 