import useWalletHook from "@/hooks/useWallet";
import { shortenAddress } from "@/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import "./index.scss";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { disconnect} from  'wagmi/actions'

export default function Navbar() {
  const { address, isConnected } = useWalletHook();
  return (
    <div className="navbar_container">
      <div className="logo">
        <img src="https://app.aave.com/aaveLogo.svg" alt="logo" />
      </div>
   
   { isConnected && address ?  <Popover>
        <PopoverTrigger className="account_info">
          <p>{shortenAddress(address)}</p>
        </PopoverTrigger>
        <PopoverContent className="account_popover">
          <div className="account_popover_div">
            <div>
              <h3>{shortenAddress(address)}</h3>
              <button onClick={disconnect}>Disconnect</button>
            </div>
            <p>Copy Address</p>
            <p>View on explorer</p>
          </div>
        </PopoverContent>
      </Popover>
  : <ConnectButton/>
      }
    </div>
  );
}
