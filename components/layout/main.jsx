import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Facundo Inza - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.xl" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
