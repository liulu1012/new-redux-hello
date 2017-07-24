import React from 'react'
import store from './store'

class CommentBox extends React.Component{
  state = {
    comments:store.getState()
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    let newComment = this.commentInput.value
    console.log(store.getState())
    store.dispath({type:'ADD_COMMENT',comment:newComment})
    console.log(store.getState())
    this.setState({
      comments:store.getState()
    })
    this.commentForm.reset()
  }
  render(){
    let comments = store.getState()
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
