import React from 'react'

class CommentBox extends React.Component{
  state = {
    comments:[
      '第一条评论',
      '第二条评论'
    ]
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    let newComment = this.commentInput.value
    //this.commentInput是一个dom节点，.value就是给input标签中添加了value属性
    this.setState({
      comments:[...this.state.comments,newComment]
    })
    this.commentForm.reset()
  }
  render(){
    return(
      <div className='comment-box'>
        {this.state.comments.map(item=>(
          <li key={Math.random()} className='comment'>{item}</li>
          ))
        }
        <form className='comment-form' onSubmit={this.handleSubmit} ref={value=>this.commentForm=value}>
          <input type='text' className='input' ref={value=>this.commentInput=value}/>
          <button type='submit' className='submit-btn'>发表</button>
        </form>
        <div className='underline'></div>
      </div>
    )
  }
}

export default CommentBox
