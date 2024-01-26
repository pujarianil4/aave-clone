import { getTokenLogo } from '@/utils';
import './index.scss';


export default function UserBorrow() {
  return (
    <div className='user_borrow_container'>
       <div className='title'><h4>Your Supplies</h4></div>
 
     <div className='thead'>
      <div><p>Assets</p></div>
      <div><p>Balance</p></div>
      <div><p>APY</p></div>
      <div><p>Collateral</p></div>
      <div><p></p></div>
     </div>
     <div className='tbody'>
      <div><img src={getTokenLogo('USDT')} alt="" /><p>  USDT</p></div>
      <div><p>0.110000</p><span>$0.266</span></div>
      <div><p>0.987</p></div>
      <div><p>Collateral</p></div>
      <div><button>Switch</button> <button className='withdraw'>Withdraw</button></div>
     </div>

    </div>
  )
}
