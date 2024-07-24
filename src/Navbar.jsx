import { ShieldPlus } from 'lucide-react'
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
export default function Navbar() {
  return (
    <nav className="flex flex-row py-4 justify-between items-center">
      <div className="flex items-start gap-2">
        <h3 className="righteous-regular scroll-m-20 text-4xl font-semibold tracking-tight">
          WalletConnector
        </h3>
      </div>
      <div className="flex justify-center items-center gap-4">
        <WalletMultiButton />
      </div>
    </nav>
  )
}
