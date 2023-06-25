import { Box, Image, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import style from './Cartoons.module.css'

const Cartoons = () => {
  const imageWidth = useBreakpointValue({ base: '80%', md: '60%', lg: '40%' })

  return (
    <Box
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(7, 2, 26, 1) 0%, rgba(7, 2, 26, 0.00) 100%)',
      }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={10}
    >
      <Image
        zIndex={1}
        src="https://i.imgur.com/8a8Nq09.png"
        className={`${style['animated-image-smartphone']} `}
        left={{ base: -30, lg: 320 }}
        width={'245px'}
        marginBottom={5}
      />
      <Image
        src="https://i.imgur.com/BTeyeZ5.png"
        className={style['hover-image']}
        width={imageWidth}
        marginBottom={5}
      />
      <Image
        zIndex={3}
        right={{ base: -60, lg: 250 }}
        src="https://i.imgur.com/NrSvePm.png"
        className={`${style['animated-image-headphone']}`}
        width={'500px'}
      />
    </Box>
  )
}

export default Cartoons
