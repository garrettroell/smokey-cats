import { Tabs, Tab, TabList, Flex, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import NftGrid from "./NftGrid";
import {shuffle} from "../helpers/helpers.js"



const NftController = ({walletAddress,mintedURIs, setMintedURIs, isLargerThan1100, isLargerThan600 }) => {
  
  
  const [fullArray, setFullArray] = useState(Array.from(Array(180).keys()))
  const [index, setIndex] = useState(0)
  const [tokenArray, settokenArray] = useState(Array.from(Array(16).keys()))


  function shuffleNfts() {
    const shuffledArray = shuffle(fullArray)
    settokenArray(fullArray.slice(index*16, (index+1)*16))
    setFullArray(shuffledArray)
    console.log('shuffled')
  }


  function updateArray(_index) {
    setIndex(_index)
    settokenArray(fullArray.slice(_index*16, (_index+1)*16))
  }
  
  return ( 
    <>
      <Box  maxW='1240px' margin="auto" mt="50px" px="20px">
        <Button colorScheme="teal" onClick={() => shuffleNfts()}>Shuffle</Button>
      </Box>
      <NftGrid 
        tokenArray={tokenArray}
        walletAddress={walletAddress} 
        mintedURIs={mintedURIs} 
        setMintedURIs={setMintedURIs}
        isLargerThan1100={isLargerThan1100}
        isLargerThan600={isLargerThan600}
      />
      <Flex justify="center" my="30px">
        <Tabs variant='soft-rounded' colorScheme='teal' textAlign="center">
          {
            isLargerThan600 ?
            <TabList textAlign='center' padding='auto'>
              {
                [...Array(12).keys()].map(_index => {
                  return <Tab key={_index} onClick={() => {updateArray(_index)}}>{_index + 1}</Tab>
                })
              }
            </TabList> :
            <>
              <TabList textAlign='center' padding='auto' display="flex" justifyContent="space-between">
                {
                  [...Array(6).keys()].map(_index => {
                    return <Tab key={_index} onClick={() => {updateArray(_index)}}>{_index + 1}</Tab>
                  })
                }
              </TabList>
              <TabList textAlign='center' padding='auto'>
                {
                  [...Array(6).keys()].map(_index => {
                    return <Tab key={_index+6} onClick={() => {updateArray(_index+6)}}>{_index + 7}</Tab>
                  })
                }
              </TabList>
            </>
          }
        </Tabs>
      </Flex>
    </>
   );
}
 
export default NftController;