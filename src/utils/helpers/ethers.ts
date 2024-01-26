import { type WalletClient, type PublicClient } from "wagmi";

import { getPublicClient, getWalletClient, getNetwork } from "wagmi/actions";
import { providers, ethers } from "ethers";
import { type HttpTransport } from "viem";

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === "fallback")
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network)
      )
    );
  return new providers.JsonRpcProvider(transport.url, network);
}

/** Action to convert a viem Public Client to an ethers.js Provider. */
export function getEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = getPublicClient({ chainId });
  return publicClientToProvider(publicClient);
}

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;

  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };

  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { chain } = getNetwork();
  const walletClient = await getWalletClient({ chainId: chainId || chain?.id });
  if (!walletClient) return undefined;
  return walletClientToSigner(walletClient);
}

export async function getEtherContract(
  address: any,
  abi: any,
  chainId?: number
) {
  const signer = await getEthersSigner({ chainId });

  const contract = new ethers.Contract(address, abi, signer);

  return contract;
}

export const getEtherContractWithProvider = (
  address: any,
  abi: any,
  chainId: number
) => {
  const pro = getEthersProvider({ chainId: chainId });
  const contract = new ethers.Contract(address, abi, pro);
  return contract;
};
