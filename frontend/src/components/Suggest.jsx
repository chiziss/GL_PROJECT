import React from 'react'
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
function Suggest() {
  return (
    <div>
        
    <section class="bg-white dark:bg-gray-900 ">
       
    <div class="container  py-10 mx-auto flex">
        <div className='flex-1'>
        <img src={shape} alt="" className='absolute h-[400px] left-0'/>
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white absolute">Suggestions :</h1>
        <Card className="w-96 bg-transparent mt-28 ml-[-20px]">
      <CardHeader color="blue" className="relative w-[350px] h-[300px]">
        <img
          src={hh}
          alt="img-blur-shadow"
          className="h-full w-full bg-blue-400"
        />
      </CardHeader>
      <CardBody className="">
      <div class="flex flex-col justify-between lg:mx-6">
                    <p href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Science pour 3AS
                    </p>
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
            <div class="lg:flex">
                <img class="object-cover w-full  rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <p href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Science pour 3AS
                    </p>
                    <p className='text-gray-500'>
                        cours de soutien en science naturel avec une enseignate experimentée
                    </p>
                    
                    <span class="text-sm text-gray-500 flex dark:text-gray-300 gap-4">
                        <p className='bg-[#F2E5E591] rounded  px-3'>3AS</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Tipaza</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Science</p>
                    </span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full  rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <p href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Science pour 3AS
                    </p>
                    <p className='text-gray-500'>
                        cours de soutien en science naturel avec une enseignate experimentée
                    </p>
                    
                    <span class="text-sm text-gray-500 flex dark:text-gray-300 gap-4">
                        <p className='bg-[#F2E5E591] rounded  px-3'>3AS</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Tipaza</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Science</p>
                    </span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full  rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <p href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Science pour 3AS
                    </p>
                    <p className='text-gray-500'>
                        cours de soutien en science naturel avec une enseignate experimentée
                    </p>
                    
                    <span class="text-sm text-gray-500 flex dark:text-gray-300 gap-4">
                        <p className='bg-[#F2E5E591] rounded  px-3'>3AS</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Tipaza</p>
                        <p className='bg-[#F2E5E591] rounded  px-3'>Science</p>
                    </span>
                </div>
            </div>

            
        </div>
    </div>
</section>
</div>
  )
}

export default Suggest