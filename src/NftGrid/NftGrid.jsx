import { Box, SimpleGrid } from "@chakra-ui/react";

import NFTImage from "./NftImage";

const NftGrid = ({tokenArray, walletAddress,mintedURIs, setMintedURIs, isLargerThan1100, isLargerThan600 }) => {

  function numCols() {
    if (isLargerThan1100) {
      return 4
    } else if (isLargerThan600) {
      return 2
    } else {
      return 1
    }
  }

  return ( 
    <>
    <SimpleGrid mt="20px" mx="auto" px="20px" maxW='1240px' columns={numCols()} spacing={10} id="nft-grid">
        {
          tokenArray?.map(tokenId => {
            return (
              <Box key={tokenId}>
                <NFTImage 
                  tokenId={tokenId}
                  walletAddress={walletAddress} 
                  mintedURIs={mintedURIs} 
                  setMintedURIs={setMintedURIs} 
                />
              </Box>
            )
          })
        }
      </SimpleGrid>
      
      </>
   );
}
 
export default NftGrid;