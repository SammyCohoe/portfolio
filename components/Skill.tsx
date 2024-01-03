'use client';
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    leftDirection?: boolean;
    skill?: string;
}

function Skill({leftDirection, skill}: Props) {
    
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{ 
                x: leftDirection ? -200: 200,
                opacity:0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0}}
            src={skill}
            className="rounded-full border border-gray-500 object-cover w-28 h-28 xl:w-32 xl:h-32 filter bg-white p-2 
            transition-transform transition-border ease-in-out duration-300 "
            style={{
                transition: 'transform 0.3s ease-in-out, border 0.3s ease-in-out',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.25)';
                e.currentTarget.style.borderColor = '#64ffda';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'gray';
              }}
            
        />

        {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
        group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div> */}
    </div>
  )
}

export default Skill