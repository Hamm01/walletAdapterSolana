import React from 'react'

export const Airdrop = () => {
  return (
    <div className="flex flex-col md:w-[600px] lg:w-[800px] p-4">
      <h2 className="font-semibold text-2xl text-center">
        {' '}
        Solana Airdrop Faucet
      </h2>
      <div className="p-6  flex flex-row space-x-2">
        <input type="number" className="input_Amount" placeholder="Amount" />
        <button className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-32">
          Confirm Airdrop
        </button>
      </div>
    </div>
  )
}
