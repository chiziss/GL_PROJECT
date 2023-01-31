import React from 'react'
import hell from "../pics/Kay.png"
import Butt from './Butt';
import NavBar from './NavBar';
import Bejaia from "../pics/Bejaia.png"
import Alger from "../pics/Alger.png"
import Tipaza from "../pics/Tipaza.png"
import Oran from "../pics/Oran.png"
import Setif from "../pics/Setif.png"
import Tebessa from "../pics/Tebessa.png"

function Wilaya(props){
 return(
    <div class="lg:flex relative overflow-hidden w-max">
        
        <img class="object-cover w-full h-[190px] rounded-lg filter blur-[1px] contrast-1" src={`${props.img}`} alt=""/>
      <div className='absolute top-[20%] left-[30%] text-center '>
      <p className='text-white text-5xl'>{props.name}</p>
       <button className='text-white border border-white rounded-[50px] py-2 px-4 text-2xl '>voir plus</button>
      </div>
      
    </div>

    
 );
}

function Regions() {
  return (
    <section class="md:h-screen h:fit">
        
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl ml-6 mt-4 font-semibold text-gray-800 lg:text-5xl dark:text-white">L<u class="md:underline-offset-[18px]">es régions</u> les plus demandées</h1>
        <div class="grid grid-cols-1 px-14 md:px-0 gap-9 mt-16 md:mt-18 md:grid-cols-3">

        <Wilaya img={Bejaia} name="Bejaia"/>
        <Wilaya img={Alger} name="Alger"/>
        <Wilaya img={Tipaza} name="Tipaza"/>
        <Wilaya img={Oran} name="Oran"/>
        <Wilaya img={Setif} name="Setif"/>
        <Wilaya img={Tebessa}name="Tebessa"/>
        </div>
    </div>
</section>
  )
}

export default Regions