import React,{ Component } from 'react'
import './city.css'
import imgSrc from '../images/fanhui.png'
import Hammer from 'react-hammerjs'

class City extends Component {
  state = {
    button:['国内','海外'],
    num:0,
    hot:[
      
    ]
  }
  handleClick = (i) => {
    this.setState({
      num:i
    })
  }
  render () {
    const width1 = this.state.num * 13.47
   return (
     <div className="city">
       <header>
         <span><img src={imgSrc} alt="1"/></span>
         <span>选择城市</span>
         <span></span>
       </header>
       <div className="city-title">
         <input type="text" placeholder="输入城市名或拼音查询"/>
       </div>
       <div className="international">
         <div className='international-a'>
           { this.state.button.map((item,i) =>{
             return <Hammer  key={i} onTap={()=>this.handleClick(i)}><button>{item}</button></Hammer>
           })}
         </div>
         <div className="xian" style={{marginLeft:`${width1}em`}}></div>
       </div>
       <div className="position">
         <h2>根据您的位置推荐</h2>
         <div>
           <span>北京</span>
           <span></span>
           <span></span>
           <span></span>
          </div>
         <h2>历史记录</h2>
         <div>
           <span>北京</span>
           <span>深圳</span>
           <span>上海</span>
           <span></span>
         </div>
       </div>
       <div>
         <h2>热门城市</h2>
     </div>
   </div>
   )
  }
}

export default City
