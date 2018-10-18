import React from "react";
import Test from "./Test";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Test />
        Did this refresh?
      </div>
    );
  }
}

export default App;
