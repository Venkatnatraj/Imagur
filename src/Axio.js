import React, { Component } from 'react'
import axios from 'axios'

class Axio extends Component {
  constructor(){
    super();
  this.state = {
    post: []
  }
}
  componentDidMount (){
    
    axios.get("https://api.giphy.com/v1/gifs/search?q=%22%20+%20searchTerm%20+%20%22&api_key=10GBFB5cVKfhlUREWr9WqgZwB46Ehv7x&limit=5")
			.then(response => {
				return response.data
			})
      .then(data=>this.setState({post:data.data}))
      console.log(this.state.post)	
  
}
  render=()=> {   
    console.log(this.state.post)	

    return (
      <div className="container">
      {/* {this.state.post.map((man)=>{
        return(
          <h1>{man.url}</h1>
         
      )})} */}

      </div>
    )
  }
}

export default Axio;