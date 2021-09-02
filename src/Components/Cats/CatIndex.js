import React, { Component, useState } from 'react';
import CatList from './CatList';
 
class CatIndex extends Component{

  // const [breeds, setBreeds] = useState([]);

 constructor(){
   super()
   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
  //  console.log(this.state.breeds)
 }

 componentDidMount(){
   this.setState({
     breeds: this.state.breeds
   })
 }

  render(){
    return(
    <div>
      <CatList breeds={this.state.breeds} />
    </div>
    )    
  };

}

export default CatIndex;

