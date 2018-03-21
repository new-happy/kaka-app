
import React,{ Component } from 'react'
import './login.css'
import imgSrc from '../images/4.jpg'
import imgSrc1 from '../images/66.png'
import imgSrc2 from '../images/111.png'
import imgSrc3 from '../images/qq.jpg'
import imgSrc4 from '../images/weibo.jpg'
import imgSrc5 from '../images/weixin.jpg'
import { Link } from 'react-router-dom'
import Hammer from 'react-hammerjs'

class Login extends Component {
  state = {
    username:'',
    password:''
  }
  handleSubmit = () => {
    const { username, password } =this.state
    if(username ===''){
      alert('请输入手机号')
    }else if(username !== '13718238947'){
      alert('请输入正确手机号')
    }else if(password === ''){
      alert('请输入密码')
    }else if(password !== 'a309615655'){
      alert('请输入正确密码')
    }else if(username === '13718238947' && password === 'a309615655'){
      this.props.history.push('/home-page')
      sessionStorage.id = this.state.username
    }
  }
  hanndleUser = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  hanndleChange = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  render () {
   return (
     <div className="Login">
       <div className="login-img">
         <img src={imgSrc} alt=""/>
       </div>
       <div className="users">
         <span>用户名：13718238947  密码：a309615655</span>
         <div>
           <img src={imgSrc1} alt=""/>
           <input type="text" placeholder="请输入手机号"
             value={this.state.username} onChange={this.hanndleUser}/>
         </div>
         <div>
           <img src={imgSrc2} alt=""/>
           <input type="password" placeholder="请输入密码"
             value={this.state.password} onChange={this.hanndleChange}/>
         </div>
       </div>
       <div>
         <span>忘记密码? </span><Link to='/'> 重置</Link>
       </div>
       <Hammer onTap={this.handleSubmit}><button>登录</button></Hammer>
       <div className="or">
         <span>or</span>
         <div className="fenxiang">
           <img src={imgSrc5} alt="111"/>
           <img src={imgSrc3} alt="111"/>
           <img src={imgSrc4} alt="111"/>
         </div>
       </div>
     </div>
   )
  }
}

export default Login
