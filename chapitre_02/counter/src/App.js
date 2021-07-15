import './App.css';
import React from "react"
import Counter from "./components/Counter.js"

class App extends React.Component {
  constructor() {
    super()

    this.state ={
      counter : 0
    }
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <Counter counter={this.state.counter} add={() => {
              this.setState({ counter : this.state.counter +1 }) 
          }} subtract={() =>  {
            if (this.state.counter > 0) {
              this.setState({ counter : this.state.counter -1 })
            }
          }} />
        </div>
        
      </div>
    )
  }

}

export default App;
