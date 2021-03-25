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


const ROPSTEN_PRIVATE_KEY = "665c5c10437cc1220b805b3b6d015c82f476e1d8144f08ba85840eddf4b903a5";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    dev: {
      url: `http://119.45.201.48:9933`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },
    moonbase: {
      url: `https://rpc.testnet.moonbeam.network`,
      chainId: 1287,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },
    local: {
      url: `http://127.0.0.1:9933`,
      chainId: 888,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }

};

