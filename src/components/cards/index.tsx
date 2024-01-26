
import './index.scss'
import UserBorrow from './userBorrow'
import UserSupply from './UserSupply'
export default function MainCard({data}: any) {
    
    
  return (
    <div className='maincard_container'>
        <div>
            <UserSupply deposites={data?.account?.deposits}/>
            <UserSupply/>
        </div>
        <div>
            <UserBorrow/>
            <UserSupply/>
        </div>
    </div>
  )
}
