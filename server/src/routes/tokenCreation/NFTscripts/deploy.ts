const { ethers } = require("hardhat");

//method to create token
export default async function deployToken(name: String, symbol: String, decimal: number, supply: number) {
  //creates an instance of contract ST_BASIC_TOKEN. Converts contract code to bytecode
  const contractInstance = await ethers.getContractFactory("ST_Basic_Token");
  console.log(name, symbol, decimal, supply);
  // Start deployment, returning a promise that resolves to a contract object
  //deployed it with the specified fields
  const deployedContract = await contractInstance.deploy(name, symbol, decimal, supply);

  // console.log("Contract deployed to address:", deployedContract.address);

  return { address: deployedContract.address };
}
