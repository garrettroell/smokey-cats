import { Box, Button, Flex, Heading, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { addPolygonNetwork } from "../util/interact";

const Footer = () => {
  return ( 
    <Box w="100vw" bg={useColorModeValue('#EEF2F6', '#2D313C')}>
      <Flex maxW="1200px" px="20px" h="50px" mx="auto" justify='space-between' align='center'>
        <Heading fontSize="14px" >Garrett Roell 2022</Heading>
        <Button size='sm' py="1px" px="8px" h="28px" colorScheme='teal' fontSize="12px" onClick={() => {addPolygonNetwork()}}>
          <Text>🦊</Text>
          <Spacer w="8px"/>
          <Text>Add Polygon Network</Text>
        </Button>

      </Flex>
    </Box>
   );
}
 
export default Footer;