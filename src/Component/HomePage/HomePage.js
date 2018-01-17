import React,{ Component } from 'react'
import 'antd/dist/antd.css';
import './home-page.css'
import imgSrc from '../images/sousuo.png'
import imgSrc1 from '../images/dz.png'
import imgDz from '../images/654.png'
import imgSrc2 from '../images/banner1.jpg'
import imgSrc3 from '../images/banner2.png'
import imgSrc4 from '../images/banner3.jpg'
import imgSrc5 from '../images/7777.jpg'
import imgSrc6 from '../images/222.png'
import boy from '../images/45.png'
import girl from '../images/76.png'
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import recommend from '../images/5.jpg'
import recommend1 from '../images/6.jpg'
import recommend2 from '../images/7.jpg'
import kaka from '../images/u75.svg'
import imgSrc7 from '../images/11.png'
import imgSrc8 from '../images/12.png'
import imgSrc9 from '../images/13.png'
import { Carousel } from 'antd'
import Hammer from 'react-hammerjs'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  state = {
    newtask:[
      {
        id:1,
        name:'chen XX',
        url:user1,
        icon: boy,
        icon1:imgSrc6,
        integral:50,
        text:'想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况.....',
        address:'上海市浦东新区 988km 2017-03-09'
      },
      {
        id:2,
        name:'an 然',
        url:user2,
        icon: girl,
        icon1:imgSrc6,
        integral:100,
        text:'我想知道这个星巴克现在..',
        address:'上海市浦东新区 988km 2017-03-09',
        img:imgSrc5
      }
    ],
    office:true
  }
  handleTap = (url) =>{
    this.props.history.push(url)
  }
  handleOff = () => {
    this.setState({
      office:false
    })

    sessionStorage.office = this.state.office
  }
  render () {
    const content = this.state.newtask.map( item =>{
      return ( <div className='task' key={item.id}>
        <div className='text'>
          <p><Link to={{
              pathname:`/the-task/${item.name}`,
              state:{item}
            }}>{item.text}</Link></p>
          <img src={item.img} alt=""/>
        </div>
        <div className="pople">
          <img src={item.url} alt="2"/>
          <div>
            <div className="pople-a">
              <div>
                <span>{item.name}</span>
                <img src={item.icon} alt=""/>
              </div>
              <div>
                <img src={item.icon1} alt=""/>
                <span>{item.integral}</span>
              </div>
            </div>
            <div className="address">
              <img src={imgDz} alt=""/>
              <span>{item.address}</span>
            </div>
          </div>
        </div>
      </div>)
    })
    const office1 = sessionStorage.office
   return (
     <div className="home-page">
       <Hammer onTap={this.handleOff}>
         <div className="mask" style={{display:office1 !== 'false' ? 'block':'none'}}>
           <div>
             <div className="icon">
               <div><img src={imgSrc6} alt="1"/></div>
             </div>
             <p>恭喜你获得今日的奖励</p>
             <h1>+10 <span>积分</span></h1>
             <h2>每日登录即可获得奖励</h2>
           </div>
         </div>
       </Hammer>
       <header>
         <Hammer onTap={()=>this.handleTap('city')}><span>武汉<img src={imgSrc1} alt="1"/></span></Hammer>
         <img src={kaka} alt=""/>
         <span><img src={imgSrc} alt="s"/></span>
       </header>
       <div className="banner">
         <Carousel autoplay>
          <div><img src={imgSrc2} alt="1"/></div>
          <div><img src={imgSrc3} alt="2"/></div>
          <div><img src={imgSrc4} alt="3"/></div>
        </Carousel>
       </div>
       <div className="content">
         <div className="content-title"><h2>最新任务</h2></div>
         <div className="content-a">
           {content}
        </div>
          <div className="content-title"><h2>今日推荐</h2></div>
          <Hammer onTap={() => this.handleTap()}>
            <div>
            <div className="recommend">
              <img src={recommend} alt=""/>
              <img src={recommend2} alt=""/>
              <img src={recommend1} alt=""/>
            </div>
            <div className="jianjie">
              <p>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)</p>
              <span>古根海娒美术馆</span>
              <div>
                <span><img src={imgSrc9} alt=""/>6326</span>
                <span><img src={imgSrc7} alt=""/>70</span>
                <Link to='/comments'><span><img src={imgSrc8} alt=""/>261</span></Link>
              </div>
            </div>
          </div>
         </Hammer>
       </div>
     </div>
   )
  }
}

export default HomePage
