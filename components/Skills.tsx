'use client';
import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill';

type Props = {}

function Skills({}: Props) {
    const links = ["css.svg", 'git.svg', 'html.svg', 'insomnia.svg', 'intellij.svg', 'java.svg', 'javascript.svg', 'mongodb.svg', 'mysql.svg',
                    'nodejs.svg', 'pycharm.svg', 'python.svg', 'react.svg', 'vscode.svg', 'typescript.svg']
  return (
    <motion.div className='flex relative flex-col text-center md:text-left xl:flex-row
    maw-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        
        <div className='grid grid-cols-4 gap-5'>
            {links?.map(skill => <Skill skill={skill} key={skill} />)}
            
        </div>

        

    </motion.div>
  )
}

export default Skills