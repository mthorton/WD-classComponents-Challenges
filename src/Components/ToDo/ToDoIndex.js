import React, { Component } from "react";

export default class ToDoIndex extends Component {
    state = {
      event: [],
      text: "Not Completed."
    };
  
    saveInput = (e) => {
      this.setState({ input: e.target.value });
    };
  
    addNewItem = () => {
      let { event, input } = this.state;
      event.push(input);
      this.setState({event: event});
    };

    changeText = (text) => {

        this.setState({ text }); 
    }
  
    render() {
        const { text } = this.state
      return (
        <div>
          <input
            type="text"
            onChange={this.saveInput}
          />
          <button onClick={this.addNewItem}> Add Item </button>
          <ol>
            {this.state.event.map((subItems, sIndex) => {
              return <li key={sIndex}> {subItems} <button onClick={ () => { this.changeText("Completed!")}  }>{text}</button></li>
            })}
          </ol>
        </div>
      );
    }
  }