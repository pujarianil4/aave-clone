export const getUserDataQuery = (address: `0x${string}` | undefined) => {
    const query = `{
        account(id: "${address}") {
          deposits {
            amount
            amountUSD
            asset {
              name
              symbol
              type
              lastPriceBlockNumber
              lastPriceUSD
              id
              decimals
            }
            account {
              positions {
                id
              }
            }
          }
          borrows {
            amount
            amountUSD
            asset {
              decimals
              id
              lastPriceUSD
              lastPriceBlockNumber
              name
              symbol
              type
            }
            hash
            position {
              principal
              receivedCount
              isCollateral
            }
          }
        }
        tokens {
          symbol
          name
          lastPriceUSD
          lastPriceBlockNumber
          id
          decimals
          type
          _market {
            exchangeRate
            maximumLTV
            name
            totalDepositBalanceUSD
            totalBorrowBalanceUSD
            totalValueLockedUSD
          }
        }
      }
    `;
    return query;
}