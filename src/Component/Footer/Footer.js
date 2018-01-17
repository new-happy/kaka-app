import React,{ Component } from 'react'
import './footer.css'
import footer1 from '../images/footer2.png'
import footer3 from '../images/footer4.png'
import footer5 from '../images/footer5.png'
import footer7 from '../images/footer7.png'
import footer9 from '../images/footer9.png'
import Hammer from 'react-hammerjs'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
  state = {
    tabs:[
      {
        url:footer1,
        text:'首页',
        type:'/home-page'
      },
      {
        url:footer3,
        text:'发现',
        type:'/look-for'
      },
      {
        url:footer5,
        text:'发布',
        type:'/release'
      },
      {
        url:footer7,
        text:'消息',
        type:'/news'
      },
      {
        url:footer9,
        text:'我的',
        type:'/card'
      },
    ],
    num:0
  }
  handleGo = (index,type) => {
    this.props.history.push(type)
    this.setState({
      num:index
    })
  }
  render () {
    const tab = this.state.tabs.map((item,index) => {
      return (<Hammer key={index} onTap={() =>this.handleGo(index,item.type)}>
        <div>
          <img src={item.url} alt="1"/>
          <span className={`${this.state.num===index&&'active'}`}>{item.text}</span>
        </div>
      </Hammer>)
    })
   return (
     <div className="footer">
       { tab }
     </div>
   )
  }
}

export default withRouter(Footer)
