// import React, { Component, useState } from 'react';

// class ToDoAdd extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { event: '', addedEvent: [''] };
//         console.log(this.state.addedEvent)
//     }

//     handleChange = event => {
//         this.setState({ event: event.target.value });
//     };

//     saveEvent = (e) => {
//         this.setState({ input: e.target.value });
//     };

//     addEvent = () => {
//         let { addedEvent, input } = this.state;
//         addedEvent.push(input);
//     };

//     render() {
//         return (
//           <React.Fragment>
//             <form>
//               <label htmlFor="username">Event: </label>
//               <input
//                 type="text"
//                 // name="event"
//                 // value={this.state.event}
//                 onChange={this.saveEvent}
//               />
//               <button onClick={this.addEvent}>Add Event!</button>
//             </form>
     
//             <li>Event: {this.state.event}</li>
//             <ol>
//                 {this.state.addedEvent.map((subItems, sIndex) => {
//                     return <li key={sIndex}> {subItems}</li>
//                 })}
//             </ol>
//           </React.Fragment>
//         );
//       }
    
// }

// export default ToDoAdd;