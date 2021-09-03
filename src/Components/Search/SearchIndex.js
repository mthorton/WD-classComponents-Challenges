import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      text: '',
      results: []
    }
  }

 componentDidMount(){
  this.setState({
    things: this.state.things
  })
}

handleChange = event => {
    this.setState({ text: event.target.value });
};

 searchFunction() {

 };

 render() {
   return(
      <div>
       <Input placeholder='Search Here' onChange={this.handleChange} />
       <h3>Test: {this.state.text}</h3>
       <h3 onChange={this.searchFunction}>Results: </h3>
     </div>
   )
     
 }
}

export default SearchIndex;