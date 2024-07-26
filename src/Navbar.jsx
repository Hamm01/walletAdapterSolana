import { ShieldPlus } from 'lucide-react'
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
export default function Navbar() {
  return (
    <nav className="flex flex-row py-4 justify-between items-center">
      <div className="flex items-start gap-2">
        <img
          src="solanaLogo.svg"
          alt="Solana wallet"
          width="250px"
          height="250px"
        />
        <h3 className="scroll-m-20 text-md font-semibold tracking-tight">
          AirDrop
        </h3>
      </div>
      <div className="flex justify-center items-center gap-4">
        <WalletMultiButton />
      </div>
    </nav>
  )
}
