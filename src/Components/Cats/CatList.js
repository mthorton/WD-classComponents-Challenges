import React, { Component, useState } from 'react';
 


const CatList = (props) => {

  const [cat, setCat] = useState(null);

  console.log(props)
  //mapCats(catArray)

 return (
   <div>
     
     {/* {catArray.Map((cat) => {
       return(
        <li>{cat}</li>
       )
    })} */}

    {Object.entries(props).map(([key, val], i) => (
        <li key>
            {key}: {i.val}
        </li>
    ))}

    

   </div>
 )
}

const mapCats = (cats) =>{
  cats.Map(cat => {
    return(
      console.log(cat)
    )
  })
}
 
export default CatList;
