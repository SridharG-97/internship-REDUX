import React,{useEffect} from 'react';
import axios from "axios";
import {addAbout} from "../../Redux/Actions/index"
import  {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


function Content() {


    const about = useSelector((state)=>state.about)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((data) => {
            dispatch (addAbout(data))
            console.log(data);
        })
      });

  return (
    <div>
hello      
    </div>
  )
}

export default Content;
