import './App.css';
import React from 'react';
import UserInfo from './components/UserInfo'
const data =require("./users.json")

class App extends React.Component {

  render() {

    return (
      data.map(user => {
        return (
          <UserInfo user={user.name} username={user.username} email={user.email} />
        );
      })
    );
  }
}

export default App;
