import { ShieldPlus } from 'lucide-react'
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
export default function Navbar() {
  return (
    <nav className="flex flex-row py-4 max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-4 justify-between items-center">
      <div className="flex items-start gap-2">
        <img
          src="solanaLogo.svg"
          alt="Solana wallet"
          className={`mobile:w-[200px] md:w-[250px]`}
        />
        <h3 className="mobile:text-[12px] text-sm md:scroll-m-20 md:text-md font-semibold tracking-tight">
          AirDrop
        </h3>
      </div>
      <div className="flex mobile:w-full mobile:justify-end justify-center items-center gap-4">
        <WalletMultiButton />
      </div>
    </nav>
  )
}
