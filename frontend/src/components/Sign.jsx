import React from 'react'
import { Link } from 'react-router-dom'

function Sign() {
  return (
    <div className="h-screen bg-pink-300 flex hey">
         <div className="flex-1 py-[80px] pl-14 pr-[100px]">
        <form action="" method="">
           
          <div className="grid space-y-10 p-[50px] border-4  rounded-[25px] backdrop-blur-lg bg-[#ffffff48]">
          <p className="text-center text-4xl font-medium text-[#2B3A55]">S<color className="text-[#CE7777]">'</color>inscrire</p>
           <div className="space-y-4 px-8">
           <div className="space-y-1">
            <label htmlFor="#user" className="text-[#2B3A55]">
              Nom Utilisateur :
            </label>
            <input
              type="text"
              id="user"
              name="user"
              className="w-full border-2 border-[#ce7777bb] h-9 bg-[#F2E5E5] justify-self-center rounded pl-3 focus:outline-none"
              required
            />
            </div>
            <div className="space-y-1">
            <label htmlFor="#phone" className="text-[#2B3A55]">
              Numero Téléphone :
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full border-2 border-[#ce7777bb] h-9 bg-[#F2E5E5] justify-self-center rounded pl-3 focus:outline-none"
              required
            />
            </div>
            <div className="space-y-1">
            <label htmlFor="#email" className="text-[#2B3A55]">
              Adresse email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-2 border-[#ce7777bb] h-9 bg-[#F2E5E5] justify-self-center rounded pl-3 focus:outline-none"
              required
            />
            </div>
            <div className="space-y-1">
            <label htmlFor="#psw" className="text-[#2B3A55]">
              Mot de passe :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border-2 border-[#ce7777bb] h-9 bg-[#F2E5E5] justify-self-center rounded pl-3 focus:outline-none"
              required
            ></input>
            </div>
            </div>
           <div className="grid space-y-1">

            <button
              type="password"
              id="password"
              name="password"
              className="text-white py-2 px-4 rounded-[50px] bg-[#2B3A55] justify-self-center "
              required
            >
              S'inscrire
            </button>
            <p className="text-center text-gray-50 font-medium text-[11px]">Mot de passe<color className="text-[#CE7777] cursor-pointer"> oublié</color>?</p>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1 py-[200px] pr-14 pl-[100px] mx-auto text-center space-y-20"><p className="text-5xl font-medium text-[#2B3A55]">Bienvenue!</p>
      <p className="text-[29px] text-[#2B3A55]">Pour rester en contact avec nous, veuillez vous connecter avec vos informations personnelles</p>
    <Link to='/log'>   <button
              type="password"
              id="password"
              name="password"
              className="py-2 px-5 rounded-[50px] bg-[#CE7777] border border-white justify-self-center text-white"
              required
            >
              Se connecter
            </button></Link>
      </div>
     
    </div>
  )
}

export default Sign