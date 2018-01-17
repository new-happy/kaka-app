import React,{ Component } from 'react'
import './about.css'
import logo from '../images/4.jpg'

class About extends Component {

  render () {
   return (
     <div className="about">
       <div>
         <img src={logo} alt=""/>
         <span>帮你所看 随想咔咔</span>
       </div>
       <div>
         <p>官方微信:weijichao1125</p>
         <p>联系邮箱:727320883@qq.com</p>
         <p>手机号码:18733535695</p>
         <p>关于我们:</p>
         <h3>一个帮你实现你现在你想看所看不到的景象的平台帮你了解现在所发生的真实景象</h3>
       </div>
     </div>
   )
  }
}

export default About
