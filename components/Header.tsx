'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { HomeIcon } from '@heroicons/react/16/solid'
import Link from 'next/link';


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration:1.5,
            }}
            className='flex flex-row items-center'
          >

            {/* icons */}
            <Link href='#hero'>
            <HomeIcon className='text-[#64ffda] h-10 w-8'/>
            </Link>
            
            <SocialIcon url="https://www.linkedin.com/in/samuel-cohoe-11982922b/" 
            fgColor='#64ffda' 
            bgColor='transparent'
            />
            <SocialIcon url="https://github.com/SammyCohoe" 
            fgColor='#64ffda' 
            bgColor='transparent'
            />
            
        </motion.div>
        

        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration:1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        onClick={() => window.location.href = 'mailto:sammycohoe@gmail.com'}
        >
            <SocialIcon 
                className='cursor-pointer'
                network='email'
                fgColor='#64ffda'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-gray-300 text-sm '>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header