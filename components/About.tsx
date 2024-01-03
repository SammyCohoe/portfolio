'use client';
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}

    className='h-screen flex flex-col relative text-center md:left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once: true }}
            src='IMG_5512.jpg' 
            className='md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-[64] md:h-[95] xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10 '>
            <h4 className='text-4xl font-semibold text-[#ccd6f6]'>Here is a{" "} 
                <span className=' text-[#64ffda] underline decoration-[#64ffda]'>little</span>{" "} 
                background
            </h4>
            <p className='text-base text-[#8892b0] ' style={{ whiteSpace: 'pre-line' }}>
                Hello! My name is Sammy and I&apos;m a 3rd year Software Engineering student at Western University. I first took interest in programming in a Grade.11 computer science class where I learned all about Python.
                {'\n'}
                {'\n'}
                Fast forward to today and I&apos;ve directed Western Engineering's Programming competition, become a team lead for the Western Developer Society, and participated in multiple hackathons.
            </p>
        </div>
    </motion.div>
  )
}