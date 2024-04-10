
// //

import React from 'react'
import Products from '../components/Products'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Navbar from '../components/Navbar';

const Home = () => {
  return (
      <>
      <Navbar />
  
    <div>

      {/* <h1 className="heading">Home</h1> */}

      <section>

        <h1 style={{fontWeight:"900", fontSize:"xx-large"}}><SiHomeassistantcommunitystore/> Products</h1>

        <Products />


      </section>

    </div>
    </>
  )
}

export default Home
