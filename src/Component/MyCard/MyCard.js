import React,{ Component } from 'react'
import './my-card.css'
import fanhui from '../images/fanhui.png'
import user1 from '../images/user1.png'
import account3 from '../images/account3.png'

class MyCard extends Component {
  render () {
   return (
     <div className="MyCard">
       <header>
         <span><img src={fanhui} alt=""/></span>
         <span>我的名片</span>
         <span></span>
       </header>
       <div className="card-banner">
         <div>
           <div>
             <p>18733535695</p>
           </div>
           <div className="fangke">
             <span>访客数量 281</span>
             <span>获赞数量 90</span>
           </div>
         </div>
       </div>
       <div className="mycard-main">
         <div>
           <img src={user1} alt=""/>
           <p>这家伙很懒哈</p>
         </div>
         <div>
           <span>山东省 临江市</span>
           <p>It互联网</p>
         </div>
         <div>
           <img src={account3} alt=""/>
         </div>
       </div>
     </div>
   )
  }
}

export default MyCard
