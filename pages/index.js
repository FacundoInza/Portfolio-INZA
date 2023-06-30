import React from 'react'
import HeaderFS from '../components/sections/HeaderFS'
import Cartoons from '../components/sections/Cartoons'
import AboutMe from '../components/sections/AboutMe'
import Skills from '../components/sections/Skills'

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
    </>
  )
}

export default Page
