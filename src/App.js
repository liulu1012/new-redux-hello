import React from 'react'
import './main.css'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class App extends React.Component{
  render(){
    return(
      <div>
        <PostBody />
        <CommentBox />
      </div>
    )
  }
}


export default App
