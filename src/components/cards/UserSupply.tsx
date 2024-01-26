
import { decimalfixed, getTokenLogo } from '@/utils';
import { useEffect, useState } from 'react';
import { handleSupply } from '@/api/contract';
import './index.scss';


export default function UserSupply( {deposites}: any) {
  const [supplyList, setSupplyList] = useState<Array<Object>>([])

  useEffect(()=> {
    console.log("account", deposites);
    setSupplyList(deposites)
  }, [deposites])
   
  
  return (
    <div className='user_supply_container'>
       <div className='title'><h4>Your Supplies</h4></div>
  
     <div className='thead'>
      <div><p>Assets</p></div>
      <div><p>Balance</p></div>
      <div><p>APY</p></div>
      <div><p>Collateral</p></div>
      <div><p></p></div>
     </div>

     { supplyList?.map((supply: any, i: number)=> 
     ( <div key={i} className='tbody'>
      <div><img src={getTokenLogo(supply?.asset?.symbol)} alt="" /><p>{supply?.asset?.symbol} </p></div>
      <div><p>{decimalfixed(supply.amount, supply.asset.decimals)}</p><span>${Number(supply.asset.lastPriceUSD).toFixed(3)}</span></div>
      <div><p>0.987</p></div>
      <div><p>Collateral</p></div>
      <div><button onClick={handleSupply}>Switch</button> <button className='withdraw'>Withdraw</button></div>
     </div>)
     ) }
 

    </div>
  )
}
