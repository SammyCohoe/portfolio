import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Head from "next/head";


export default function Home() {
  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0">
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
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      
      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      
    </div>
  )
}
