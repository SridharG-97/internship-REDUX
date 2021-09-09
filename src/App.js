import './App.css'
import Home from "./Container/Home"
import React ,{useState,useEffect} from "react";
import axios from "axios";
import Content from "./Container/Content/Content"
function App() {


  return (
    <div className="App">

      <Content/>                                
    </div>
  );
}

export default App;
