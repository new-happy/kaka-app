import React,{ Component } from 'react'
import './balance.css'
import Hammer from 'react-hammerjs'

class Balance extends Component {
  state = {
    num:''
  }
  handleTap = () => {
    this.props.history.go(-1)
  }
  handleChange = (e) => {
    this.setState({
      num:e.target.value
    })
  }
  handleGo = () => {
    this.props.history.push('/card/account/balance/order-one')
  }
  render () {
   return (
     <div className="balance">
       <header>
         <Hammer onTap={this.handleTap}><span>取消</span></Hammer>
         <span>零钱提现</span>
         <span></span>
       </header>
       <div className="balance-main">
         <div>
           <span>到银行卡</span>
           <div>
             <span>工商银行（9647）</span>
             <p>提现到工商银行，手续费<em>0.2%</em></p>
           </div>
         </div>
         <div>
           <span>到微信账号</span>
           <span className="balance-kahao">午后阳光 （5695）</span>
         </div>
         <h2>提现余额</h2>
         <input type="type" value={this.state.num} onChange={this.handleChange}/>
         <p>现金余额 86.00 <em>全部提现</em></p>
         <Hammer onTap={this.handleGo}><button>提现</button></Hammer>
         <span>2小时到帐</span>
       </div>
     </div>
   )
  }
}

export default Balance
