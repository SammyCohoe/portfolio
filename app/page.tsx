import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      <section id="hero" className="snap-center">
        <Hero />

      </section>

      {/* About */}

      {/* Expierence */}
      
      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      
    </div>
  )
}
