import React, { Component, useState } from 'react';
import {Input} from 'reactstrap';
 
const SearchIndex = () => {

  const [input, setInput] = useState('');
  const [data, setData] = useState([])
  const [defaultData, setDefaultData] = useState([])

  class ArrayData extends Component {
    constructor(){
      super()
      this.state = {
        things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
      }
    }
  }
   
  let newData = new ArrayData;
  //console.log(newData.state.things)
  let searchData = newData.state.things;
  //console.log(searchData);

  for(let i = 0; i < searchData.length; i++){
    data.push(searchData[i])
    defaultData.push(searchData[i])
  }

  console.log(data)
  console.log(defaultData)

  const searchFunction = async (input) => {
    const search = defaultData.filter(item => {
      return item.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setData(search);
   }

 
   return(
      <div>
       <Input placeholder='Search Here' onChange={searchFunction}/>
       <h3>Results:</h3>
      </div>
   )
     
 
}

export default SearchIndex;
