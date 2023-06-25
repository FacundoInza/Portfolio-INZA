import React from 'react'
import HeaderFS from '../components/HeaderFS'
import Cartoons from '../components/Cartoons'
import AboutMe from '../components/AboutMe'
import { Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <>
      <HeaderFS />

      <Cartoons />

      <AboutMe />

      <Box
        width={'100%'}
        height={'800px'}
        backgroundColor={'#070328'}
        marginTop={40}
        borderRadius={'45px'}
      ></Box>
    </>
  )
}

export default Page
