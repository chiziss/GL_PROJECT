import React from 'react'
import Butt from './Butt'
import Detail from './Detail'
import Footer from './Footer'
import Hero from './Hero'
import NavBar from './NavBar'
import Quote from './Quote'
import Regions from './Regions'
import Suggest from './Suggest'

function Home() {
  return (
    <div>
         <Butt />
        <Hero />
      
        <Regions />
        <Suggest />
        <Quote />
         <Detail />
        <Footer />
        
    </div>
  )
}

export default Home