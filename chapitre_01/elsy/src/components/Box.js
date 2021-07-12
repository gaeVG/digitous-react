import React from "react";

const walkCSS ={
    fontSize: "100px",
}

class Steps extends React.Component {

    render() {
        return (
            <div className="col-6 col-sm-3 box">
                <span className="material-icons" style={{fontSize: 100, color: this.props.color}}>{this.props.icon}</span>
                <p>{this.props.value} {this.props.unit}</p>
            </div>
        )
    }
}

export default Steps