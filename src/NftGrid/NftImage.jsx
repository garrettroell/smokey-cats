import { AspectRatio, Box, Button, Flex, Image, Link, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import smokeyCatData from "../Assets/smokeyCatData.json"
import {titleCase} from "../helpers/helpers.js"
import { mintSmokey } from "../util/interact";


const NFTImage = ({ tokenId, walletAddress, mintedURIs }) => {
  const toast = useToast()
  const toastIdRef = useRef()
  const [loading, setLoading] = useState(false);

  // Data Information
  const contentId = 'QmfVkTDjQDY9taFYu29WCb9cu7hRRfUJDckEbZWpBEosUy';
  const metadataURI = `${contentId}/${tokenId}.json`
  const imgUrl = new URL(`../Assets/images/${tokenId}.png`, import.meta.url).href
  
  // keep track of if the nft is minted
  const [isMinted, setIsMinted] = useState(false);
  useEffect(() => {
    // check if the metadata uri is in the list of minted URI's
    mintedURIs.includes(`ipfs://${metadataURI}`) ? setIsMinted(true) : setIsMinted(false)
  }, [mintedURIs]);

  // keep track of metadata
  const [metadata, setMetadata] = useState({});
  useEffect(() => {
    getMetaData() 
  }, []);

  async function getMetaData() {
    const tokenDataString = smokeyCatData[tokenId]
    const tokenData = JSON.parse(tokenDataString)
    setMetadata(tokenData)
  }

  async function mintToken () {
    if (walletAddress.length > 0) {
      console.log('mint button pressed', walletAddress, metadataURI)
      toast({
        title: 'Continue in the MetaMask window',
        description: 'Suggestion: Edit the details and set the gas fee priority to high',
        status: 'info',
        duration: null,
        isClosable: true,
    })
      setLoading(true)
      const result = await mintSmokey({
          signerAddress : walletAddress,
          metadataURI: metadataURI
        })
      setLoading(false)

      if (result.transactionHash) {
        setIsMinted(true)
        closeInfoToast()
        toast({
          title: 'Transaction completed successfully',
          description: <Link textDecoration="underline" target="_blank" href={'https://mumbai.polygonscan.com/tx/' + result.transactionHash}>See details on etherscan</Link>,
          status: 'success',
          duration: 5000,
          isClosable: true,
      })
      }
    } else {
      document.querySelector('#onboarding-button').click()
    }
  }

  // close info toast
  function closeInfoToast() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current)
    }
  }


  return ( 
    <>
      <Box p="5" maxW="320px" h="100%" mx="auto" borderWidth="1px" borderRadius='6px'>
        <a href={imgUrl}>
          <Box borderWidth={isMinted ? "0.7" : "1"} borderColor="#C53030">
            <Image 
              borderRadius="md" 
              src={imgUrl} 
              fallback={<AspectRatio maxW='560px' ratio={1}><Box bg="lightgray" borderRadius="md"></Box></AspectRatio>}
            />
          </Box>
        </a>
        <Stack direction="column" justify="space-between" h="150px">
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" textAlign='center'>
            #{tokenId + 1} {metadata?.name && titleCase(metadata?.name.replace('-', ' '))}
          </Text>

          {isMinted ? 
            <Flex h="40px" borderWidth="1px" justify="center" align="center"  bg="#C53030" color='white' borderRadius="6px" cursor="not-allowed">Minted</Flex> : 
            <Button colorScheme='teal' mt="20px" w="100%" onClick={mintToken}>
              {loading ? 
                <Spinner h="20px" w="20px" speed='2s'></Spinner> :
                'Mint (0.05 MATIC)'
              }
              </Button>
          }
        </Stack>
      </Box>
    </>
   );
}
export default NFTImage;