const { ethers } = require("hardhat");

export default async function deployToken(name: String, symbol: String, decimal: number, supply: number) {
  //creates an instance of contract ST_BASIC_TOKEN
  const contractInstance = await ethers.getContractFactory("ST_Basic_Token");
  // Start deployment, returning a promise that resolves to a contract object
  //deployed it with the specified fields
  const deployedContract = await contractInstance.deploy(name, symbol, decimal, supply);

  // console.log("Contract deployed to address:", deployedContract.address);

  return { address: deployedContract.address };
}
