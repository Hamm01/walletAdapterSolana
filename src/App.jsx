import React, { FC, useMemo } from 'react'
import Navbar from './Navbar'
import WalletHome from './walletHome'

function App() {
  return (
    <WalletHome>
      <main className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh] ">
        <Navbar />
      </main>
    </WalletHome>
  )
}

export default App
