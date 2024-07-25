import React, { FC, useMemo } from 'react'
import Navbar from './Navbar'
import WalletContextProvider from './walletProvider'
import { Airdrop } from './Airdrop'

function App() {
  return (
    <WalletContextProvider>
      <main className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh] ">
        <Navbar />
        <div className="flex flex-col gap-4 items-center justify-center bg-slate-400 min-h-[200px] border rounded-md">
          <img
            src="https://faucet.solana.com/_next/static/media/solanaLogo.74d35f7a.svg"
            alt="Solana wallet"
            width="400px"
            height="400px"
          />
          <Airdrop />
        </div>
      </main>
    </WalletContextProvider>
  )
}

export default App
