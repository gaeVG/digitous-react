import React from "react"

class UserInfo extends React.Component {
    render() {

        return (
            <div>
                <h4>{this.props.user})</h4>
                <p>Pseudo : {this.props.username}</p>
                <p>Adresse mél : {this.props.email}</p>
            </div>
        )
    }
}

export default UserInfo;
