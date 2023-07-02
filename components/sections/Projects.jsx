import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Suspense, useEffect, useRef, useState } from 'react'

import { fetchData } from '../../services/axios'
import Slider from 'react-slick'
import { motion, useInView, useAnimation } from 'framer-motion'

const apiData = fetchData()

const Projects = () => {
  const projects = apiData.read().data

  const refProjects = useRef(null)
  const isInView = useInView(refProjects)

  const mainControls = useAnimation()

  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    } else {
      mainControls.start('hidden')
    }
  })

  const handleClick = (url) => {
    if (typeof window !== 'undefined' && window.open) {
      window.open(url, '_blank')
    }
  }

  const containerVariants = {
    hidden: {
      filter: 'blur(20px)',
      scale: 1.5,
    },
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
      },
    },
  }

  const slidesToShow = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 2,
    xl: 3,
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay || isInView, // Habilitar la reproducción automática
    speed: 2000,
    autoplaySpeed: 100,
  }

  return (
    <motion.div
      variant={containerVariants}
      initial={'hidden'}
      animate={mainControls}
      ref={refProjects}
      style={{
        borderRadius: 20,
        background:
          'linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)',
        height: '800px',
      }}
    >
      <Box
        borderRadius={20}
        background={`linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)`}
        height="800px"
      >
        <Heading
          fontSize={'40px'}
          color={'#C7A052'}
          padding={10}
          textAlign={'center'}
        >
          Projects
        </Heading>
        <Suspense fallback={<div>Loading...</div>}>
          <Slider {...settings}>
            {projects.map((project, i) => (
              <Card
                key={i}
                maxW="sm"
                height={'600px'}
                backgroundColor={'rgba(7, 2, 26, 0.5)'}
                onFocus={() => setAutoplay(false)}
              >
                <Box>
                  <Image
                    src={project.image}
                    alt={project.name}
                    borderRadius="10px 10px 0px 0px"
                    height={'250px'}
                  />
                </Box>

                <CardBody height={'255px'}>
                  <Stack spacing="3" marginBottom={2}>
                    <Heading size="md">{project.name}</Heading>
                    <Text>
                      {project.description.length > 195
                        ? project.description.substring(0, 195) + '...'
                        : project.description}
                    </Text>
                  </Stack>

                  {project.tecnologies.map((tech, i) => (
                    <Tag
                      marginRight={1}
                      size={'sm'}
                      key={i}
                      variant="solid"
                      background="#070328"
                      color={'#C7A052'}
                    >
                      {tech}
                    </Tag>
                  ))}
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    {project?.videoDemo && (
                      <Button
                        paddingLeft={8}
                        paddingRight={8}
                        borderRadius={45}
                        border={'solid 1px #C7A052'}
                        color={'#C7A052'}
                        onClick={() => handleClick(project.videoDemo)}
                      >
                        Go to Demo
                      </Button>
                    )}
                    {project?.urlDeploy && (
                      <Button
                        paddingLeft={8}
                        paddingRight={8}
                        borderRadius={45}
                        border={'solid 1px #C7A052'}
                        color={'#C7A052'}
                        onClick={() => handleClick(project.urlDeploy)}
                      >
                        Deploy
                      </Button>
                    )}
                  </ButtonGroup>
                  {!project.urlDeploy && !project.videoDemo && (
                    <Text color="#C7A052" fontSize="2xl">
                      Developing...
                    </Text>
                  )}
                </CardFooter>
              </Card>
            ))}
          </Slider>
        </Suspense>
      </Box>
    </motion.div>
  )
}

export default Projects
