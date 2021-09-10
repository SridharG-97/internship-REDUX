import React, { useEffect } from 'react';
import axios from "axios";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";



function Content() {

  const addAbout = (data) => {
    return {
      type: "ADD_ABOUT",
      data: data,
    }
  }
  const dispatch = useDispatch()


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((data) => {
        dispatch(addAbout(data.data))
      })
  });

  const data = useSelector((state) => state.state)

  const handleShow=(item)=> {


    console.log(item);
  }
 

  return (
    <div>
      {data ?data.map((item)=>{
        return (
        <div className="Home">
          <div className="content">
            <ul>
              <li>

              <img  onClick={()=>handleShow(item)} src={item.url} alt="image" width="10%" style={{cursor:'pointer'}}/>
          <p>Title:{item.title}</p> 
         
          <p>Id:{item.id}</p> 
          <p>Thumnail:{item.thumbnailUrl}</p>
          </li>
            </ul>
</div>
          </div>
          )
      }):""}
    </div>
  )
}

export default Content;
