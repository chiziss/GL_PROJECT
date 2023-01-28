import React from 'react'
import rs1 from "../pics/Rs1.png"
import rs2 from "../pics/Rs2.png"
import rs3 from "../pics/Rs3.png"
import rs4 from "../pics/Rs4.png"


function Footer() {
  return (
    <div className='h-fit bg-[#251749] text-gray-300 flex justify-between pt-16 pb-10 px-16 gap-20'>
     <div className='w-[30%]'>
        <p className='text-[20px]'>est une platforme ou vous pouvez trouver tous ce qui concerne les annonces du soutiens scolaire</p>
     </div>
     <div className=''>
        <h3 className='grid text-center'>Nos services</h3>
        <ul className='ml-3'>
            <li>Ajouter une annonce</li>
            <li>Rechercher</li>
            <li> Notre catalogue</li>
            <li>FAQ</li>
        </ul>
     </div>
     <div className='grid text-center'>
        <h3>Nous contacter</h3>
        <ul className='flex gap-5'>
            <li> <img src={rs1} alt="" /> </li>
            <li><img src={rs2} alt="" /></li>
            <li><img src={rs3} alt="" /></li>
            <li><img src={rs4} alt="" /></li>
        </ul>
     </div>
    </div>
  )
}

export default Footer