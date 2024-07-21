import React, { FC, useMemo } from 'react'
import WalletHome from './walletHome'
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'

function App() {
  return (
    <WalletHome>
      <div>
        <h1>Wallet adapter functions</h1>
      </div>
    </WalletHome>
  )
}

export default App
