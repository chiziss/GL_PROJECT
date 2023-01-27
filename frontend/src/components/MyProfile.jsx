import React from "react";
import NavBar from "./NavBar";
import add from "../pics/Vector-3.png";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import annonces from "../pics/Group.png";
import profile from "../pics/Vector-1.png"
import photo from "../pics/Vectorr.png";
import Carous from "./Carous";
import Slides from "./Slides";
import { Link } from "react-router-dom";
function MyProfile() {
  const [openTab, setOpenTab] = React.useState(1);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="h-screen bg-white text-[#2B3A55]">
          <nav id="header" class="w-full h-20">
      <div class="justify-between">
         <div class="flex w-full justify-end gap-10 p-6">
         
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
          className="border-double border-r-2  border-r-[#E8C4C4] w-[30%] py-14 space-y-14 text-center"
          role="tablist"
        >
          <p className="text-4xl font-medium">Mon <color class="text-[#CE7777]">P</color>rofile</p>
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
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <section class="max-w-4xl p-6 mx-auto ">
                  <div class="grid justify-center mb-16">
                    <input
                      id="picture"
                      type="file"
                      onChange={handleChange}
                      className="hidden"
                    />
                    <img src={file} alt="" className="h-28 w-28 rounded-full" />
                    <label for="picture">
                      <img
                        src={photo}
                        alt=""
                        className="h-5 w-7 cursor-pointer mt-[-25px] ml-20"
                      />
                    </label>
                  </div>

                  <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-10 space-x-5">
                      <div className="pl-5">
                        <label
                          class=" dark:"
                          for="username"
                        >
                          Nom :
                        </label>
                        <input
                          id="username"
                          type="text"
                          class="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          class=" dark:"
                          for="prenom"
                        >
                          Prénom :
                        </label>
                        <input
                          id="prenom"
                          type="text"
                          class="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          class=" dark:"
                          for="emailAddress"
                        >
                          Adresse Email :
                        </label>
                        <input
                          id="emailAddress"
                          type="email"
                          class="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          class=" dark:"
                          for="phone"
                        >
                          Numero Téléphone :
                        </label>
                        <input
                          id="phone"
                          type="text"
                          class="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div>
                        <label
                          class=" dark:"
                          for="Address"
                        >
                          Adresse :
                        </label>
                        <input
                          id="Address"
                          type="text"
                          class="block  w-full px-4 py-2 mt-2  bg-[#F2E5E5] border-2 border-[#E8C4C4] rounded-xl dark:bg-red-300 dark: dark:border-red-300 focus:border-red-300 focus:ring-[#E8C4C4] focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring"
                        />
                      </div>

                      <div class="flex justify-center mt-6 ">
                        <Button className="px-10 text-[15px]  leading-5 text-white transition-colors duration-300 transform bg-[#2B3A55] rounded-[50px] hover:bg-[#2b3a55b6] focus:outline-none focus:bg-[#26324a]">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <Slides />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
