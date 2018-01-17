import React,{ Component } from 'react'
import './feedback.css'
import imgSrc from '../images/fanhui.png'
import Hammer from 'react-hammerjs'

class Feedback extends Component {
  handleTap = () => {
    this.props.history.go(-1)
  }
  handleGo = () => {
    this.props.history.push('/card')
  }
  render () {
   return (
     <div className="feedback">
          <header>
           <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1"/></span></Hammer>
           <span>意见反馈</span>
           <span></span>
         </header>
         <div className="feedback-down">
           <p>请选择反馈类型</p>
           <div><span>账号问题</span><span></span></div>
           <textarea placeholder="做多输入30字..."></textarea>
         </div>
         <div>
           <h2>功能反馈及其他</h2>
           <h2>积分兑换问题</h2>
           <h2>充值问题</h2>
         </div>
        <div className="submit-a">
            <Hammer onTap={this.handleGo}><button>提交</button></Hammer>
        </div>
    </div>
   )
  }
}

export default Feedback
