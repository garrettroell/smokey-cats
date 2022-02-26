import { Box, Heading } from "@chakra-ui/react";
import OriginalArt from "../Assets/OriginalArt";
import Footer from "../footer/Footer";
import NavBar from "../NavBar/NavBar";

const TeamPage = () => {
  return ( 
    <>
      <NavBar />
      <Box maxW="1600px" m="auto" px="20px">
        <Heading fontSize="48px" mt="75px">Team Page</Heading>
      </Box>
      <Box textAlign="center" >
        <Box m="auto" maxW="50%" translateY='20vh'>
          <OriginalArt />
        </Box>
      </Box>
      <Footer />
    </>
   );
}
 
export default TeamPage;