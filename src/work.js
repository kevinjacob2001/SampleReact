import React from "react";
import "./App.css";

function Tweet(props) {
  return (
    <div className="app">
      <h1>Name:{props.name}</h1>
 
  <h1>No of likes:{props.like}</h1>
  <p>This is a tweet:{props.tw}</p>
    </div>
  );
}

export default Tweet;
