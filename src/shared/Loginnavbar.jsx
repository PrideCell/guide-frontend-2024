import React from 'react'
import sistlogologin from "../assets/sistlogologin.png"



const Loginnavbar = () => {
  return (
    <>
  
<nav class="flex items-center justify-between bg-[#9e1c3f] p-2">
  <div class="flex items-center">
    <img src={sistlogologin} alt="Logo" class="h-12 w-40 px-3" />
  </div>
  <div class="flex items-center mx-3">
  <a href='./About'>ABOUT</a>

  </div>
</nav>

    </>
  )
}

export default Loginnavbar