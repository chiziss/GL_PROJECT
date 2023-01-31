import React,{useEffect, useState} from 'react'
import shape from "../pics/shape.png"
import hh from "../pics/hh1.png"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import Butt from './Butt';
import { Link } from 'react-router-dom';
function Suggest() {
    const [annonce, setAnnonce]=useState();
    const token = localStorage.getItem('access');

  useEffect(()=>{
    fetch('http://localhost:8000/api/posts/', {
        
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            Authorization:'Bearer ' + token
          
    }})
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        setAnnonce(data);
    })
  },[]);

  return (
    <div>
        
    <section class="bg-white dark:bg-gray-900 ">
       
    <div class="container  py-10 mx-auto md:flex grid">
        <div className='flex-1'>
        <img src={shape} alt="" className='absolute w-[70%] md:w-[45%] md:h-[400px] left-0'/>
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white absolute">Suggestions :</h1>
        <Card className="w-96 bg-transparent mt-28 ml-[-20px]">
      <CardHeader color="blue" className="relative md:w-[350px]  md:h-[300px]">
        <img
          src={hh}
          alt="img-blur-shadow"
          className="md:h-full h-[200px]  w-full bg-blue-400"
        />
      </CardHeader>
      <CardBody className="">
      <div class="flex flex-col justify-between lg:mx-6">
               <Link to="/detail">     <p href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Science pour 3AS
                    </p></Link>
                    <p className='text-gray-500'>
                        cours de soutien en science naturel avec une enseignate experimentée
                    </p>
                    
                    <span class="text-sm text-gray-500 flex dark:text-gray-300 gap-4">
                        <p className='bg-[#F2E5E591] rounded  px-3'>3AS</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Tipaza</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Science</p>
                    </span>
                </div>
      </CardBody>
    </Card>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 flex-1 ">
           
           { annonce ? annonce.map((post)=>{
                return(
                 <div class="lg:flex">
                <img class="object-cover w-[230px] h-[190px]  rounded-lg lg:w-64" src={`http://localhost:8000${post.photo}`} alt=""/>
                
                <div class="flex flex-col justify-between py-6 lg:mx-6">
                   <Link to={'/'+post.id} > <p  class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        {post.title}
                    </p></Link>
                    <p className='text-gray-500'>
                        {post.description}
                    </p>
                    
                    <span class="text-sm text-gray-500 flex dark:text-gray-300 gap-4">
                        <p className='bg-[#F2E5E591] rounded  px-3'>{post.category}</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'> {post.lieu} </p>
                        <p className='bg-[#F2E5E591] rounded  px-3'> {post.theme} </p>
                    </span>
                </div>
                </div>);
           }): 'there are no posts yet'}
           
           

           
        </div>
    </div>
</section>
</div>
  )
}

export default Suggest