import React,{ Component } from 'react'
import './submit-task.css'
import Hammer from 'react-hammerjs'

class SubmitTask extends Component {
  handleGo = () => {
    this.props.history.push('/home-page')
  }
  handleBack = () => {
    this.props.history.go(-1)
  }
  render () {
   return (
     <div className="submit-task">
     <header>
       <Hammer onTap={this.handleBack}><span>取消</span></Hammer>
       <span>回复任务</span>
       <span></span>
     </header>
     <textarea placeholder="请详细描述发布者的任务，以便圆满完成此次任务。。。"></textarea>
     <div>
       <h3>当前位置</h3>
       <span>北京市 古北口镇司马台村1层</span>
     </div>
     <div className="submit-a">
      <Hammer onTap={this.handleGo}><button>提交</button></Hammer>
     </div>
     </div>
   )
  }
}

export default SubmitTask
