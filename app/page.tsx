'use client';
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Head from "next/head";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";


export default function Home() {
  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 ">
    <style jsx global>{`
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #64ffda;
            border-radius: 6px;
        }
    `}</style>
    
      <Head>
        <title>Sammy's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />

      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Expierence */}
      {/* <section id="experience" className="snap-center">
        <Experience />
      </section> */}
      
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contactMe" className="snap-center">
        <ContactMe />
      </section>

      
    </div>
  )
}
