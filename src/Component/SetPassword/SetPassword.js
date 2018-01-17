import React,{ Component } from 'react'
import './set-password.css'
import fanhui from '../images/fanhui.png'
import Hammer from 'react-hammerjs'

class SetPassword extends Component {
  handleTap = () => {
    this.props.history.go(-1)
  }
  render () {
   return (
     <div className="set-password">
       <header>
         <Hammer onTap={this.handleTap}><span><img src={fanhui} alt=""/></span></Hammer>
         <span>修改密码</span>
         <span></span>
       </header>
       <div>
         <input type="password" placeholder="请输入原始密码"/>
         <input type="password" placeholder="请输入新密码"/>
         <input type="password" placeholder="再次确认新密码"/>
       </div>
       <div className="submit-a">
         <Hammer onTap={this.handleTap}><button>储存</button></Hammer>
       </div>
     </div>
   )
  }
}

export default SetPassword
