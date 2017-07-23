import React from 'react'

class CommentBox extends React.Component{
  handleSubmit = (e) =>{
    e.preventDefault()
    let newComment = this.commentInput.value
    this.props.addComment(newComment)
    this.commentForm.reset()
  }
  render(){
    console.log(this.props)
    return(
      <div className='comment-box'>
        {this.props.comments.map(item=>(
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
