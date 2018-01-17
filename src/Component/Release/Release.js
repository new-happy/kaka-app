import React,{ Component } from 'react'
import './release.css'
import { Upload, Icon, Modal } from 'antd';


class Release extends Component {
  state = {
   previewVisible: false,
   previewImage: '',
   fileList: [{
     uid: -1,
     name: 'xxx.png',
     status: 'done',
     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
   }]
 }
 handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render () {
    const { previewVisible, previewImage, fileList } = this.state;
   const uploadButton = (
     <div>
       <Icon type="plus" />
     </div>
   );
   return (
     <div className="release">
       <header>
         <span>取消</span>
         <span>发布需求</span>
         <span></span>
       </header>
       <div className="release-main">
         <textarea placeholder='请详细描述您所需要发布帮助的具体内容，以便接受任务者更明确的回答您所发布的要求......'>
         </textarea>
         <p>0/200</p>
       </div>
       <div className="release-set">
         <Upload
         action="//jsonplaceholder.typicode.com/posts/"
         listType="picture-card"
         onPreview={this.handlePreview}
         onChange={this.handleChange}
       >
         {fileList.length >= 3 ? null : uploadButton}
       </Upload>
       <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
         <img alt="example" style={{ width: '100%' }} src={previewImage} />
       </Modal>
       <span>添加图片、视频</span>
       </div>
       <p>武汉市武昌区</p>
       <div>
         <h2>积分</h2>
         <span>积分余额: 260</span>
       </div>
     </div>
   )
  }
}

export default Release
