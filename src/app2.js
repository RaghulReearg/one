import React, { Component } from "react";
import Ninja from "./ninja";
class App2 extends Component {
  state = {
    ninjas: [
      { name: "Raghul", age: "20", Hobby: "playing", id: "1" },
      { name: "Ragh", age: "22", Hobby: "playing", id: "2" },
      { name: "Raul", age: "23", Hobby: "playing", id: "3" }
    ]
  };
  render() {
    return (
      <div>
        {/* <Ninja name="Raghul" age="24" />
        <Ninja name="Reerag" age="21" /> */}
        <Ninja ninja={this.state.ninjas} />
      </div>
    );
  }
}
export default App2;
