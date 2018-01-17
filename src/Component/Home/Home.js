import React,{ Component } from 'react'
import './home.css'
import Hammer from 'react-hammerjs'
import imgSrc from '../images/1.png'
import imgSrc1 from '../images/2.png'
import imgSrc2 from '../images/3.png'
import imgSrc3 from '../images/4.jpg'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    num : 0
  }
  handleSwipe = () => {
    if(this.state.num < 3){
      this.setState({
        num :this.state.num + 1
      })
    }
  }
  render () {
    const { num } =this.state
    let width = num * -100
   return (
     <Hammer onSwipeLeft={ this.handleSwipe}>
       <div className="home">
         <div className="pic" style={{marginLeft: `${width}%`}}>
           <div><img src={imgSrc} alt="1"/></div>
           <div><img src={imgSrc1} alt="1"/></div>
           <div><img src={imgSrc2} alt="1"/></div>
           <div className="login">
             <div><img src={imgSrc3} alt="2"/></div>
             <div>
               <h1>随想咔咔</h1>
               <p>帮你所看 随想咔咔</p>
             </div>
             <div>
               <Link to='/login'>马上进入</Link>
             </div>
           </div>
         </div>
       </div>
     </Hammer>
   )
  }
}

export default Home
