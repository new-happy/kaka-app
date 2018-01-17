import React,{ Component } from 'react'
import './accuont.css'
import imgSrc from '../images/fanhui.png'
import zhuan from '../images/zhuan.png'
import account1 from '../images/account1.png'
import account2 from '../images/account2.png'
import account3 from '../images/account3.png'
import account4 from '../images/account4.png'
import account5 from '../images/account5.png'
import Hammer from 'react-hammerjs'
class Account extends Component {
  state = {
    num:26,
    num1:180
  }
  handleTap = () => {
    this.props.history.go(-1)
  }
  handleClick = (url) => {
    this.props.history.push(url)
  }
  render () {
   return (
     <div className="account">
     <header>
       <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1"/></span></Hammer>
       <span>我的账户</span>
       <span><img src={zhuan} alt=""/></span>
     </header>
     <div className="tixian">
       <div>
         <img src={account2} alt=""/>
         <div>
           <p>现金余额</p>
           <span>{`${this.state.num}.00`}</span>
         </div>
         <Hammer onTap={()=>this.handleClick('/card/account/balance')}><button>提现</button></Hammer>
       </div>
       <div>
         <img src={account1} alt=""/>
         <div>
           <p>积分余额</p>
       <span>{`${this.state.num1}.00`}</span>
         </div>
         <Hammer onTap={()=>this.handleClick('/card/account/cash')}><button>提现</button></Hammer>
       </div>
     </div>
     <div className="account-down">
       <div><img src={account3} alt="1"/></div>
       <div>
         <Hammer onTap={() => this.handleClick('/card/account/detailed')}>
           <span>
             <img src={account4} alt="1"/>
             收支明细
           </span>
         </Hammer>
         <span>
           <img src={account5} alt="1"/>
           常见问题
         </span>
       </div>
     </div>
     </div>
   )
  }
}

export default Account
