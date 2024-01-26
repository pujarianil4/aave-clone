import { fetchAccountData } from "@/api/axios";
import useWalletHook from "@/hooks/useWallet";
import { getUserDataQuery } from "@/utils/helpers/graphQueries";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from "react";
import Analytics from "../analytics";
import MainCard from "../cards";
import Navbar from "../navbar";

export default function Home() {
  const { address, isConnected, chain, chains } = useWalletHook();
  const graphQuery = getUserDataQuery(address);
  const [graphData, setGraphData] = useState<Object>({})

  const handleGraphCall = async ()=>{
    const data = await fetchAccountData(graphQuery);
    console.log("data", data, address, isConnected, chain, chains);
    setGraphData(data)
  }
  useEffect(()=> {
    handleGraphCall()
    
  }, [])
  return (
    <div>
     <Navbar/>
     <Analytics/>
     <MainCard data={graphData}/>
    </div>
  )
}
