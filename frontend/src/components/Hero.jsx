import React from "react";
import '../index.css';
import Butt from "./Butt";
import NavBar from "./NavBar";

function Hero() {
  return (<div className="home h-screen ">
    <NavBar col={1} />
    
    
    <div className="mx-auto text-white text-center  w-[70%]  py-20">
        <p className="text-[70px] leading-[80px]">Partout ... A tout moment Pour tous les niveaux</p>
        <p className="text-[25px] mt-[-5px]">Nous sommes a votre disposition pour vous satisfaire</p>
        
    </div>
    <div className="flex mx-auto  bg-gray-50 justify-center w-fit rounded h-14">
      <div className="p-3 ">
      <select className="border-r border-r-black cursor-pointer focus:outline-none mr-3 bg-gray-50">Wilaya
                <option value="Wilaya" selected disabled hidden>Wilaya</option>
                <option value="1AS">Bejaia</option>
                <option value="2AS">Setif</option>
                </select>


                <select className="cursor-pointer focus:outline-none bg-gray-50">Niveau
                <option value="Niveau" selected disabled hidden>Niveau</option>
                <option value="1AS">1AS</option>
                <option value="2AS">2AS</option>
                </select>
      </div>
   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative flex"> 
       
            <input type="search" id="default-search" class="block p-4 pl-10 w-[600px] text-sm text-gray-900 bg-gray-50 rounded-lg outline-none" placeholder="Search ..." required />
            <button type="submit" class="text-white absolute flex gap-2 right-2.5 bottom-2.5 bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Chercher <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
       
        </div>
        
    </div>
   
  </div>);
}

export default Hero;
