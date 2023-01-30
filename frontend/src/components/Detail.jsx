import React, {useEffect,useState} from 'react'
import NavBar from './NavBar'
import back from "../pics/formulaire.png"
import Carous from './Carous'
import fix1 from "../pics/fix3.png"
import fix2 from "../pics/fix1.png"
import fix3 from "../pics/fix2.png"
import hh2 from "../pics/hh2.png"
import hh4 from "../pics/hh4.png"
import hh3 from "../pics/hh3.png"
import Footer from './Footer'
import { useParams, useNavigate, Link } from 'react-router-dom'

function Detail() {
    const navigate= useNavigate();
    const {id} =useParams();
    const [annonce, setAnnonce]=useState();
    const [loggedIn, setLoggedIn] = useState();
    const [error, setError] = useState();
    useEffect(()=>{
       
        fetch('http://localhost:8000/api/posts/'+id +'/', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            },
        })
        .then((response)=>{
            if(response.status === 404){
                navigate('/')
            
            }else if (response.status === 401) {
                setLoggedIn(false);
                navigate('/log');
            }
            if (!response.ok) {
                throw new Error('Something went wrong, try again later');
            }
            return response.json();
        })
        .then((data)=>{
            setAnnonce(data);
        }).catch((e) => {
            setError(e.message);
        });
    },[])

  return (
    <div>
        <NavBar col={0} />
        <div class="max-w-2xl mx-auto mt-5">

            <form>   
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-6 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-xl ml-3 py-3 border border-red-300  " placeholder="Search..." required/>
                    <button type="submit" class="text-black absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-[#F2E5E5]">Search</button>
                </div>
            </form>
        </div>
        {annonce ? <div className='grid space-y-10 mt-14 justify-items-center'>
            <div className="flex gap-3">
            {error ? <p>{error}</p> : null}
                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png" className="h-20 w-20 rounded-full" ></img>
                    <div className="leading-6 mt-2"><p className='font-bold text-xl'>{annonce.title} ---  {annonce.modalite}  </p>
                    <p className='text-sm'> {annonce.date} </p>
                    </div>
            </div>
            <div className='w-[50%] h-[50%] '>
            <Carous />
            </div>
            <div className='font-medium w-[50%]'>
                <p> {annonce.description} </p>
                <p>Tarifs : {annonce.tarif} </p>
                <button onClick={()=>{
                    console.log("deleting ...")
                    fetch('http://localhost:8000/api/posts/'+id +'/' ,{
                    method: 'DELETE',
                    headers: { 
                                'Content-Type': 'application/json',
                                 Authorization: 'Bearer ' + localStorage.getItem('access')
                             }
                })
                        .then((response)=>{
                            if (response.status === 401) {
                                setLoggedIn(false);
                                navigate('/log')}
                            if(!response.ok){
                                throw new Error('something went wrong');
                            }
                            navigate('/');
                        })
                        .catch((e)=>{
                            setError(e.message);
                            
                        })
                }}>delete</button>
            </div>
            <div className='absolute right-28 space-y-5'>
            <img src={fix1} alt="" className='h-7 cursor-pointer hover:fill-red-300'/>
            <img src={fix2} alt="" className='h-7 cursor-pointer' />
            <img src={fix3} alt=""  className='h-7 cursor-pointer'/>
           
        </div>
        <div className='p-5'>
            <h3>Autres annonces :</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 px-10'>
                <img src={hh2} alt="" />
                <img src={hh3} alt="" />
                <img src={hh4} alt="" />
            </div>
        </div>
        </div>  : null}
    
       <Footer />
    </div>
  )
}

export default Detail