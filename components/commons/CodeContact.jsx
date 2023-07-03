import { Box, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { obtenerFechaActual } from '../../utils'

const CodeContact = () => {
  const actualDate = obtenerFechaActual()
  return (
    <Box
      width={{ base: '100%', lg: '50%' }}
      height={{ base: '50%', lg: '100%' }}
    >
      <Heading fontSize={{ base: 40, md: 56 }} marginBottom={10}>
        Contact Me
      </Heading>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 15,
          }}
        >
          {'1'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#C98BDF',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {'const '}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {'button'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {'='}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'document.querySelector'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'('}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#FEA55F',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {`"#sedBtn"`}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {');'}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 15,
          }}
        >
          {'2'}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 15,
          }}
        >
          {'3'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#C98BDF',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {'const '}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {'button'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {'='}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'{'}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'4'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'name'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {':'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#FEA55F',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {`"Facundo Inza"`}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {','}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'5'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'email'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {':'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#FEA55F',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {`"facundoinza5@gmail.com"`}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {','}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'6'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'message'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {':'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#FEA55F',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {`"If you want to contact me to collaborate with a project , or answer questions about the projects I have created . Send me an email my email address or for a faster response to my cell phone.",`}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'7'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'date'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {':'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#FEA55F',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {`"${actualDate}",`}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'8'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 12,
          }}
        >
          {'}'}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'9'}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 15,
          }}
        >
          {'10'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'button.addEventListener'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 2,
          }}
        >
          {'('}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#FEA55F',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 8,
          }}
        >
          {`"Click",`}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 8,
          }}
        >
          {'()'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#FEA55F',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 8,
          }}
        >
          {`=>`}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 8,
          }}
        >
          {'{'}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'11'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'form.send'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'('}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#4D5BCE',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'message'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {');'}
        </Text>
      </Box>
      <Box display={'flex'}>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
            paddingRight: 50,
          }}
        >
          {'12'}
        </Text>
        <Text
          fontSize={{ base: '10px', lg: '18px' }}
          style={{
            color: '#607B96',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 500,
          }}
        >
          {'})'}
        </Text>
      </Box>
    </Box>
  )
}

export default CodeContact
