import React,{ Component } from 'react'
import './integral.css'
import zhiFuBao from '../images/zhifubao.svg'
import weiZhiFu from '../images/weixinzhifu.svg'
import Hammer from 'react-hammerjs'

class Integral extends Component {
  state = {
    buttons:[10,30,50,100,200,500,1000],
    payments:[{name:'微信支付',url:weiZhiFu},{name:'支付宝',url:zhiFuBao}],
    num:0,
    number:0,
    value:''
  }
  handleTap = () => {
    this.props.history.go(-1)
  }
  handleActive = (i,num) => {
    this.setState({
      num:i,
      value:num
    })
  }
  handleChang =(e) => {
    this.setState({
      value : e.target.value
    })
  }
  handleClick = (num) => {
    this.setState({
      number:num
    })
  }
  handleGo = () => {
    this.props.history.push('/card')
  }
  render () {
    const number = this.state.buttons.map((item,i) => {
      return (<Hammer key={i} onTap={()=>this.handleActive(i,item)}>
        <button className={`${this.state.num===i&&'active'}`}>{`${item}积分`}</button></Hammer>)
    })
    const payment = this.state.payments.map( (item,i) => {
      return (<Hammer onTap={() => this.handleClick(i)}
      key={i}><button className={`${this.state.number===i&&'active'}`}><img src={item.url} alt=""/>{item.name}</button></Hammer>)
    })
    let num1 = (this.state.value/10).toFixed(0)
   return (
     <div className="integral">
       <header>
         <Hammer onTap={this.handleTap}><span>取消</span></Hammer>
         <span>积分充值</span>
         <span></span>
       </header>
       <div className="integral-down">
         <div>
           <p>10元=100积分</p>
           <p>选择充值的金额</p>
           <div>
             { number }
             <span></span>
           </div>
         </div>
         <div>
           <span>其他:</span>
           <input type="number" value={this.state.value} onChange={this.handleChang}/>
           <span>积分</span>
         </div>
         <div>
           <p>请选择充值方式</p>
           <div>
            {payment}
           </div>
           <p>支付金额：{`${num1}元`}</p>
         </div>
       </div>
       <div className="submit-a">
        <Hammer onTap={this.handleGo}><button>提交</button></Hammer>
       </div>
     </div>
   )
  }
}

export default Integral
