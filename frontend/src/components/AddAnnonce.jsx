import React , {useEffect,useState}from 'react'
import { Button } from "@material-tailwind/react";
import "../index.css"
import camera from "../pics/camera.png"
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
function AddAnnonce() {
const navigate=useNavigate();
const {id} =useParams();
const [annonce, setAnnonce]=useState();
const [tmpAnnonce, setTmpAnnonce]=useState();
const token = localStorage.getItem('access');
useEffect(()=>{
  console.log(token)
})


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
}, []);

const [title, setTitle]=useState();
const [tarif, setTarif]=useState();
const [theme, setTheme]=useState();
const [modalite, setModalite]=useState();
const [category, setCategory]=useState();
const [desc, setDesc]=useState();
const [lieu, setLieu]=useState();
const [image, setImage]=useState();
const formData = new FormData();
formData.append('image', image);


function posteAnnonce(e) {
  e.preventDefault();
  
  fetch('http://localhost:8000/api/posts/',{
   method: 'POST',
     headers: { 'Content-Type': 'application/json',
     Authorization:'Bearer ' + token
   },
   body: JSON.stringify({
    user: user.first_name ,
  title: title,
  theme :theme,
  category : category,
  lieu:lieu,
  modalite :modalite,
  tarif : tarif,
  description : desc,
   photo: formData,
  }),
    
 }).then((response)=>{
  if(response.status === 404){
    navigate('/')

}else if (response.status === 401) {
    
    navigate('/log');
}
if (!response.ok) {
    throw new Error('Something went wrong, try again later');
}
  console.log(response.data);
     
 }).then((data)=>{
 
   console.log(localStorage)
 }).catch((e)=>{console.log(e.message);})
 };


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
<form id="anp"  className=' p-12 md:px-[300px]' onSubmit={posteAnnonce} >
        <div className='bg-[#F2E5E5] px-10 md:px-20 py-12 space-y-10 w-full rounded-3xl'>
        <h2 className='text-center font-bold'> Annonce </h2>
        <div className='space-y-8 '>
        <div className='grid '>
            <label for="title">Titre annonce</label>
            <input id="title" name='title' type="text"  
           onChange={(e) =>{ setTitle(e.target.value)}}  className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='grid'>
            <label for="module">Matière</label>
            <input id="module" name='theme' type="text" onChange={(e) =>{ setTheme(e.target.value)}} className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='grid'>
            <label for="level">Niveau</label>
            <input id="level" name='category' type="text" onChange={(e) =>{ setCategory(e.target.value)}} className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='grid'>
            <label for="lieu">Lieu</label>
            <input id="lieu" name='lieu' type="text" onChange={(e) =>{ setLieu(e.target.value)}} className='py-1.5 rounded-xl mt-1 focus:outline-none p-2' />
        </div>
        <div className='flex  justify-between'>
            <div className='grid'>   
            <label for="modalite">Modalité</label>
            <input id="modalite" name='modalite' type="text"  onChange={(e) =>{ setModalite(e.target.value)}} className='py-1.5 rounded-xl mt-1 w-[80%] focus:outline-none p-2' />
            </div>
            <div className='grid'>
            <label for="tarif">Tarif</label>
            <input id="tarif" name='tarif' type="text" onChange={(e) =>{ setTarif(e.target.value)}} className='py-1.5 rounded-xl mt-1 w-[80%] focus:outline-none p-2' />
            </div>
        </div>
        <div className='grid'>
            <label for="text">Description</label>
            <textarea id='text' name="description" cols="50" rows="6" onChange={(e) =>{ setDesc(e.target.value)}} className='rounded-xl mt-1 focus:outline-none p-2'></textarea>        </div>
        </div>
        <div>
           <input id="photo" name='photo' type="file"  onChange={(e) =>{ setImage(e.target.value)}} className="hidden"/>
          <label for="photo">  <img src={camera} alt='' className='h-14 w-14 cursor-pointer'/></label>
        </div>
        <div className='gap-2 flex justify-end text-white'>
          <Link to="/myProfile">  <button className='bg-[#CE7777] py-1 px-4 rounded-xl text-white'>Annuler</button></Link>
          <button form='anp' type='submit' className='bg-[#2B3A55] py-1 px-4 rounded-xl'>Publier</button>
        </div>
        </div>
    </form>
    </div>
  )
}

export default AddAnnonce