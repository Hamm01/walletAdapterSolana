import React from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'

export default function SendSols() {
  const wallet = useWallet()
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
          <label htmlFor="from" className="pr-5">
            To
          </label>
          <input
            type="text"
            placeholder="Public Adress"
            className="input_Amount"
          />
        </div>

        <input
          type="number"
          placeholder="Amount"
          min="0"
          className="input_Amount"
        />
        <button className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-24 ">
          Send sol
        </button>
      </div>
    </div>
  )
}
