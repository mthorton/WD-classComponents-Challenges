import React, { useState } from 'react';
import {Container} from 'reactstrap';

function DogIndex() {

    const URL = 'https://dog.ceo/api/breeds/image/random';
    const [image, setImage] = useState("");

    const getImage = () => {
        fetch(URL)
        .then(res => res.json())
        .then(resData => {
            console.log(resData.message)
            setImage(resData.message)
        })
    }
        
    return(
        <div>
            <button onClick={getImage}>Random Dog Pic!</button>
            <img src={image} />
        </div>
    )
}


export default DogIndex;