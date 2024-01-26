import tokenLogos from '@/assets/tokenicons.json'

export const shortenAddress = (address: `0x${string}` | undefined) =>
  address && `${address.slice(0, 5)}....${address.slice(address.length - 4)}`;

 
  export function getTokenLogo(symbol: String) {
    const upperCaseSymbol = symbol.toUpperCase()
    if (tokenLogos[upperCaseSymbol]) {
      return tokenLogos[upperCaseSymbol]["logo"];
    } else {
      return "https://e7.pngegg.com/pngimages/407/710/png-clipart-ethereum-cryptocurrency-bitcoin-cash-smart-contract-bitcoin-blue-angle-thumbnail.png";
    }
  }

  export const decimalfixed = ( amount: number | string, decimals: number| string)=> {
    return (Number(amount)/ 10** Number(decimals)).toFixed(6);
  }