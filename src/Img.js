import React, { Component } from 'react';
import faker from 'faker';
import {Glyphicon,Grid,Row,Col,Thumbnail,Button,} from 'react-bootstrap';
import Con from './Con';

const arr = [];
for(let i=1;i<=10;i++) {
  let imageObj = {
    id:i,
    title: faker.name.findName(),
    src: faker.image.avatar(),
    comment: 0,
    upvotes: 0,
    
  }
  arr.push(imageObj);
  console.log(arr[0].id)
  
}

class Img extends Component{
constructor(){
    super();
    this.state = {
        data: arr,
        
     }
     
}
handleComment = (id) => {
    console.log("##############")
    let data = this.state.data;
    let updatedData = data.map((img) => {
        if(img.id === id){
            img.comment++;
        }
        return img;
    })
    this.setState({data: updatedData})
}
// arrow = ()=>{this.setState({post:this.state.post +1})}
    render() {
        return (
          <Grid>
            <Row>
            { this.state.data.map((img) => {
                return (<Col  xs={4}>
                    <Thumbnail src ={img.src}>
                    <h5>{img.title}</h5>
                        <p>
                        <Row>
                        <Col  xs={2}>

                        <Button bsSize="xsmall" onClick={this.arrow}>
                        <Glyphicon glyph="arrow-up pull-left" /><Con mew = {this.state.post}/></Button></Col>
                        <Col  xs={3}></Col>
                        <Col  xs={2}>
                        <Button bsSize="xsmall" onClick={() => this.handleComment(img.id)}>
                        <Glyphicon glyph="comment" /><span>{img.comment}</span>
                    </Button></Col>
                    <Col  xs={3}></Col>

                        <Button bsSize="xsmall">
                        
                        <Glyphicon glyph="eye-open" />
                        
                    </Button>
                    </Row>
                    
                    </p>
                    </Thumbnail>
                    
                </Col>)
            })}
            </Row>
          </Grid>
            
)
          }
}


export default Img;