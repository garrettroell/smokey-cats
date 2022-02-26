import contractABI from "../artifacts/contracts/MyNFT.sol/SmokeyCats.json";

const alchemyKey = import.meta.env.VITE_REACT_APP_ALCHEMY_KEY;
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

// comes from global object brought in by script in index.html
const web3 = AlchemyWeb3.createAlchemyWeb3(alchemyKey);

const smokeyCatsContract = new web3.eth.Contract(
  contractABI.abi,
  contractAddress
);

export const loadCurrentCount = async () => {
  const count = await smokeyCatsContract.methods.count().call();
  return count;
};

export const loadTokenURI = async (tokenId) => {
  const tokenURI = await smokeyCatsContract.methods
    .tokenURI([tokenId])
    .call({ from: import.meta.env.VITE_CONTRACT_ADDRESS });
  return tokenURI;
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return addressArray[0];
    } catch (err) {
      return "";
    }
  } else {
    window.open("https://metamask.io/download.html", "_blank");
    return "";
  }
};
export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return addressArray[0];
      } else {
        return "";
      }
    } catch (err) {
      return "";
    }
  } else {
    return "";
  }
};

export const mintSmokey = async ({ signerAddress, metadataURI }) => {
  console.log(signerAddress, metadataURI);
  if (!window.ethereum || signerAddress === null) {
    return "Connect your Metamask wallet to mint a smokey";
  }

  try {
    const result = await smokeyCatsContract.methods
      .payToMint(signerAddress, metadataURI)
      .send({
        from: signerAddress,
        value: web3.utils.toWei("0.05", "ether"),
      });

    return result;
  } catch (e) {
    return e;
  }
};

// async function addPolygonNetwork(type) {
export const addPolygonNetwork = async () => {
  if (window.ethereum) {
    try {
      let accounts = await web3.eth.getAccounts();
      if (accounts[0]) {
        let netId = await web3.eth.net.getId();
        console.log(netId);
        if (netId == "137") {
          alert("Polygon Network has already been added to Metamask.");
          return;
        } else {
          let params = [
            {
              chainId: "0x89",
              chainName: "Matic Mainnet",
              nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
              },
              rpcUrls: ["https://polygon-rpc.com/"],
              blockExplorerUrls: ["https://polygonscan.com/"],
            },
          ];
          window.ethereum
            .request({ method: "wallet_addEthereumChain", params })
            .then(() => console.log("Success"))
            .catch((error) => console.log("Error", error.message));
        }
      } else {
        document.querySelector("#onboarding-button").click();
      }
    } catch (err) {
      return "";
    }
  } else {
    window.open("https://metamask.io/download.html", "_blank");
    return "";
  }
};
