import React from 'react'

import { motion } from 'framer-motion'
import { Box, Heading, Text } from '@chakra-ui/layout'

import CodeContact from '../commons/CodeContact'

const Contact = () => {
  return (
    <Box
      borderRadius={'18px'}
      backgroundColor="rgba(7, 3, 40, 1)"
      width="100%"
      height={{ base: '1200px', lg: '800px' }}
      display={'flex'}
      alignItems={'center'}
      flexDirection={{ base: 'column', lg: 'row' }}
      padding={{ base: 2, lg: 14 }}
    >
      <CodeContact />
      <Box
        width={{ base: '100%', lg: '50%' }}
        height={{ base: '50%', lg: '100%' }}
      ></Box>
    </Box>
  )
}

export default Contact
