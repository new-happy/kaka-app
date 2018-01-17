import React,{ Component } from 'react'
import './news.css'
import kaka from '../images/u75.svg'
import user5 from '../images/user5.png'
import news1 from '../images/news1.png'
import news2 from '../images/news2.jpg'
import Hammer from 'react-hammerjs'

class News extends Component {
  state = {
    news:[
      {
        id:1,
        url:user5,
        name:'初夏',
        text:'在吗?',
        data:'昨天17:43',
        link:'/news/chat'
      },
      {
        id:2,
        url:news1,
        name:'系统通知',
        text:'30秒带你体验随享咔咔',
        data:'下午01:25',
        link:'/news/system'
      },
      {
        id:3,
        url:news2,
        name:'欢迎加入随享咔咔',
        text:'主人，小咔已经恭候多时了，200积分奉上，可在钱包查看，有任何建议可直接在消息中回复小咔',
        data:'2017-01-15',
        link:'/card/account'
      }
    ]
  }
  handleTap = (url) => {
    this.props.history.push(url)
  }
  render () {
    const newa = this.state.news.map(item => {
      return (<Hammer key={item.id} onTap={()=>this.handleTap(item.link)}><div>
        <img src={item.url} alt="1"/>
        <div>
          <h2>{item.name}</h2>
          <p>{item.text}</p>
          <span>{item.data}</span>
        </div>
      </div></Hammer>)
    })
   return (
     <div className="News">
       <header>
         <span></span>
         <img src={kaka} alt=""/>
         <span></span>
       </header>
       <div className="news-main">
         { newa }
       </div>
     </div>
   )
  }
}

export default News
