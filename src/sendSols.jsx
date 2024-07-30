import React, { useEffect, useState } from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction
} from '@solana/web3.js'
export default function SendSols() {
  const [amount, setAmount] = useState('')
  const [toAddress, setToAddress] = useState('')
  const [message, setMessage] = useState('')
  const wallet = useWallet()
  const { connection } = useConnection()
  useEffect(() => {
    if (wallet.connected) {
      setMessage('')
      setAmount('')
      setToAddress('')
    }
  }, [wallet])
  async function Transfer() {
    try {
      if (toAddress && amount > 0 && wallet?.publicKey) {
        const transaction = new Transaction()
        transaction.add(
          SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(toAddress),
            lamports: amount * LAMPORTS_PER_SOL
          })
        )
        await wallet.sendTransaction(transaction, connection)
        setMessage(
          `Successful Transfer of ${amount} Sol to address ${toAddress}`
        )
        setToAddress('')
      }
    } catch (err) {
      setMessage(`Failed Transfer`)
      setToAddress('')
      throw err
    }
  }

  return (
    <div className="flex flex-col max-w-xl border rounded-md p-10">
      <div className="flex justify-center pb-4">
        <h2 className="text-2xl font-semibold text-center">
          Transfer Your Tokens
        </h2>
      </div>
      <div className="flex items-center pb-2 gap-3">
        <label htmlFor="from">From</label>
        <p className="input_Amount">
          {wallet?.publicKey
            ? wallet?.publicKey?.toBase58()
            : 'Your Wallet Address'}
        </p>
      </div>
      <div className="inputBox flex flex-col gap-4">
        <div className="inputGroup flex items-center gap-3">
          <label htmlFor="to" className="pr-5">
            To
          </label>
          <input
            type="text"
            placeholder="Public Adress"
            className="input_Amount"
            value={toAddress}
            onChange={e => setToAddress(e.target.value)}
          />
        </div>

        <input
          type="number"
          placeholder="Amount"
          min="0"
          className="input_Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button
          className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-24 "
          onClick={Transfer}
        >
          Send SOL
        </button>
        {message && (
          <p className="text-red-500 text-sm font-normal">{message}</p>
        )}
      </div>
    </div>
  )
}
