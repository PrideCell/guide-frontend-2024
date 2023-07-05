import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [register, setregister] = useState(false)
  const [login, setlogin] = useState(true)

  const openRegister=(e)=>{
      e.preventDefault();
      setregister(true);
      setlogin(false);
  }
  const openLogin=(e)=>{
    e.preventDefault();
    setlogin(true);
    setregister(false);
  }
  return (
    <>
    <div id='loginbg'>
   
    <div className=' lg:w-1/3 md:w-2/5 xs:w-1/2 border p-4  bg-white bg-opacity-50 backdrop-filter  p-6 rounded-lg shadow-lg'>

<div className=' flex justify-center'>
  <h1 className={ login ? 'p-4 font-semibold' : 'hidden' }>LOGIN</h1>
  <h1 className={ register ? 'p-4 font-semibold' : 'hidden'} >SIGN UP</h1>

</div>

<div className='flex justify-center py-2'>
  <p onClick={openLogin}    className={login ?     ' px-10 py-1 font-semibold text-white bg-red-900 rounded-sm cursor-pointer' : ' px-10 py-1 font-semibold border shadow-sm cursor-pointer' }>Login</p>
  <p onClick={openRegister} className={register ?  ' px-10 py-1 font-semibold text-white bg-red-900 rounded-sm cursor-pointer' : ' px-10 py-1 font-semibold border shadow-sm cursor-pointer'  }>Register</p>
</div>

<div className='flex-col'>
<form >



<div className={ register ? 'flex justify-center' : 'hidden'}>
  <input className='py-2 mt-4 border-2 rounded-md w-3/4 bg-red-50' placeholder='    name'></input>
  </div>

<div className={register ? 'flex justify-center' : 'hidden'}>
  <input className='py-2 my-4 mb-0 border-2 rounded-md w-3/4 bg-red-50' placeholder='    reg no'></input>
  </div>





<div className='flex justify-center'>
  <input className='py-2 mt-4 border-2 rounded-md w-3/4 bg-red-50' placeholder='    email'></input>
  </div>

<div className='flex justify-center'>
  <input className='py-2 my-4 border-2 rounded-md w-3/4 bg-red-50' placeholder='    password'></input>
  </div>

  <div className='flex justify-center'>
  <button className='bg-red-900 text-white px-6 py-2 rounded-md'>Submit</button>
  </div>

</form>

</div>
<div className={login ? 'flex justify-center py-4 mb-4' : 'hidden'}>
  <p>Don't have account ? </p><p onClick={openRegister} className="text-red-950 cursor-pointer"> &nbsp; SignUp</p>
</div>


<div className={register ? 'flex justify-center py-4 mb-4' : 'hidden' }>
  <p>Have an account ? </p><p onClick={openLogin} className="text-red-950 cursor-pointer"> &nbsp; Login</p>
</div>

</div>  
</div>



    
    </>
  )
}

export default Login