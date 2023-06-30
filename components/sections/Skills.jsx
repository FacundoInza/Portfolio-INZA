import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'

const urlLogos = [
  'https://i.imgur.com/CptLkyX.png',
  'https://i.imgur.com/trSDXtD.png',
  'https://i.imgur.com/engnyJi.png',
  'https://i.imgur.com/chB7jvM.png',
  'https://i.imgur.com/q7xn8MW.png',
  'https://i.imgur.com/O71yz0S.png',
  'https://i.imgur.com/Sge2RJo.png',
  'https://th.bing.com/th/id/R.4f46be41435ec190eccb1e819229df7b?rik=qLJtJ2oihy9E8w&riu=http%3a%2f%2fjoelcox.io%2fscripts%2flogos%2fmongo-logo.png&ehk=07W0kY%2bKXtJZJn1s35izmffF6NX0jelfmidCaghxea0%3d&risl=&pid=ImgRaw&r=0',
  'https://i.imgur.com/sycdKMv.png',
  'https://i.imgur.com/lJLzCdL.png',
  'https://i.imgur.com/Y56Ubdj.png',
  'https://i.imgur.com/a8rsUSF.png',
  'https://i.imgur.com/1Qbzw07.png',
  'https://i.imgur.com/etnXz4G.png',
  'https://i.imgur.com/pY2WKtR.png',
]

const Skills = () => {
  const refSkills = useRef(null)
  const isInView = useInView(refSkills)
  const mainControls = useAnimation()

  useEffect(() => {
    console.log(isInView)
    if (isInView) {
      mainControls.start('animate')
    } else {
      mainControls.start('initial')
    }
  })

  const containerVariants = {
    initial: {
      filter: 'blur(10px)',
    },
    animate: {
      filter: 'blur(0px)',
      transition: {
        duration: 1,
      },
    },
  }

  const itemVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  }

  return (
    <motion.div
      ref={refSkills}
      style={{
        width: '100%',
        maxHeight: '1300px',
        marginTop: 40,
        borderRadius: '45px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: 'rgba(0, 0, 0, 0.3)',
      }}
      initial="initial"
      animate={mainControls}
      variants={containerVariants}
    >
      <Heading fontSize={'40px'} color={'#C7A052'} paddingTop={20}>
        Skills
      </Heading>

      <Grid
        templateColumns={{
          base: 'repeat(2, 6fr)',
          sm: 'repeat(3, 4fr)',
          md: 'repeat(5, 1fr)',
        }}
        gap={20}
        margin={20}
      >
        {urlLogos.map((url, i) => {
          const itemDelay = i * 0.07

          return (
            <motion.div
              variants={itemVariants}
              initial={'initial'}
              animate={mainControls}
              exit={'initial'}
              transition={{ delay: itemDelay, duration: 0.8 }} // Aplica la animación secuencial con el retraso específico
            >
              <Image
                key={i}
                filter="grayscale(100%)"
                src={url}
                alt={`Imagen ${i + 1}`}
                width={{ base: '50px', md: '80px' }}
              />
            </motion.div>
          )
        })}
      </Grid>
    </motion.div>
  )
}

export default Skills
