import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'

const AboutMe = () => {
  const handleDownload = () => {
    window.open('https://docdro.id/MwYXEKW', '_blank')
  }
  return (
    <Box
      data-aos="zoom-in"
      id="about"
      borderRadius="50px"
      background={`linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)`}
      width="100%"
      height={{ base: '1100px', lg: '700px' }}
      display={'flex'}
      alignItems={'center'}
      flexDirection={{ base: 'column', lg: 'row' }}
      padding={{ base: 2, lg: 20 }}
    >
      <Box
        backgroundColor="rgba(0, 0, 0, 0.5)"
        backgroundImage="url(https://i.imgur.com/Z7IUGBy.png)"
        backgroundSize="cover"
        backgroundPosition="center"
        width={'330px'}
        height={'440px'}
        borderRadius={'45px'}
        margin={{ base: 3, md: 10 }}
      />

      <Box width={{ base: '100%', md: '55%' }} marginLeft={{ base: 5, md: 20 }}>
        <Heading fontSize={{ base: 40, md: 56 }} color={'#BAA4A7'}>
          About Me
        </Heading>
        <Heading fontSize={{ base: 20, md: 25 }} color={'#C7A052'}>
          STUDENTS OF COMPUTER SCIENCE
        </Heading>
        <p style={{ marginTop: 8 }}>
          Hello! I am a computer engineering student passionate about the world
          of technology and programming. I am currently in active job search.
        </p>
        <p style={{ marginTop: 8 }}>
          I have studied computer engineering for 3 years, but due to my
          upcoming move to Valencia, I am completely focused on getting a job in
          the IT world and continuing to develop as a professional. I am
          enthusiastic about learning new technologies and keeping up with the
          latest trends in the field of computing.
        </p>
        <p style={{ marginTop: 8 }}>
          I consider myself a proactive person, passionate about learning and
          innovation, and I am sure that I can contribute a lot to any company
          that gives me the opportunity. I am excited for what the future holds
          for me and I look forward to contributing my skills to the world of
          technology!
        </p>
        <Box marginTop={5}>
          <Button
            margin={3}
            borderRadius={45}
            border={'solid 1px #C7A052'}
            color={'#C7A052'}
          >
            Contact Me
          </Button>
          <Button
            paddingLeft={8}
            paddingRight={8}
            borderRadius={45}
            border={'solid 1px #C7A052'}
            color={'#C7A052'}
            onClick={handleDownload}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutMe
