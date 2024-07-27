import React, { useState, useEffect } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

export const Airdrop = () => {
  const [amount, setAmount] = useState('')
  const [message, setmessage] = useState('')
  const [btndisabled, setbtndisabled] = useState(true)
  const wallet = useWallet()
  const { connection } = useConnection()

  useEffect(() => {
    if (wallet.publicKey) {
      setbtndisabled(false)
      setmessage('')
    } else {
      setmessage('Connect Your wallet to airdrop Solana*')
    }
  }, [wallet])

  async function RequestAirdrop() {
    setmessage('')
    if (amount <= 2 && wallet.publicKey) {
      await connection.requestAirdrop(
        wallet.publicKey,
        amount * LAMPORTS_PER_SOL
      )
      setmessage(
        `Airdropped the ${amount} sol to the wallet address ${wallet.publicKey.toBase58()}`
      )
    } else {
      setmessage(`You cannnot request more than 2 sols at a single time `)
    }
  }

  return (
    <div className="flex flex-col md:w-[600px] lg:w-[800px] p-4">
      <h2 className="font-semibold text-2xl text-center tracking-normal ">
        {' '}
        Solana Devnet Airdrop Faucet
      </h2>
      <div className="p-6  flex flex-row space-x-2">
        <input
          type="number"
          className="input_Amount"
          placeholder="Amount"
          onChange={e => setAmount(e.target.value)}
        />
        <button
          onClick={RequestAirdrop}
          disabled={btndisabled}
          className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-32 "
        >
          Confirm Airdrop
        </button>
      </div>
      <div className="p-6 space-x-2 text-center">
        {message && (
          <p className=" text-md tracking-normal text-red-500">{message}</p>
        )}
      </div>
    </div>
  )
}
