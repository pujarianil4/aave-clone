
import { useAccount, useNetwork } from 'wagmi'

export default function useWalletHook() {
    const { address, isConnected } = useAccount()
    const { chain, chains} = useNetwork()
  return { address, isConnected, chain, chains }
}
