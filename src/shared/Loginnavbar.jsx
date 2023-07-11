import React from 'react'
import sistlogologin from "../assets/sistlogologin.png"



const Loginnavbar = () => {
  return (
    <>
  
<nav class="flex items-center justify-between bg-[#9e1c3f] p-2 px-10">
  <div class="flex items-center">
    <a href='/'><img src={sistlogologin} alt="Logo" class="h-12" /></a>
  </div>
  <div class="flex items-center mx-3">
  <a href='/about'>ABOUT</a>

  </div>
</nav>

    </>
  )
}

export default Loginnavbar