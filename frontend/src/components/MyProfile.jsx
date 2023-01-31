import React,{useEffect,useState} from "react";
import NavBar from "./NavBar";
import add from "../pics/Vector-3.png";
import { Button } from "@material-tailwind/react";
import annonces from "../pics/Group.png";
import profile from "../pics/Vector-1.png"
import photo from "../pics/Vectorr.png";
import Carous from "./Carous";
import Slides from "./Slides";
import { Link } from "react-router-dom";
import withAuth from './withAuth';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'





function MyProfile() {
  const [openTab, setOpenTab] = React.useState(1);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [nav, setNav]= useState(false)
  const handleNav = () =>{
      setNav(!nav)
  }
  const token = localStorage.getItem('access');
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  },[]);


  return (
    <div className="h-screen bg-white text-[#2B3A55]">
          <nav id="header" className="w-full h-20">
      <div className="justify-between">
         <div className="flex w-full justify-end gap-10 p-6">
         
           <Link to='/'> <button className="font-bold mt-2 cursor-pointer  text-[#2B3A55]">
              Acceuil
            </button></Link>
            <Button className="bg-[#E8C4C4] w-[120px] font-bold p-2 rounded">
              Déconnection
            </Button>
          </div>
        </div>
    </nav>
     
      <div className="w-full flex h-full border-t-4  border-t-[#E8C4C4] bg-white">
     
     
      <div
          className="border-double border-r-2 hidden md:block  border-r-[#E8C4C4] w-[30%] py-14 space-y-14 text-center"
          role="tablist"
        >
          <p className="text-4xl font-medium">Mon <i className="text-[#CE7777]">P</i>rofile</p>
          <div className="py-14 space-y-14 ">
            <div className="text-2xl cursor-pointer active:bg-[#E8C4C4] pl-7">
              <p
                className={ 
                  openTab === 1
                    ? "border-r-4 border-[#CE7777] flex gap-2 "
                    : "bg-white flex gap-2"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <img src={profile} alt="" className="h-9 w-9" />
                Mes Informations
              </p>
            </div>
            <div className="text-2xl cursor-pointer active:bg-[#E8C4C4] pl-7 ">
              <p
                className={
                  openTab === 2
                    ? "border-r-4 border-[#CE7777] flex gap-2 "
                    : " bg-white flex gap-2"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <img src={annonces} alt="" className="h-9 w-9" />
                Mes Annonces
              </p>
            </div>
        <div className="text-2xl  cursor-pointer flex  pl-7">
         <Link to='/annonce' className="flex text-[#CE7777] no-underline gap-2 hover:text-[#ce7777bd]">     <img src={add} alt="" className="h-9 w-9" />
              Ajouter Annonce</Link>
            </div>
          </div>
        </div>


        <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}
        
      </div>

      <div className={nav ? "fixed m-4 left-0 top-20 w-[100%] h-full border-r-gray-900 bg-white ease-in-out duration-500" :'fixed left-[-150%] w-[100%] m-4  ease-in-out duration-1000'}>
      <div
          className="   w-full py-14 space-y-14 text-center"
          role="tablist"
        >
          <p className="text-4xl font-medium">Mon <i className="text-[#CE7777]">P</i>rofile</p>
          <div className="py-14 space-y-14 ">
            <div className="text-2xl cursor-pointer active:bg-[#E8C4C4] pl-7">
              <p
                className={ 
                  openTab === 1
                    ? "border-r-4 border-[#CE7777] flex gap-2 "
                    : "bg-white flex gap-2"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <img src={profile} alt="" className="h-9 w-9" />
                Mes Informations
              </p>
            </div>
            <div className="text-2xl cursor-pointer active:bg-[#E8C4C4] pl-7 ">
              <p
                className={
                  openTab === 2
                    ? "border-r-4 border-[#CE7777] flex gap-2 "
                    : " bg-white flex gap-2"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <img src={annonces} alt="" className="h-9 w-9" />
                Mes Annonces
              </p>
            </div>
        <div className="text-2xl  cursor-pointer flex  pl-7">
         <Link to='/annonce' className="flex text-[#CE7777] no-underline gap-2 hover:text-[#ce7777bd]">     <img src={add} alt="" className="h-9 w-9" />
              Ajouter Annonce</Link>
            </div>
          </div>
        </div>
       
       </div>


        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <section className="max-w-4xl p-6 mx-auto ">
                  <div className="grid justify-center mb-16">
                    <input
                      id="picture"
                      type="file"
                      onChange={handleChange}
                      className="hidden"
                    />
                    <img src={file} alt="" className="h-28 w-28 rounded-full" />
                    <label htmlFor="picture">
                      <img
                        src={photo}
                        alt=""
                        className="h-5 w-7 cursor-pointer mt-[-25px] ml-20"
                      />
                    </label>
                  </div>
             {user ?<form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-10 space-x-5">
                      <div className="pl-5">
                        <label
                          className=" dark:"
                          htmlFor="username"
                        >
                          Nom :
                        </label>
                        <input
                          id="username"
                          type="text"
                          value={user.last_name}
                          onChange={(e)=>{setUser(e.target.value)}}
                          className="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          className=" dark:"
                          htmlFor="prenom"
                        >
                          Prénom :
                        </label>
                        <input
                          id="prenom"
                          type="text"
                          value={user.first_name}
                          onChange={(e)=>{setUser(e.target.value)}}
                          className="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          className=" dark:"
                          htmlFor="emailAddress"
                        >
                          Adresse Email :
                        </label>
                        <input
                          id="emailAddress"
                          type="email"
                          value={user.email}
                          onChange={(e)=>{setUser(e.target.value)}}
                          className="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          className=" dark:"
                          htmlFor="phone"
                        >
                          Numero Téléphone :
                        </label>
                        <input
                          id="phone"
                          type="text"
                          value={user.phone}
                          onChange={(e)=>{setUser(e.target.value)}}
                          className="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          className=" dark:"
                          htmlFor="Address"
                        >
                          Adresse :
                        </label>
                        <input
                          id="Address"
                          type="text"

                          className="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div className="flex justify-center mt-6 ">
                        <Button className="px-10 text-[15px]  leading-5 text-white transition-colors duration-300 transform bg-[#2B3A55] rounded-[50px] hover:bg-[#2b3a55b6] focus:outline-none focus:bg-[#26324a]">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  </form> :null}
                  
                </section>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                {user ? <Slides mail={user.email} /> :null}
             
              </div>
             
            </div>
          </div>
        </div>





      </div>
    </div>
  );
}

export default MyProfile;
