'use client';
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#112240] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y:-100, 
                opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once:true }}
            className='w-32 h-32 rounded-full xl:w-[200px} xl:h-[200px] object-cover
            object-center'
            src='western.jpg'
            alt=''
        />

        <div className='px-0 md:px-10'>
        <h4 className='text-4xl font:light text-[#ccd6f6]'>
            Student
            <span style={{ color: '#64ffda' }}> @ Western University</span>
        </h4>
            {/* <p className='font-bold text-2xl mt-1'>Western University</p> */}
            <div className='flex space-x-2 '>
                <Image
                className='h-10 w-10 rounded-full'
                src='python.svg'
                alt=''
                style={{ transform: 'scale(0.75)' }}
                width={100}
                height={100}
                />
                
            </div>
            <p className='text-[#8892b0]'>September 2021-Current</p>
            <ul className='list-desc space-y-4 ml-5 text-lg text-[#8892b0]' style={{ listStyleType: 'disc' }}>
                <style jsx>{`
                    ul {
                    --tw-list-opacity: 1;
                    }

                    li::marker {
                    color: #64ffda;
                    }
                `}</style>
                <li>Uhh</li>
                <li>Uhh</li>
                <li>Uhh</li>
                <li>Uhh</li>
                <li>Uhh</li>
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard