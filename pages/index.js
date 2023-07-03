import React from 'react'
import HeaderFS from '../components/sections/HeaderFS'
import Cartoons from '../components/sections/Cartoons'
import AboutMe from '../components/sections/AboutMe'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

const Page = () => {
  return (
    <>
      <section id="home">
        <HeaderFS />
        <Cartoons />
      </section>

      <section id="about" style={{ paddingTop: 180 }}>
        <AboutMe />
      </section>

      <section id="skills" style={{ paddingTop: 180 }}>
        <Skills />
      </section>

      <section id="projects" style={{ paddingTop: 180 }}>
        <Projects />
      </section>

      <section id="contact" style={{ paddingTop: 180 }}>
        <Contact />
      </section>
    </>
  )
}

export default Page
