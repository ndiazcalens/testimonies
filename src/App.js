import React from "react";
import './App.css';
import Testimony from "./components/testimony";
import tesData from "./data/tesData.json";


function App() {
  return (
    <div className="App">
      <div className="principal-container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
        image={tesData[0].image}
        name= {tesData[0].name}
        country= {tesData[0].country}
        job= {tesData[0].job}
        company= {tesData[0].company}
        testimony= {tesData[0].testimony}
        />
        <Testimony
        image={tesData[1].image}
        name= {tesData[1].name}
        country= {tesData[1].country}
        job= {tesData[1].job}
        company= {tesData[1].company}
        testimony= {tesData[1].testimony}
        />
        <Testimony
        image={tesData[2].image}
        name= {tesData[2].name}
        country= {tesData[2].country}
        job= {tesData[2].job}
        company= {tesData[2].company}
        testimony= {tesData[2].testimony}
        />
      </div>  
    </div>
  );
}

export default App;
