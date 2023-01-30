import React , {useEffect,useState}from 'react'
import { Button } from "@material-tailwind/react";
import "../index.css"
import camera from "../pics/camera.png"
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


function ModifyAnn() {
    const navigate=useNavigate();
    const {id} =useParams();
    const [annonce, setAnnonce]=useState();
    const [tmpAnnonce, setTmpAnnonce]=useState();
    const location = useLocation()
   // const { id } = location.state
    const token = localStorage.getItem('access');
    const url='http://localhost:8000/api/posts/'+id+'/' ;
   
    useEffect(()=>{
      console.log(token)
    })


    useEffect(()=>{
       
        fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
          Authorization:'Bearer ' + token
        }})
         .then((response)=>{
            if(response.status === 404){
                navigate('/')
            }
            else if (response.status === 401) {
        
              navigate('/log');
          }
          if (!response.ok) {
              throw new Error('Something went wrong, try again later');
          }
            return response.json();
        })
        .then((data)=>{
           
            setTmpAnnonce(data);
        })
    })
 

  
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
    <form className=' p-12 md:px-[300px]' >
            <div className='bg-[#F2E5E5] px-20 py-12 space-y-10 w-full rounded-3xl'>
            <h2 className='text-center font-bold'> Annonce </h2>
            <div className='space-y-8 '>
            <div className='grid '>
                <label for="title">Titre annonce  </label>
                <input id="title" name='title' type="text" value={tmpAnnonce.title}  className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
            </div>
            <div className='grid'>
                <label for="module">Matière</label>
                <input id="module" name='theme' type="text" value={tmpAnnonce.theme} className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
            </div>
            <div className='grid'>
                <label for="level">Niveau</label>
                <input id="level" name='category' type="text" value={tmpAnnonce.category} className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
            </div>
            <div className='grid'>
                <label for="lieu">Lieu</label>
                <input id="lieu" name='lieu' type="text" value={tmpAnnonce.lieu} className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
            </div>
            <div className='flex  justify-between'>
                <div className='grid'>   
                <label for="modalite">Modalité</label>
                <input id="modalite" name='modalite' type="text" value={tmpAnnonce.modalite} className='py-1.5 rounded-xl mt-1 w-[80%] focus:outline-none p-2' />
                </div>
                <div className='grid'>
                <label for="tarif">Tarif</label>
                <input id="tarif" name='tarif' type="text" value={tmpAnnonce.tarif} className='py-1.5 rounded-xl mt-1 w-[80%] focus:outline-none p-2' />
                </div>
            </div>
            <div className='grid'>
                <label for="text">Description</label>
                <textarea id='text' name="description" cols="50" rows="6" value={tmpAnnonce.description} className='rounded-xl mt-1 focus:outline-none p-2'></textarea>        </div>
            </div>
            <div>
               <input id="photo" name='photo' type="file" className="hidden"/>
              <label for="photo">  <img src={camera} alt='' className='h-14 w-14 cursor-pointer'/></label>
            </div>
            <div className='gap-2 flex justify-end text-white'>
              <Link to="/myProfile">  <button className='bg-[#CE7777] py-1 px-4 rounded-xl text-white'>Annuler</button></Link>
              { id?  <button type='submit' className='bg-[#2B3A55] py-1 px-4 rounded-xl'>Modifier</button>:  <button type='submit' className='bg-[#2B3A55] py-1 px-4 rounded-xl'>Publier</button>}
            </div>
            </div>
        </form>
        </div>
      )
}

export default ModifyAnn