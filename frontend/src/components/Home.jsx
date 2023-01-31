import React,{useEffect,useState,useContext} from 'react'
import Butt from './Butt'
import Detail from './Detail'
import Footer from './Footer'
import Hero from './Hero'
import NavBar from './NavBar'
import Quote from './Quote'
import Regions from './Regions'
import Suggest from './Suggest'
import { Context } from "../Context";


function Home() {
  const [annonce, setAnnonce]=useState();
  const token = localStorage.getItem('access');
  const [aff, setAff]=useState();
  const {loggedIn, setLoggedIn} = useContext(Context);
useEffect(()=>{
  fetch('http://localhost:8000/api/posts/', {
      
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
          Authorization:'Bearer ' + token
        
  }})
  .then((response)=>{
    if (response.status===401){
      setAff(0);
    }
      return response.json();
  })
  .then((data)=>{
      console.log(data)
      setAnnonce(data);
  })
},[]);
  return (
    <div>
      {aff===0 ? null :  <Butt />}
        <Hero />
      
        <Regions />
        {aff===0 ? null :  <Suggest />}
       
        <Quote />
        
        <Footer />
        
    </div>
  )
}

export default Home