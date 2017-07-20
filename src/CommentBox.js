import React from 'react'

class CommentBox extends React.Component{
  state = {
    comments:[
      '第一条评论',
      '第二条评论'
    ]
  }
  render(){
    return(
      <div className='comment-box'>
        {this.state.comments.map(item=>(
          <li key={Math.random()}>{item}</li>
        ))
      }
      </div>
    )
  }
}

export default CommentBox
