import React,{createContext, useContext} from "react";
import drp from "../pics/dropdown.png"
import { Button } from "@material-tailwind/react";
import { Link, NavLink} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/user.js';
export const LoginContext = createContext();

function NavBar(props) {

  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const authLinks = (
		<>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/profile'>
					Profile
				</NavLink>
			</li>

			<li className='nav-item'>
				<a className='nav-link' href='#!'>
					Logout
				</a>
			</li>
		</>
	);

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
        <div className="w-[30%]">

        </div>
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden md:flex md:justify-center w-full ">
          <nav>
            <ul class={ props.col === 1 ? "md:flex md:justify-end text-base pt-4 md:pt-0 text-white" : "md:flex md:justify-end text-base pt-4 md:pt-0"}>
              <li  class="inline-block no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  Praimaire
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li  class="inline-block no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  CEM
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li class="inline-block no-underline hover:text-black flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  Lycée
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
              <li  class="inline-block no-underline flex font-medium text-lg py-2 px-4 lg:-ml-2">
                  Universitée
                  <img src={drp} alt="" className="h-9 cursor-pointer " ></img>
              </li>
            </ul>
          </nav>
        </div>
       
        <div class="flex w-full justify-end mr-0 md:mr-10">
          <div class="auth flex items-center">
         <Link to='sign' >   <Button className="bg-transparent text-gray-800 w-[120px] font-bold  p-2 rounded border border-gray-300 mr-4">
              S'inscrire
            </Button></Link>
         <Link to='log'>   <Button className="bg-transparent text-black w-[120px] font-bold p-2 rounded border border-gray-300">
              Se connecter
            </Button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
