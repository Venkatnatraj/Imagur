import React, { Component } from 'react';

class Con extends Component{
    render(){
        return(
            <div className="App">
                <h1>{this.props.post}</h1>
            </div>
        )
    }
}
export default Con;