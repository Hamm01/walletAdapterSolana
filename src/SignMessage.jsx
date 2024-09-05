import React, { useEffect, useRef, useState } from 'react'
import { ed25519 } from '@noble/curves/ed25519'
import { useWallet } from '@solana/wallet-adapter-react'
import bs58 from 'bs58'

const SignMessage = () => {
  const inputref = useRef(null)
  const [message, setMessage] = useState('')
  const wallet = useWallet()
  const { publicKey, signMessage } = wallet
  useEffect(() => {
    if (wallet.connected) {
      setMessage('')
      inputref.current.value = ''
    }
  }, [wallet])
  async function signmsg() {
    if (!publicKey && !signMessage & (inputref.current.value === '')) {
      throw new Error(
        'Wallet not connected! or signing message not available for wallet'
      )
      return
    }
    const encodeMessage = new TextEncoder().encode(inputref.current.value)
    const signature = await signMessage(encodeMessage)
    if (!ed25519.verify(signature, encodeMessage, publicKey.toBytes())) {
      throw new Error('Message signature invalid!')
    }
    setMessage(`Message signature: ${bs58.encode(signature)}`)
  }
  return (
    <div className="flex flex-col max-w-lg justify-start mobile:max-sm:w-full mobile:max-sm:px-6 p-10 border rounded-md ">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <h2 className="font-semibold mobile:text-lg mobile:max-md:text-center text-2xl tracking-normal">
          {' '}
          Signing Message using the wallet
        </h2>
        <div className="flex flex-col justify-start gap-2 p-2  min-w-full ">
          <label htmlFor="to" className="mobile:max-md:font-semibold">
            Message
          </label>
          <input
            ref={inputref}
            type="text"
            placeholder="Message"
            className="input_Amount"
          />
        </div>

        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-tr from-[#FF675E] via-[#FF44EC] to-[#44BCFF] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            onClick={signmsg}
            className="relative inline-flex items-center justify-center px-6 py-4 text-md font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Sign Message
          </button>
        </div>
        <div className="w-full overflow-hidden mt-4">
          {message && (
            <p className="text-red-500 text-sm font-normal ">{message}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignMessage
