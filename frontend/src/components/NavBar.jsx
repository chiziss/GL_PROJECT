import React,{createContext, useContext,useState,useEffect} from "react";
import drp from "../pics/dropdown.png"
import { Button } from "@material-tailwind/react";
import { Link, NavLink,useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/user.js';
import { Context } from "../Context";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


function NavBar(props) {
  const [annonce, setAnnonce]=useState();
  const token = localStorage.getItem('access');
  const [aff, setAff]=useState(1);

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

  const {loggedIn, setLoggedIn} = useContext(Context);

  
    const [nav, setNav]= useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }

	const guestLinks = (
		<>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/login'>
					Login
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/register'>
					Register
				</NavLink>
			</li>
		</>
	);
  return (
    <nav id="header" class="w-full  text-black bg-transparent">
      <div class="w-full flex justify-between">
        <div className="md:w-[30%]">

        </div>
       

        <div class="hidden md:flex md:justify-center md:w-full ">
          <nav>
            <ul class={ props.col === 1 ? "md:flex md:justify-end text-base pt-4 md:pt-0 text-white" : "md:flex md:justify-end text-base pt-4 md:pt-0"}>
              <li  class=" no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  Praimaire
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li  class=" no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  CEM
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li class=" no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  Lycée
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li  class=" no-underline flex hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                  Universitée
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
            </ul>
          </nav>
        </div>

        <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        
        
      </div>
      <div className={nav ? "fixed m-4 left-0 top-1 w-[100%] h-fit border-r-gray-900 bg-gray-700 ease-in-out duration-500" :'fixed top-[-100%] w-[100%] m-4 left-0 ease-in-out duration-1000'}>
      <nav>
            <ul class={ props.col === 1 ? "md:flex md:justify-end text-base pt-4 md:pt-0 text-white" : "md:flex md:justify-end text-base pt-4 md:pt-0"}>
              <li  class=" no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  Praimaire
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li  class=" no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  CEM
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li class=" no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  Lycée
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li  class=" no-underline flex hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                  Universitée
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex w-full justify-end mr-0 md:mr-10">
          
          {aff===0 ? <div class="auth flex items-center">
         <Link to='sign' >   <Button className="bg-transparent text-gray-800 md:w-[120px] font-bold  p-2 rounded border border-gray-300 mr-4">
              S'inscrire 
            </Button></Link>
         <Link to='log'>   <Button className="bg-transparent text-black md:w-[120px] font-bold p-2 rounded border border-gray-300">
              Se connecter
            </Button></Link>
          </div>
        :
        <div class="auth flex items-center">
         <Link to='/myProfile' >   <Button className="bg-transparent text-gray-800 md:w-[120px] font-bold p-2 rounded border border-gray-300 mr-4">
              Mon Profile
            </Button></Link>
         <Link to='/'>   <Button className="bg-transparent text-black md:w-[120px] font-bold p-2 rounded border border-gray-300">
              Deconnexion
            </Button></Link>
          </div>}
      </div>
      </div>
    </nav>
  );
}

export default NavBar
