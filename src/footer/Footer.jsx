import { Box, Button, Flex, Heading, Spacer, Text, Link, useColorModeValue, HStack } from "@chakra-ui/react";
import { addPolygonNetwork } from "../util/interact";
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return ( 
    <Box w="100vw" bg={useColorModeValue('#EEF2F6', '#2D313C')}>
      <Flex maxW="1200px" px="20px" h="50px" mx="auto" justify='space-between' align='center'>
        <Link href='https://garrettroell.com' _hover={{color: 'rgb(49, 151, 149)'}} isExternal>
          <Heading fontSize="14px">
            Garrett Roell {currentYear}
          </Heading>
        </Link>
        <HStack>
          <Button size='sm' py="1px" px="8px" h="28px" colorScheme='teal' fontSize="12px" onClick={() => {addPolygonNetwork()}}>
            <Text>🦊</Text>
            <Spacer w="8px"/>
            <Text>Add Polygon Network</Text>
          </Button>
          <Link href='https://github.com/garrettroell/smokey_cats' isExternal>
            <Button h="28px" w="28px" p="0px" variant="outline" borderColor={useColorModeValue("black", "white")}>
              <FiGithub color={useColorModeValue("black", "white")}/>
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
   );
}
 
export default Footer;