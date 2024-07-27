import React from 'react'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

import '@solana/wallet-adapter-react-ui/styles.css'
const alchemyDevnetUrl = import.meta.env.VITE_SOL_DEV_ALCHEMY_URL // Rpc endpoint
export default function WalletContextProvider({ children }) {
  return (
    <div>
      <ConnectionProvider endpoint={alchemyDevnetUrl}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}
