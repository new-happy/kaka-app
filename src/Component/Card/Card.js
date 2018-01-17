import React,{ Component } from 'react'
import './card.css'
import kaka from '../images/u75.svg'
import user1 from '../images/user1.png'
import card0 from '../images/card0.png'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import card5 from '../images/card5.png'
import card6 from '../images/card6.png'
import card7 from '../images/card7.png'
import card8 from '../images/card8.png'
import qianjin from '../images/qianjin.svg'
import { Link } from 'react-router-dom'
import Hammer from 'react-hammerjs'


class Card extends Component {
  state = {
    card:[
      {
        id:1,
        text:'我的账户',
        img:card1,
        url:'account'
      },{
        id:2,
        text:'积分充值',
        img:card2,
        url:'integral'
      }
    ],
    task:[
      {
        id:3,
        text:'已完成任务',
        img:card3,
        value:'您还没有完成的任务'
      },{
        id:4,
        text:'已发布任务',
        img:card4,
        value:'您还没有发布任务'
      },{
        id:5,
        text:'我的收藏',
        img:card5,
        value:'您还没有收藏'
      }
    ],
    about:[
      {
        id:6,
        text:'意见反馈',
        img:card6,
        url:'feedback'
      },
      {
        id:7,
        text:'关于我们',
        img:card7,
        url:'about'
      },
      {
        id:8,
        text:'设置',
        img:card8,
        url:'set-up'
      },
    ],
    userId:''
  }
  componentDidMount() {
    const id = sessionStorage.id
    this.setState({
      userId:id
    })
  }
  handlePush = (url) => {
    this.props.history.push(url)
  }
  render () {
      const { card, task, about } = this.state
      const cardOne = card.map(item => {
        return (<Hammer onTap={()=>this.handlePush(`/card/${item.url}`)} key={item.id}><div>
           <img src={item.img} alt="1"/>
           <span>{item.text} <img src={qianjin} alt="1"/></span>
        </div></Hammer>)
      })
      const taskOne = task.map(item => {
        return (<Link to={{
          pathname:`/business-card/${item.id}`,
          text:item.text,
          value:item.value
        }} key={item.id}><div>
           <img src={item.img} alt="1"/>
           <span>{item.text} <img src={qianjin} alt="1"/></span>
        </div></Link>)
      })
      const aboutOne = about.map(item => {
        return (<Hammer onTap={()=>this.handlePush(`card/${item.url}`)} key={item.id}><div>
           <img src={item.img} alt="1"/>
           <span>{item.text} <img src={qianjin} alt="1"/></span>
        </div></Hammer>)
      })
   return (
     <div className="Card">
       <div className="card-title">
         <header>
          <span></span>
           <img src={kaka} alt="1"/>
           <span></span>
         </header>
         <div>
           <span><img src={card0} alt="1"/>签到</span>
           <img src={user1} alt="1"/>
           <span>{this.state.userId}</span>
           <Hammer onTap={() => this.handlePush('/card/my-card')}><button>我的名片</button></Hammer>
         </div>
       </div>
       <div className="card-down">
         <div className="card-downa">{cardOne}</div>
         <div className="card-downb">{taskOne}</div>
         <div>{aboutOne}</div>
       </div>
     </div>
   )
  }
}

export default Card
