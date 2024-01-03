'use client';
import React from 'react'
import Link from 'next/link';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "<Hi, I'm Sammy Cohoe/>",
            "<Developer/>", 
            "<Fitness Enthusiast/>", 
            "<Reader/>", 
            "<Model Builder/>", 
            "<Traveler/>" 
        ],
        loop:true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="IMG_2272.jpg" 
            alt="" 
        />
        <div className='z-20'>
            <h2 className='text-small text-slate-500 pb-2 tracking-[15px]'>
                SOFTWARE ENIGNEER
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='text-slate-200 mr-3'>{text}</span>
                <Cursor cursorColor="#64ffda"/>
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                {/* <Link href="#expirence">
                    <button className='heroButton'>Experience</button>
                </Link> */}
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
                
            </div>
            
        </div>

        
    </div>
  )
}

export default Hero