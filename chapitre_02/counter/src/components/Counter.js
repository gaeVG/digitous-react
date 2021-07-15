import React from "react";
import './Counter.css'

class Counter extends React.Component {

    render() {

        return(
            <div className="counter">
                <button onClick={this.props.subtract}>-</button>
                <h2>{this.props.counter}</h2>
                <button onClick={this.props.add}>+</button>
            </div>
        )
    }
}

export default Counter