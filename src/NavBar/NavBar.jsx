import { Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

const NavBar = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

  return ( 
    <Flex maxW="1600px" h="75px" m="auto" px="20px" justify='space-between' align='center'>
      <Heading><Link to="/">Smokey Cats</Link></Heading>
      {isLargerThan600 
      ? <Flex justify='right' align='center' gap="30px" >
          <Link to="/about"><Text fontSize="20px">About</Text></Link>
          <Button  onClick={toggleColorMode} w='15px' h='40px' p="0">
            {colorMode === 'light' ? <MoonIcon w={4} h={4} p="0" /> : <SunIcon w={4} h={4} px="0" />}
          </Button>
        </Flex>
      : <Menu>
          <MenuButton as={Button}>
            <HamburgerIcon w={6} h={6} />
          </MenuButton>
          
          <MenuList>
            <Link to="/about"><MenuItem>About</MenuItem></Link>
            <MenuItem onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}</MenuItem>
          </MenuList>
        </Menu>
      }
    </Flex>
   );
}
 
export default NavBar;