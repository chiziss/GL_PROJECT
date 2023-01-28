import React from 'react'
import qut1 from "../pics/Qut1.png"
import qut2 from "../pics/Qut2.png"
import pc from "../pics/online-group-studying 1.png"
function Quote() {
  return (
    <div className='h-[500px] p-5 '>
        <img src={qut1} alt="" className='absolute right-14 h-[50%] w-[40%]'/>
        <div className='py-28'>
        <div className='absolute flex right-28 left-52 pl-28 ml-20 bg-[#F2E5E5] rounded-xl'>
        <img src={pc} alt="" className='h-max absolute left-[-170px]' />
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