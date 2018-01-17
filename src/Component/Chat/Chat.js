import React,{ Component } from 'react'

import fanhui from '../images/fanhui.png'
import Hammer from 'react-hammerjs'

class Chat extends Component {
  handleTap = () => {
    this.props.history.go(-1)
  }
  render () {
   return (
     <div className="Chat">
       <header>
        <Hammer onTap={this.handleTap}><span><img src={fanhui} alt="1"/></span></Hammer>
        <span>初夏</span>
        <span></span>
      </header>
     </div>
   )
  }
}

export default Chat
