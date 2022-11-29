import { Component } from "react";

class CounterEx extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { value: 0 }
      // this.inc = this.inc.bind(this)
      // this.dec = this.dec.bind(this)
  // }
  state = { value: 0 }

  // to change this.setState({ value: 0})
  // inc(){

  // }
  inc = () => {
    this.setState({ value: this.state.value + 1})
  }

  dec = () => {
    this.setState({ value: this.state.value - 1})
  }

  render() {
    return (
      <>
        <h1>Counter Ex1</h1>
        <p>{this.state.value}</p>
        <button
          onClick={this.inc}
        >+</button>
        <button
          onClick={this.dec}
        >-</button>
      </>
    )
  }
}

export default CounterEx;