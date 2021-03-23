require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const ROPSTEN_PRIVATE_KEY = "0a052d705e5f027bb519f816b3622afc87bd0f833e739a1e3f7719adab6acd20";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    dev: {
      url: `http://119.45.201.48:9933`,
      chainId: 9909,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },
    moonbase: {
      url: `https://rpc.testnet.moonbeam.network`,
      chainId: 1287,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }

};

