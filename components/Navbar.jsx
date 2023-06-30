import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {
  Box,
  Container,
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
import { motion } from 'framer-motion'

const Navbar = (props) => {
  const { path } = props

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navbarVariants = {
    scrolled: {
      position: 'sticky',
      top: 0,
      backdropFilter: 'blur(50px)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
    normal: {
      backdropFilter: 'blur(0px)',
      backgroundColor: 'transparent',
      transition: {
        duration: 2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <motion.nav
        as="nav"
        initial={isScrolled ? 'scrolled' : 'normal'}
        animate={isScrolled ? 'scrolled' : 'normal'}
        variants={navbarVariants}
        style={{
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: 2,
          maxWidth: 'container.md',
          flexWrap: 1,
        }}
        {...props}
      >
        <Box display={'flex'} width={'50%'}>
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
            <Link to="about" smooth={true} duration={500}>
              <button>ABOUT</button>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <button>SKILLS</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button>PROJECTS</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button>CONTACT</button>
            </Link>
            <ToggleThemeButton />
          </Stack>
        </Box>

        <Box
          flex={1}
          display={{ base: 'inline-block', md: 'none' }}
          align={'right'}
        >
          <Box m={6} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label="Options"
              />
              <MenuList>
                <Link to={'home'} smooth={true} duration={500}>
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link to={'about'} smooth={true} duration={500}>
                  <MenuItem>About</MenuItem>
                </Link>
                <Link to={'projects'} smooth={true} duration={500}>
                  <MenuItem>Projects</MenuItem>
                </Link>
                <Link to={'contacs'} smooth={true} duration={500}>
                  <MenuItem>Contacs</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </motion.nav>
    </>
  )
}

export default Navbar
