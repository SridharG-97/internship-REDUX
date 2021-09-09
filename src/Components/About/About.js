import React from 'react';
import {useSelector} from "react-redux";


function About() {
    const about = useSelector((state)=>state.about)
  return (
    <div>
      <p>{}about</p>
    </div>
  )
}

export default About
