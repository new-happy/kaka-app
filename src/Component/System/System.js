import React,{ Component } from 'react'
import './system.css'
import fanhui from '../images/fanhui.png'
import Hammer from 'react-hammerjs'

class System extends Component {
  handleTap = () => {
    this.props.history.go(-1)
  }
  render () {
   return (
     <div className="system">
     <header>
      <Hammer onTap={this.handleTap}><span><img src={fanhui} alt="1"/></span></Hammer>
      <span>系统通知</span>
      <span></span>
    </header>
    <div className="system-title">
      <span>2017-01-21</span>
    </div>
    <div>
      <h2>30秒带你体验随享咔咔</h2>
      <p>随享咔咔是一款可以随时随刻帮助你所想看到的任何一处场景。只要那个地方有网络，有人接单，便能看见虽身不能处的地方的场景</p>
    </div>
     </div>
   )
  }
}

export default System
