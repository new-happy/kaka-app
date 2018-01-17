import React,{ Component } from 'react'
import './detailed.css'
import imgSrc from '../images/fanhui.png'
import zhuan from '../images/zhuan.png'
import qianjin from '../images/qianjin.svg'
import money from '../images/222.png'
import Hammer from 'react-hammerjs'

class Detailed extends Component {
  state = {
    bills:[
      {
        id:1,
        img:money,
        type:'今日签到',
        add:'+10 积分',
        day:'今日',
        time:'11:25',
        data:'2017-03-13'
      },
      {
        id:2,
        img:money,
        type:'发布需求',
        add:'-60 积分',
        day:'昨日',
        time:'06:15',
        data:'2017-03-12'
      },
      {
        id:3,
        img:money,
        type:'完成任务',
        add:'+80 积分',
        day:'星期三',
        time:'08:38',
        data:'2017-03-11'
      },
      {
        id:4,
        img:money,
        type:'今日签到',
        add:'+10 积分',
        day:'星期三',
        time:'10:18',
        data:'2017-03-11'
      },
      {
        id:5,
        img:money,
        type:'发布需求',
        add:'-80 积分',
        day:'星期二',
        time:'09:10',
        data:'2017-03-11'
      },
      {
        id:6,
        img:money,
        type:'完成任务',
        add:'+80 积分',
        day:'星期三',
        time:'08:38',
        data:'2017-03-11'
      },
      {
        id:7,
        img:money,
        type:'今日签到',
        add:'+10 积分',
        day:'星期三',
        time:'14:44',
        data:'2017-03-11'
      },
      {
        id:8,
        img:money,
        type:'账号注册',
        add:'+200 积分',
        day:'星期二',
        time:'16:05',
        data:'2017-03-10'
      },
    ]
  }
  handleTap = () => {
    this.props.history.go(-1)
  }
  render () {
    const bill = this.state.bills.map( item => {
      return (<div key={item.id}>
        <img src={item.img} alt="1"/>
        <p>{item.type}</p>
        <span className="fen">{item.add}</span>
        <div>
          <span>{item.day}</span>
          <span>{item.time}</span>
        </div>
        <p>{item.data}</p>
      </div>)
    })
   return (
     <div className="detailed">
       <header>
         <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1"/></span></Hammer>
         <span>收支明细</span>
         <span><img src={zhuan} alt=""/></span>
       </header>
       <div className="detailed-title">
         <span>本月</span>
         <span>查看月账单<img src={qianjin} alt=""/></span>
       </div>
       <div className="detailed-main">
         { bill }
       </div>
     </div>
   )
  }
}

export default Detailed
