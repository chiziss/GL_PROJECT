import React from 'react'
import { Button } from "@material-tailwind/react";
import "../index.css"
import camera from "../pics/camera.png"
import { Link } from 'react-router-dom';
function AddAnnonce() {
  return (
    <div className='annonce h-full'>
    <nav id="header" class="w-full h-20 bg-white">
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
<form className=' p-12 md:px-[300px]' method='' action=''>
        <div className='bg-[#F2E5E5] px-20 py-12 space-y-10 w-full rounded-3xl'>
        <h2 className='text-center font-bold'> Annonce</h2>
        <div className='space-y-8 '>
        <div className='grid '>
            <label for="title">Titre annonce</label>
            <input id="title" name='title' type="text" className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='grid'>
            <label for="module">Matière</label>
            <input id="module" name='module' type="text" className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='grid'>
            <label for="level">Niveau</label>
            <input id="level" name='level' type="text" className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='grid'>
            <label for="lieu">Lieu</label>
            <input id="lieu" name='lieu' type="text" className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='grid'>
            <label for="text">Description</label>
            <textarea name="paragraph_text" cols="50" rows="6" className='rounded-xl mt-1 focus:outline-none p-2'></textarea>        </div>
        </div>
        <div>
           <input id="picture" type="file" className="hidden"/>
          <label for="picture">  <img src={camera} alt='' className='h-14 w-14 cursor-pointer'/></label>
        </div>
        <div className='gap-2 flex justify-end text-white'>
            <button className='bg-[#CE7777] py-1 px-4 rounded-xl'>Annuler</button>
            <button className='bg-[#2B3A55] py-1 px-4 rounded-xl'>Publier</button>
        </div>
        </div>
    </form>
    </div>
  )
}

export default AddAnnonce