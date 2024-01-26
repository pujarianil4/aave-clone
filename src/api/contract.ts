import { poolABI } from "@/constants/abi"
import { getEtherContract } from "@/utils/helpers/ethers"

export const handleSupply = async ()=> {
    const contract = await getEtherContract('0x794a61358D6845594F94dc1DB02A252b5b4814aD', poolABI)
 console.log("contract", contract);
 
    const txs = await contract.supply('0xc2132D05D31c914a87C6611C10748AEb04B58e8F','100', '0x84c6d5Df8a5e3ab9859708dA7645cC58176a26C0', 0)

    return txs;
}