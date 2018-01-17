import React,{ Component } from 'react'
import './order.css'
import jifen from '../images/222.png'
import Hammer from 'react-hammerjs'

class OrderTwo extends Component {
  handleTap = () => {
    this.props.history.push('/card/account')
  }
  render () {
   return (
     <div className="order-two">
     <header>
       <span></span>
       <span>兑换详情</span>
       <span></span>
     </header>
     <div className="order-title">
       <img src={jifen} alt=""/>
       <span>提现申请已提交</span>
     </div>
     <div className="order-main">
       <div>
         <span>预计到账时间</span>
         <span>2017-03-05 12:14:44</span>
       </div>
       <div>
         <span>到账号</span>
         <span>chen xx</span>
       </div>
       <div>
         <span>兑换积分</span>
         <span>B 600</span>
       </div>
       <div>
         <span>手续费</span>
         <span>B 10</span>
       </div>
     </div>
        <Hammer onTap={this.handleTap}><button>完成</button></Hammer>
     </div>
   )
  }
}

export default OrderTwo
