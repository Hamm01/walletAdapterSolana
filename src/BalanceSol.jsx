import React, { useEffect, useState } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
export default function BalanceSol() {
  const wallet = useWallet()
  const { connection } = useConnection()
  const [btndisabled, setbtndisabled] = useState(true)
  const [balance, setBalance] = useState('')
  useEffect(() => {
    if (wallet.connected) {
      setBalance('')
      setbtndisabled(false)
    } else {
      setbtndisabled(true)
    }
  }, [wallet])
  async function chkBalance() {
    if (!wallet.connected) {
      return
    }
    const lamports = await connection.getBalance(wallet.publicKey)
    const newBalance = lamports / LAMPORTS_PER_SOL
    const formatBalance = new Intl.NumberFormat('en-us', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(newBalance)
    setBalance(formatBalance)
  }
  return (
    <div className="flex flex-col items-center justify-center rounded-md gap-4 max-w-[300px] p-10 bg-gradient-to-tr from-purple-400 to-teal-500 overflow-hidden">
      <div className="rounded-full bg-white  px-10 py-10  bg-gradient-to-b from-gray-200 to-gray-300 ">
        <div className="flex px-10 py-10 justify-center items-center">
          <Tooltip content="Devnet Tokens">
            <p className="iceland text-3xl text-black text-secondary tracking-tighter absolute cursor-pointer">
              {' '}
              {balance ? balance : '0.00'}{' '}
              <span className="text-2xl font-semibold tracking-normal">
                SOL
              </span>{' '}
            </p>
          </Tooltip>
        </div>
      </div>

      <Tooltip content="Your Wallet Address">
        <input
          className="public_Address_input font-semibold truncate "
          value={
            wallet?.publicKey
              ? wallet?.publicKey?.toBase58()
              : 'Your Wallet Address ...'
          }
          readOnly
        ></input>
      </Tooltip>

      <button
        onClick={chkBalance}
        disabled={btndisabled}
        className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-64 "
      >
        Check Wallet balance
      </button>
    </div>
  )
}
