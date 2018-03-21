import React,{ Component } from 'react'
import './look-for.css'
import kaka from '../images/u75.svg'
import user4 from '../images/user4.png'
import user5 from '../images/user5.png'
import user6 from '../images/user6.png'
import look1 from '../images/look1.jpg'
import look2 from '../images/look2.jpg'
import look3 from '../images/look3.jpg'
import look4 from '../images/look4.jpg'
import look5 from '../images/look5.svg'
import look6 from '../images/look6.jpg'
import look7 from '../images/look7.jpg'
import boy from '../images/45.png'
import girl from '../images/76.png'
import imgDz from '../images/654.png'
import imgSrc1 from '../images/11.svg'
import imgSrc2 from '../images/12.svg'
import imgSrc3 from '../images/13.svg'
import imgSrc4 from '../images/u310.png'
import imgSrc5 from '../images/u371.png'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
import Hammer from 'react-hammerjs'

class LookFor extends Component {
  state = {
    looks:[
      {
        id:1,
        name:'泡沫',
        url:user4,
        icon: girl,
        look:326,
        hot:70,
        comment:75,
        data:'58分钟前',
        text:'安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... ',
        pics:[look1,look2,look3],
        address:'宏村秀里精品文化酒店',
        link:'/the-task'
      },
      {
        id:2,
        name:'初夏',
        url:user5,
        icon: girl,
        look:371,
        hot:128,
        comment:26,
        data:'1小时前',
        text:'在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...',
        pics:[look4,look5,look6],
        address:'浙江省桐乡市乌镇酒吧',
      },
      {
        id:3,
        name:'陈 xx',
        url:user6,
        icon: boy,
        look:371,
        hot:128,
        comment:26,
        data:'1小时前',
        text:'',
        pics:[look7],
        address:'浙江省桐乡市乌镇酒吧',
      }
    ],
    open:false,
    visible: false
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  render () {
    const {visible } = this.state
    const looks = this.state.looks.map(item => {
      return (<div key={item.id}>
        <div className='looks-title'>
          <div>
            <Link to={{
                pathname:`/infor-mation/${item.id}`,
                state:{name:item.name,
                  url:item.url,
                  icon: item.icon
                }
              }}><img src={item.url} alt="1"/></Link>
            <span>{item.name}<img src={item.icon} alt=""/></span>
          </div>
        <Hammer onTap={this.showModal}><img src={imgSrc4} alt="1"/></Hammer>
        </div>
        <div className='looks-content'>
          <p>{item.text}</p>
          <div className='looks-pic'>
            {
              item.pics.map((t,i) =>{
              return <img src={t} alt="1" key={i}/>
              })
            }
          </div>
        </div>
        <div className="looks-address">
          <div>
            <span><img src={imgDz} alt="1"/>{item.address}</span>
            <span>{item.data}</span>
          </div>
          <div>
            <span><img src={imgSrc3} alt=""/>{item.look}</span>
            <span><img src={imgSrc1} alt=""/>{item.hot}</span>
            <Link to="/comments"><span><img src={imgSrc2} alt=""/>{item.comment}</span></Link>
          </div>
        </div>
      </div>)
    })
   return (
     <div className="look-for">
       <header>
         <span></span>
         <img src={kaka} alt="1"/>
         <span></span>
       </header>
       { looks }
       <Modal
          visible={visible}
          onCancel={this.handleCancel}
          footer={false}
          closable={false}
          >
          <img src={imgSrc5} alt="" className="imgUrl"/>
        </Modal>
     </div>
   )
  }
}

export default LookFor
