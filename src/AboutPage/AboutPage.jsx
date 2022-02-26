import { Box, Heading, Image, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import allSmokeys from'../Assets/allSmokeys.png';
import Footer from "../footer/Footer";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import smokeyPhoto from '../Assets/smokeyPhoto.png'

const AboutPage = () => {
  return ( 
    <>
      <NavBar />
      <Box maxW="1200px" m="auto" px="5px">
        <Heading fontSize="48px" mt="75px">FAQs</Heading>
        <Accordion allowMultiple mt="50px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">What is the inspiration for Smokey Cats?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The Smokey Cats Project is dedicated to my green-eyed grey cat, <a href={smokeyPhoto} target="_blank">Smokey<ExternalLinkIcon mx='2px' /></a>.
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">What is an NFT?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              A non-fungible token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded. 
              Types of NFT data units may be associated with digital files such as photos, videos, and audio. Because each token is uniquely identifiable, 
              NFTs differ from blockchain cryptocurrencies, such as Bitcoin. (<a href="https://en.wikipedia.org/wiki/Non-fungible_token" target="_blank">Wikipedia<ExternalLinkIcon mx='2px' /></a>)
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">What does it mean to mint an NFT?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              When an NFT is added to a block chain it is said to be 'minted.' Each NFT can only be minted once, and the smokey cats smart contract defines that
              only 180 smokeys will be minted.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">What do I need to mint a Smokey Cat NFT?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              You will need a MetaMask wallet with at least 0.06 MATIC tokens on the Matic Mainnet.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">What is MetaMask?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. 
            It allows users to access their Ethereum wallet through a browser extension or mobile app, 
            which can then be used to interact with decentralized applications. (<a href="https://en.wikipedia.org/wiki/MetaMask" target="_blank">Wikipedia<ExternalLinkIcon mx='2px' /></a>)
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">How can I get a MetaMask wallet?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Metamask is a browser extension that can be downloaded for free <a href="https://metamask.io/download/" target="_blank">here<ExternalLinkIcon mx='2px' /></a>. When you download the extension you will get a free wallet. 
              Check out this <a href="https://www.youtube.com/watch?v=ZIGUC9JAAw8" target="_blank">Video Tutorial<ExternalLinkIcon mx='2px' /></a> for detailed instructions.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">What is MATIC?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
             MATIC is the native token of Polygon network.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">What is the Polygon network?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Polygon is a sidechain based scaling solution for public blockchains. It is based on an adapted implementation of Plasma framework. 
              Polygon provides scalability while ensuring a superior user experience in a secured and decentralized manner. It has a working 
              implementation for Ethereum on Kovan Testnet. Polygon intends to support other blockchains in the future which will enable it to 
              provide interoperability features alongside offering scalability to existing public blockchains.
                (<a href="https://docs.polygon.technology/docs/home/faq" target="_blank">Polygon documentation<ExternalLinkIcon mx='2px' /></a>)
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <Heading fontSize="16px">How can I get MATIC tokens on the Matic Mainnet?</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The easiest way is to have a friend send MATIC to you.
              <br></br>
              <br></br>
              Alternatively I've found that <a href="https://crypto.com" target="_blank">crypto.com<ExternalLinkIcon mx='2px' /></a> has the lowest fees.
              Also unlike Coinbase it allows you to transfer MATIC to the Polygon network. 
              <br></br>
              <br></br>
              I do not recommend the Ethereum to Polygon Bridge because it has fees that cost roughly $30-$100. 
              <br></br>
              <br></br>
              I am considering on working a MATIC faucet that will allow wallets to collect a one time transfer of enough MATIC (roughly the equivalent of $0.20 USD) to mint one Smokey Cat NFT.
            </AccordionPanel>
          </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              <Heading fontSize="16px">What can I do with a Smokey Cat NFT?</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          You can display and auction it on an NFT marketplace such as {' '}
          <a href="https://opensea.io" target="_blank">opeansea.io<ExternalLinkIcon mx='2px' /></a>. Here is the Smokey Cats 
          collection <a href="https://opensea.io/collection/smokeycats" target="_blank">(Smokey Cats)<ExternalLinkIcon mx='2px' /></a>.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </Box>
      
      <Box  maxW='1200px' px="5px" margin='auto' my="60px">
        <Heading fontSize="24px">Smokey Collage</Heading>
        <Image src={allSmokeys} alt='Image of all smokeys' mt="10px"/>
      </Box>
      <Footer />
    </>
   );
}
 
export default AboutPage;