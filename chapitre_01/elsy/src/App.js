import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css';
import './styles/global.css'
import Box from "./components/Box.js";

const tempMin =-20, tempMax =40;
const heartMin =80, heartMax =180;
const stepsMin =0, stepsMax =50000;

class App extends React.Component {
  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <Box color="#3A85FF" icon="local_drink" value="1.5" unit="L" />
          <Box color="black" icon="directions_walk" value="3000" unit="steps" />
          <Box color="red" icon="favorite" value="120" unit="bpm" />
          <Box color="yellow" icon="wb_sunny" value="-10" unit="°C"/>
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
