# ChainCerts

ChainCerts is a blockchain-powered decentralized application (DApp) designed for issuing and retrieving digital certificates. Built using smart contracts, ChainCerts provides a secure and immutable way to manage certifications for educational institutions, training programs, and more.

## 🎯 Purpose

ChainCerts is designed to allow educational institutions or other organizations to issue tamper-proof certificates on the blockchain. Users can retrieve certificates by providing the certificate ID, ensuring trust, transparency, and decentralization.

## 🛠️ Built With

   <img src="https://skillicons.dev/icons?i=react,tailwind,nodejs,solidity,metamask"/>

## 📢 Prerequisites

- **Node.js** : Ensure you have Node.js installed (v16.x recommended).
- **Metamask** : A browser extension to interact with Ethereum-based applications.

## ⚙️ Run Locally

Clone the ChainCerts App from

```
https://github.com/nandhuraju/ChainCerts.git

```
cd ChainCerts

Install dependencies

```
npm install
```


Add a main network to hardhat.config.

- For example using sepolia and infura
- Add your api key for your sepolia from infura
- Add your metamask private key

Update hardhat.config.js

```
module.exports = {
defaultNetwork:"infurasepolia",
networks: {
localhost: {
url:"http://127.0.0.1:8545/"
},
infurasepolia: {
url :"your api key of infura or any other accounts",
accounts:["your metamask private key"]
}
},
solidity: "0.8.20",
};
```


open open terminal and run

```
npx hardhat node
```
open another terminal in vscode (ctrl+shift+`)

```
npx hardhat ignition deploy ignition/modules/Cert.js

```
After successful deployment

copy Cert.json from contracts/Cert.sol to scdata
copy deployed_addresses.json to scdata

open another terminal in vscode (ctrl+shift+`)

cd ui

```
npm run dev
```

- Connect your metamask
- Enter details
- Issue certificate
- Make payment in metamask

## 📦 Planned Updates

Improved UI/UX.
MetaMask integration for certificate verification.
Compatibility with mobile devices.
Desktop application for certificate management.

## 🎗️ Contributing

Contributions are welcome! Feel free to fork the project and submit a pull request. Make sure to follow the steps below:

1. Fork the Project.
2. Create a Feature Branch (git checkout -b feature/<feature_name>).
3. Commit your changes (git commit -m 'Add <feature_name>').
4. Push to the branch (git push origin feature/<feature_name>).
5. Open a Pull Request.
