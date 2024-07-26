import React, { FC, useMemo } from 'react'
import Navbar from './Navbar'
import WalletContextProvider from './walletProvider'
import { Airdrop } from './Airdrop'
import { Footer } from './footer'

function App() {
  return (
    <div className="bg_color_body text-white w-screen h-screen ">
      <WalletContextProvider>
        <main className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh] ">
          <Navbar />
          <div className="flex flex-col gap-4 items-center justify-center min-h-[300px] border rounded-md">
            <Airdrop />
          </div>
          <div className="pointer-events-none fixed top-1/4 mb-20 ml-32 right-1/4 -translate-x-1/2 translate-y-1/2 w-52 h-28 bg-fuchsia-500/80 blur-[120px]"></div>
        </main>
        <Footer />
      </WalletContextProvider>
    </div>
  )
}

export default App
