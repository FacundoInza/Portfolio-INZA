import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { animateScroll as scroll } from 'react-scroll'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react'
import Logo from './Logo'
import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleThemeButton from './theme-toggle-button'
import style from './Navbar.module.css'

const Navbar = (props) => {
  const { path } = props

  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500, // Duración de la animación en milisegundos
      smooth: true, // Desplazamiento suave
      offset: -50, // Desplazamiento adicional (ajusta según tus necesidades)
    })
  }

  return (
    <Box
      as="nav"
      bg={'transparent'}
      zIndex={1}
      display={'flex'}
      justifyContent={'center'}
      className={isSticky ? style.sticky : ''}
      {...props}
    >
      <Container display={'flex'} p={2} maxW={'container.md'} wrap="wrap">
        <Logo />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          justifyContent={'space-around'}
          flexGrow={1}
          marginLeft={2}
        >
          <a onClick={() => scrollToSection('about')}>HOME</a>
          <a onClick={() => scrollToSection('skills')}>ABOUT</a>
          <a onClick={() => scrollToSection('projects')}>SKILLS</a>
          <a onClick={() => scrollToSection('contac')}>CONTACT</a>
          <ToggleThemeButton />
        </Stack>

        <Box flex={1} align={'right'}>
          <Box m={6} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label="Options"
              />
              <MenuList>
                <NextLink href={'/'}>
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href={'/'}>
                  <MenuItem>About</MenuItem>
                </NextLink>
                <NextLink href={'/'}>
                  <MenuItem>Projects</MenuItem>
                </NextLink>
                <NextLink href={'/'}>
                  <MenuItem>Contacs</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
