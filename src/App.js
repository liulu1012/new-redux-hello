import React from 'react'
import './main.css'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class App extends React.Component{
  state = {
    comments:[
      '第一条评论',
      '第二条评论'
    ]
  }
  addComment = (comment) =>{
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  render(){
    return(
      <div>
        <div className='top clearfix'>
          <PostBody />
        </div>
        <div className='bottom clearfix'>
          <CommentBox comments={this.state.comments} addComment={this.addComment}/>
        </div>
      </div>
    )
  }
}


export default App
