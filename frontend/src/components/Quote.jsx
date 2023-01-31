import React from 'react'
import qut1 from "../pics/Qut1.png"
import qut2 from "../pics/Qut2.png"
import pc from "../pics/online-group-studying 1.png"
function Quote() {
  return (
    <div className='md:h-[500px] p-10 mx-3 '>
        <img src={qut1} alt="" className='md:absolute relative  md:flex  right-16 md:h-[50%] md:w-[40%]'/>
        <div className='py-28'>
        <div className='absolute mt-[-300px] mx-2 md:mt-0 md:flex md:right-28 md:left-52 md:pl-28 md:ml-20 bg-[#F2E5E5] rounded-xl'>
        <img src={pc} alt="" className='h-max absolute hidden md:flex left-[-170px]' />
            <dir>
            <p className='text-[#251749] text-3xl font-medium '>C'est tellement facile pour un gamin de joindre un gang, de se droguer ... Nous devrions rendre aussi facile que ca l'implication au études.</p>
            <p className='text-[#CE7777]'>Snoop Dogg <br />Artiste (1971 - )</p>
            </dir>
            <img src={qut2} alt="" className='h-max' />
        </div>
        </div>
    </div>
  )
}

export default Quote