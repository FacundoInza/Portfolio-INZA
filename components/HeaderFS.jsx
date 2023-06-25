import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

const HeaderFS = () => {
  const gradientBgH1 = 'linear-gradient(to right, #ED7D26, #7600C6, #7600C6)'
  const gradientBgH2 = 'linear-gradient(to right, #08ABE2, #7600C6, #7600C6)'
  return (
    <>
      <Heading borderRadius="lg" align="center" margin={5}>
        Hi!, I'm Facundo
      </Heading>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          flexGrow={1}
        >
          <Heading
            as="h2"
            whiteSpace="nowrap"
            fontSize={{ base: '60px', xl: '120px' }}
            sx={{
              background: gradientBgH1,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            FULL STACK
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: '60px', xl: '120px' }}
            sx={{
              background: gradientBgH2,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            DEVELOPER
          </Heading>

          <Text
            fontSize={{ base: '10px', xl: '16px' }}
            style={{
              padding: 5,
              color: '#607B96',

              fontFamily: "'Fira Code', monospace",
              fontWeight: 450,
            }}
          >
            // you can also see it on my Github page
          </Text>
          <Box display={'flex'} padding={2}>
            <Text
              fontSize={{ base: '10px', xl: '16px' }}
              style={{
                color: '#4D5BCE',
                fontFamily: "'Fira Code', monospace",
                fontWeight: 500,
                paddingRight: 7,
              }}
            >
              {'const '}
            </Text>
            <Text
              fontSize={{ base: '10px', xl: '16px' }}
              style={{
                color: '#43D9AD',
                fontFamily: "'Fira Code', monospace",
                fontWeight: 500,
                paddingRight: 7,
              }}
            >
              {' githubLink ='}
            </Text>
            <Link
              fontSize={{ base: '10px', xl: '16px' }}
              href="https://github.com/FacundoInza"
              isExternal
              style={{
                color: '#E99287',
                fontFamily: "'Fira Code', monospace",
                fontWeight: 500,
              }}
            >
              “https://github.com/FacundoInza”
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HeaderFS
