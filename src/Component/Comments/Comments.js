import React,{ Component } from 'react'
import './comments.css'
import imgSrc from '../images/fanhui.png'
import boy from '../images/45.png'
import girl from '../images/76.png'
import imgSrc3 from '../images/user1.png'
import imgSrc1 from '../images/user3.png'
import imgSrc2 from '../images/user4.png'
import yuyin from '../images/yinpin.png'
import Hammer from 'react-hammerjs'

class Comments extends Component {
  state = {
     pople:[
      {
        id:1,
        name:'H.H',
        url:imgSrc1,
        icon:boy,
        text:'古根海姆博物馆的外部非常朴实无华，只是将博物馆的名字装饰了一下，平滑的白色混凝土覆盖在墙上，使它们仿佛更像一座巨大的雕塑而不是建筑物。',
        huifu:[
          {
            id:1456,
            name:'BIG BOSS',
            text:'把你的评论看完之后我想去看一看了'
          }
        ]
      },
      {
        id:2,
        name:'泡沫',
        url:imgSrc2,
        icon:girl,
        text:'光是建筑外观就与众不同啊!',
        huifu:[]
      }
    ],
    inputText:''
  }
  handleChange = (e) => {
    this.setState({
      inputText:e.target.value
    })
  }
  handelComment = () => {
    const pople1 = {
      id:3,
      name:'chen xx',
      url:imgSrc3,
      icon:boy,
      text:this.state.inputText,
      huifu:[]
    }
    this.setState({
      pople:[...this.state.pople,pople1],
      inputText:''
    })
  }
  handleGo = (num) => {
      this.props.history.go(num)
  }
  render () {
    const comments = this.state.pople.map((item,i) => {
      return (<div key={i} className="comments-user">
        <div className='user-title'>
          <img src={item.url} alt="1"/>
          <span>{item.name} <img src={item.icon} alt="1"/></span>
        </div>
        <div className="comment-a">
          <p>{item.text}</p>
            {
              item.huifu.map(t => {
                return <div key={t.id}>
                  <p><span>{`${t.name}:`}</span>{t.text}</p>
                </div>
              })
            }
        </div>
      </div>)
    })
   return (
     <div className="comments">
       <header>
         <Hammer onTap={() => this.handleGo(-1)}><span><img src={imgSrc} alt="1"/></span></Hammer>
         <span>评论详情</span>
         <span></span>
       </header>
       <h2>评论（{this.state.pople.length}）</h2>
        { comments }
        <div className="texts">
          <img src={yuyin} alt=""/>
          <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
          <Hammer onTap={this.handelComment}><button>回复</button></Hammer>
        </div>
     </div>
   )
  }
}

export default Comments
