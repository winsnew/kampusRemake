import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import DarkMode from './darkMode'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)'}}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="100%"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            N0T SIADIN
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/Notif" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/Notif" path={path}>
            ContactUs
          </LinkItem>
          <LinkItem href="/Notif" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/Notif" path={path}>
            Logout
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <DarkMode />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  DarkMode
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Notifcation
                </MenuItem>
                <MenuItem as={MenuLink} href="/">
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Navbar
