import React from 'react'
import { Link } from 'react-router-dom'
import fix from "../pics/Group23.png"
function Butt() {
  return (
    <div className='w-full fixed justify-end flex mt-[18%] pr-5 '>
     <Link to="/annonce">   <button className='h-14 w-14 rounded-full '> <img src={fix} alt="" /> </button></Link>
        </div>
  )
}

export default Butt