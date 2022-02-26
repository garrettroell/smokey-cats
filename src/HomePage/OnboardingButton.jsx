import { Box, Button, Spacer, useMediaQuery } from '@chakra-ui/react';
import MetamaskLogo from '../Assets/MetamaskLogo';
import { connectWallet } from '../util/interact';

export function OnboardingButton({ walletAddress, setWallet }) {

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    if (walletResponse !== ""){
      setWallet(walletAddress);
      location.reload()
    }
    
  };

  // styles
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

  return (
    <Button 
      onClick={connectWalletPressed}
      colorScheme='teal' 
      size={isLargerThan600 ? 'lg' : 'md'} 
      isDisabled={walletAddress !== ""} 
      id="onboarding-button"
    >
      {walletAddress.length > 0 ? (
        "Connected: " +
        String(walletAddress).substring(0, 6) +
        "..." +
        String(walletAddress).substring(38)
        ) : (
          'Connect Wallet'
      )} 
      <Spacer w="20px"></Spacer>
      <Box sx={{ transform: 'rotateY(180deg)' }}>
        <MetamaskLogo />
      </Box>
    </Button>
  );
}