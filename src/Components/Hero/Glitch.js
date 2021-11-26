import React from 'react'
import "./glitch.scss"

const array = [
    "GLITCH NOBODY",
  
    "Siddhant Vij",
  
    "פ˥I┴ƆH NOqOp⅄",
  
    "Siddhant Vij",
  
    "GLITCH NOBODY",
  
    "ΓΛΙΤΞΗ ΝΟΒΟΔΨ",
  
    "GLITCH NOBODY",
    "Siddhant Vij",
  
    "GLITCH NOBODY",
  
    "グリッチ 誰も",
  
    "GLITCH NOBODY",
    "Siddhant Vij",
  
    "GLITCH NOBODY",
    "g/itc# n0b0$y",
  ];
  /* START OF HELLO COMPONENT */
  
  class Glitch extends React.Component {
    // Sets Initial state of text and integer
    state = {
      text: "Glitch Nobody",
      integer: 1,
    };
    // Creates timerID that sets intervals of 1500ms( 1.5 sec ) and calls the function tick() on every interval
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1700);
    }
    // If component Unmounts then the timer will be stopped. If not stopped it will continue to run in the background when not needed.
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    // Creates a function named tick which is update the state of text and array
    tick = () => {
      // ES6 Destructuring - creates a const integer and sets it equal to this.state.integer
      const { integer } = this.state;
      // Change state using setState and not this.state. this.state should be treated as if it is immutable
      this.setState({
        text: array[integer],
        //Uses modulo operator to get the remainder. If integer + 1 is less than array.length the remainder will be the solution to integer + 1. Once integer + 1 equals array.length the remainder will be 0 which resets the loop.
        integer: (integer + 1) % array.length,
      });
    };
    render() {
      // destructures this.state.text and sets it equal to text
      const { text } = this.state;
      return (
        <div className="contain">
          {/* Creates an h1 element that uses this.state.text for its value */}
          <h1 className="glitch">{`${text}`}</h1>
        </div>
      );
    }
  }
  export default Glitch;