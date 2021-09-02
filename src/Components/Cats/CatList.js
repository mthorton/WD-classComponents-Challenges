import React, { Component, useState } from 'react';
 
const CatList = (props) => {

  //const [cats, setCats] = useState([]);

  console.log(props.breeds)


 return (
   <ul>
    {props.breeds.map((cat, i) => <li key={i}>{cat}</li>)}
   </ul>
 )
}
 
export default CatList;
