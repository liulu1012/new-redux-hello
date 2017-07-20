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
          <li key={Math.random()} className='comment'>{item}</li>
          ))
        }
        <form className='comment-form'>
          <input type='text' className='input'/>
          <button type='submit' className='submit-btn'>发表</button>
        </form>
        <div className='underline'></div>
      </div>
    )
  }
}

export default CommentBox
