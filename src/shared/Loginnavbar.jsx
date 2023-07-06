import React from 'react'
import sistlogologin from "../assets/sistlogologin.png"
const Loginnavbar = () => {
  return (
    <>
<nav class="flex items-center justify-between bg-red-900 p-2">
  <div class="flex items-center">
    <img src={sistlogologin} alt="Logo" class="h-12 w-40 px-3" />
  </div>
  <div class="flex items-center mx-3">
    <p class=" font-medium">STAFF</p>
    <p class="ml-4  font-medium">STUDENT</p>
  </div>
</nav>

    </>
  )
}

export default Loginnavbar