import React,{ Component } from 'react'

import './set-up.css'
import imgSrc from '../images/fanhui.png'
import user1 from '../images/user1.png'
import qianjin from '../images/qianjin.svg'
import Hammer from 'react-hammerjs'
import { Switch } from 'antd';

class SetUp extends Component {
  state = {
    off:true,
    no:true
  }
  handleTap = () => {
    this.props.history.go(-1)
  }
  handleGo = (url) => {
    this.props.history.push(url)
  }
  handleChange = () => {
    this.setState({
      off:!this.state.off
    })
  }
  handleChange1 = () => {
    this.setState({
      no:!this.state.off
    })
  }
  render () {
   return (
     <div className="set-up">
       <div className="setup-title">
          <header>
           <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1"/></span></Hammer>
           <span>设置</span>
           <span></span>
         </header>
         <div>
           <img src={user1} alt=""/>
         </div>
      </div>
      <div className="setzhuangtai">
        <div>
          <p>修改个人资料</p>
          <img src={qianjin} alt=""/>
        </div>
        <div>
          <Hammer onTap={()=>this.handleGo('/card/set-up/set-password')}><p>修改密码</p></Hammer>
          <img src={qianjin} alt=""/>
        </div>
        <div>
          <p>清除缓存</p>
          <p>210MB</p>
        </div>
        <div>
          <p>是否公开我的消息</p>
           <Switch defaultChecked
             onChange={this.handleChange}
            style={{ backgroundColor:this.state.off ? '#ed1717':'#ccc'}}  />
        </div>
        <div>
          <p>接收新的消息通知</p>
           <Switch defaultChecked
             onChange={this.handleChange1}
             style={{ backgroundColor:this.state.no ? '#ed1717':'#ccc'}} />
        </div>
      </div>
      <div className="submit-a">
        <Hammer onTap={()=>this.handleGo('/login')}><button>退出登录</button></Hammer>
      </div>
    </div>
   )
  }
}

export default SetUp
