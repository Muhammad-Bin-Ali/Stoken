# School Wallet Version 0.1.0

Stoken is our proposed solution to tackle the ambiguitiy of SHSM certifications. Through the power of NFTs and the XDAI Blockchain, stoken aims to digitalize SHSM certifications, giving students a concrete way to measure their progress through their respective SHSM Program. However, in our current implementation, only one school can use our server, and the school's SHSM supervisors must share one collective wallet. Whilst this makes it easier for administration to keep track of spending, it does pose difficulties when it comes to scalability. 

With that being said, students can individually view their tokens via the AlphaWallet app. Since XDAI is an Ethereum based blockchain, it can integrate perfectly with AlphaWallet.

Backend:
Our current backend is based off of the express.js framework, allowing us to use JavaScript to create a REST API. For our database, we're taking advantage of mongoDB Atlas, and for NFT creation, we've integrated hardhat.js and ether.js, allowing us to use our ERC-20 based smart contract to create tokens upon HTTP request.

Frontend:
The frontend is developed on React.js. It has also been integrated with tailwind.js for a much more streamlined and effecient styling process. 

Future Goals:
1. Refactor files that are responsible for NFT creation. We need to replace ethers.js with Web3.js to allow for Metamask integration. Metamask will allow us to dyanmically change the wallet that will be used for the required transaction fees. This way, any one can issue tokens via our application, as opposed to just the user who's wallet's ID has been coded into the backend. 
2. Work on user interface. Make it responsive for mobile application and add animcations and prompts for a better user experience.

Commands to run before running server (ensure you have yarn installed):
1. yarn <= installs dependencies
2. npx hardhat compile <= compiles hardhat contract
3. yarn start <= runs server

Commands to run before runnning client:
1. yarn <= installs dependencies
2. yarn build:tailwind <= builds tailwind css file
3. yarn start <= runs client
