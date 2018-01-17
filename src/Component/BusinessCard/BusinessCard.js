import React,{ Component } from 'react'
import './business-card.css'
import imgSrc from '../images/fanhui.png'
import chui from '../images/chui.jpg'
import Hammer from 'react-hammerjs'

class BusinessCard extends Component {
  handleTap = () => {
    this.props.history.go(-1)
  }
  render () {
    const { value, text } = this.props.location
    console.log(value,text)
   return (
     <div className="business-card">
       <header>
         <Hammer onTap={this.handleTap}><span><img src={imgSrc} alt="1"/></span></Hammer>
         <span>{text}</span>
         <span></span>
       </header>
       <div>
         <img src={chui} alt=""/>
         <p>{value}</p>
       </div>
     </div>
   )
  }
}

export default BusinessCard
