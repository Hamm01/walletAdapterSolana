# Solana Wallet Connector

A React-based single page application to interact with Solana wallets (such as Phantom or Backpack) on the Devnet. This project demonstrates wallet connection, balance fetching, message signing, airdrop requests, and sending SOL to other addresses using the Solana blockchain.

## Features

- **Connect Solana Wallet:** Supports connecting to Solana wallets like Phantom or Backpack using the wallet adapter.
- **Fetch Wallet Balance:** Retrieve and display the SOL balance of the connected wallet.
- **Airdrop SOL:** Request airdrops (up to 2 SOL at a time) to the connected wallet on Devnet.
- **Send SOL:** Transfer SOL from the connected wallet to any other Solana address.
- **Sign Message:** Sign arbitrary messages using the connected wallet and verify the signature.

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/walletconnector.git
   cd walletconnector
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to `http://localhost:3000`.

## Usage

1. Connect your Solana wallet using the "Connect Wallet" button.
2. View your wallet balance, and use the "Airdrop SOL" button to request free SOL on Devnet.
3. Enter a recipient address and amount to send SOL to another address.
4. Sign messages and verify signatures using the provided functionality.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This project is maintained by [Your Name](https://github.com/your-username). For any questions or support, please open an issue on the GitHub repository.
