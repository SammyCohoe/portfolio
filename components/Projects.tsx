'use client';
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Projects({}: Props) {
    const projectObj = {
      1: {
        name: "Fullstack Superhero API",
        photo: "Superhero.jpg",
        link: "https://github.com/SammyCohoe/MERN-Stack-Superhero-Website",
        desc:
          "This MERN stack application allows users to browse a database containing 100s of superheroes. Users can create personalized lists, leave reviews, and browse those created by others. This is my first react project and helped me learn the principles of REST APIs.",
      },
      2: {
        name: "ATLA Game",
        photo: "avatar_project.png",
        link: "https://github.com/SammyCohoe/ATLA-Game",
        desc:
          "This PyGame project allows users to play as the Avatar and traverse the 4 kingdoms of the ATLA world. Users must fight monsters and level their character to up survive and defeat the final boss. This project helped teach me the fundamentals of OOP and allowed me to expand on my Python skills.",
      },
      3: {
        name: "Tweet Sensitivity Analyzer",
        photo: "twitter_cohere_project.jpg",
        link: "https://github.com/SammyCohoe/TweetSentimentAnalysisProgram",
        desc:
          "This application makes use of CoHere’s sentiment analysis API to categorize Tweets scrapped from Twitter based off a user’s inputted hashtag. It then graphs these Tweets and displays the most positive and negative for the user to see. This project was created in my first Hackathon!",
      },
    };
  
    const projects = Object.entries(projectObj);
  
    return (
      <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Projects
        </h3>
  
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {projects.map(([key, project], i) => (
            <div
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
                  justify-center p-20 md:p-44 h-screen/90 '
              key={key}
            >
              <a href={project.link}>
                <motion.img
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='cursor-pointer'
                  src={project.photo}
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </a>
  
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center text-[#ccd6f6]'>
                  <span className='underline decoration-[#64ffda]/50'>
                    Project {i + 1} of {projects.length}:
                  </span>
                  {'\t'}
                  {project.name}
                </h4>
                <p className='text-lg text-center md:text-left text-[#8892b0]'>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#64ffda]/5 left-0 h-[500px] -skew-y-12'></div>
      </div>
    );
  }
  

export default Projects