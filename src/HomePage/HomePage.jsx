import { useEffect, useState } from 'react';
import { Box, Heading, Text, Stack, Button, useMediaQuery } from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom';
import PawAnimation from './pawAnimation/pawAnimation';
import { loadCurrentCount, loadTokenURI, getCurrentWalletConnected } from '../util/interact.js'
import { OnboardingButton } from './OnboardingButton';
import NftController from '../NftGrid/NftController';
import Footer from '../footer/Footer';

const HomePage = () => {

  // keep track of wallet
  const [walletAddress, setWallet] = useState("");

  useEffect(async () => {

    const address = await getCurrentWalletConnected();
    setWallet(address);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
    }
  }

  // get the URI's that have already been minted
  const [mintedURIs, setMintedURIs] = useState([]);
  useEffect(async () => {
    const count = await loadCurrentCount();

    let _mintedURIs = await Promise.all(Array(parseInt(count)).fill(0).map( async (_, index) => {
      const uri = await loadTokenURI(index);
      return uri
    }))

    setMintedURIs(_mintedURIs)
  }, []);

  // handle dynamic styles
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
  const [isLargerThan1100] = useMediaQuery('(min-width:1100px)')
  const [isLargerThan1920] = useMediaQuery('(min-width: 1920px)')
  const [showAnimation, setshowAnimation] = useState(true);

  return ( 
    <>
      <NavBar />
      {showAnimation && <Box w="100vw" h="100vh" m="auto" position='absolute' top="0px" pointerEvents='none' zIndex='1'> 
        <PawAnimation />
      </Box>
}
      <Box 
        h={isLargerThan1920 ? "765px" : "calc(100vh - 75px);"} 
        width={isLargerThan1920 ? "1920px" : "100vw"} 
        margin='auto'
        position='relative'
      >
        <Box maxW="1600px" m="auto" px="20px" textAlign="center" pt={isLargerThan1920 ? "185px" : "23vh"}>
          <Heading fontSize={isLargerThan600 ? "48px" : "28px"} zIndex='2'>Hello Smokey</Heading>
          <Text fontSize={isLargerThan600 ? "18px" : "16px"} maxW="700px" margin='auto' mt="20px">Smokey Cats are a collection of 180 NFTs-unique digital collectibles living on the Polygon blockchain. Mint one today!</Text>
          <Stack direction="row" spacing={4} mt="40px" justify="center">
            <a href="#nft-grid"><Button size={isLargerThan600 ? 'lg' : 'sm'} colorScheme='teal'>Mint a new token</Button></a>
            <Link to="/about"><Button size={isLargerThan600 ? 'lg' : 'sm'}>Learn about project</Button></Link>
          </Stack>
        </Box>
        <Button position="absolute" left="0px" bottom="0px" size="sm" color='darkgray' fontSize='11px' 
          onClick={() =>{setshowAnimation(!showAnimation)}}
        >
          {showAnimation ? 'Disable animation' : 'Enable animation'}
          </Button>
        <Box position="absolute" bottom="20px" left={isLargerThan1920 ? '1600px' : ''} right={isLargerThan1920 ? '' : '20px'}>
          <OnboardingButton walletAddress={walletAddress} setWallet={setWallet} />
        </Box>
      </Box>

      <NftController
        walletAddress={walletAddress} 
        mintedURIs={mintedURIs} 
        setMintedURIs={setMintedURIs}
        isLargerThan1100={isLargerThan1100}
        isLargerThan600={isLargerThan600}
      />
      <Footer />
    </>
   );
}
 
export default HomePage;