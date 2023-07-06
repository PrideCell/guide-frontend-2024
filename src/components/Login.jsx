import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [register, setregister] = useState(false)
  const [login, setlogin] = useState(true)
  const [stafflogin, setstafflogin] = useState(true)
  const [staffloginhead, setstaffloginhead] = useState(false);

  const openRegister=(e)=>{
      e.preventDefault();
      setregister(true);
      setlogin(false);
      setstafflogin(true);
      setstaffloginhead(false);
  }
  const openLogin=(e)=>{
    e.preventDefault();
    setlogin(true);
    setregister(false);
    setstafflogin(true);
    setstaffloginhead(false);
  }
  const openStaff=(e)=>{
    e.preventDefault()
    setstafflogin(false);
    setstaffloginhead(true);
    setlogin(false);
    setregister(false);
  }
  const showCredentials=(e)=>{
    e.preventDefault();
    console.warn(event.AT_TARGET)
  }

  return (
    <>
    <div id='loginbg'>
   
    <div className=' lg:w-1/3 md:w-2/5 xs:w-1/2 border p-4  bg-white bg-opacity-50 backdrop-filter  p-6 rounded-lg shadow-lg'>

        <div className={setlogin ? ' flex justify-center' : 'hidden'}>
          <h1 className={ login ? 'p-4 font-semibold' : 'hidden' }>LOGIN</h1>
          <h1 className={ register ? 'p-4 font-semibold' : 'hidden'} >SIGN UP</h1>
        </div>

        <div className={staffloginhead ? ' flex justify-center' : 'hidden'}>
        <h1 className={ 'p-4 font-semibold' }>STAFF LOGIN</h1>
        </div>
        

        <div className={stafflogin ? 'flex justify-center py-2' : 'hidden'}>
          <p onClick={openLogin}    className={login ?     ' px-10 py-1 font-semibold text-white bg-red-900 rounded-sm cursor-pointer' : ' px-10 py-1 font-semibold border shadow-sm cursor-pointer' }>Login</p>
          <p onClick={openRegister} className={register ?  ' px-10 py-1 font-semibold text-white bg-red-900 rounded-sm cursor-pointer' : ' px-10 py-1 font-semibold border shadow-sm cursor-pointer'  }>Register</p>
        </div>

        <div className='flex-col'>
        <form >



        <div className={ register ? 'flex justify-center' : 'hidden'}>
          <input className='py-2 mt-4 border-2 rounded-md w-3/4 bg-red-50 p-4' placeholder='name' required='true' type="text"></input>
          </div>

          <div className={register ? 'flex justify-center' : 'hidden'}>
          <input className='py-2 my-4 mb-0 border-2 rounded-md w-3/4 bg-red-50 p-4' placeholder='reg no' type="number" required='true'></input>
          </div>

        <div className={register ? 'flex justify-center' : 'hidden'}>
          <input className='py-2 mt-4 border-2 rounded-md w-3/4 bg-red-50 p-4' placeholder='email' type='email' required='true'></input>
          </div>


          <div className={login ? 'flex justify-center' : 'hidden'}>
          <input className='py-2 mt-4 border-2 rounded-md w-3/4 bg-red-50 p-4' placeholder='Id' type='text' required='true'></input>
          </div>




        <div className='flex justify-center'>
          <input className='py-2 my-4 border-2 rounded-md w-3/4 bg-red-50 p-4' placeholder='password' type='password' required='true'></input>
          </div>

          <div className='flex justify-center'>
          <button className='bg-red-900 text-white px-6 py-2 rounded-md'>Submit</button>
          </div>

</form>

</div>
<div className={login ? 'flex justify-center py-4' : 'hidden'}>
  <p>Don't have account ? </p><p onClick={openRegister} className="text-red-950 cursor-pointer"> &nbsp; SignUp</p>
</div>


<div className={register ? 'flex justify-center py-4' : 'hidden' }>
  <p>Have an account ? </p><p onClick={openLogin} className="text-red-950 cursor-pointer"> &nbsp; Login</p>
</div>

<div className={stafflogin ? 'flex justify-center pb-4 pt-0 mb-4' : 'hidden' }>
  <p>For staff Login ? </p><p onClick={openStaff} className="text-red-950 cursor-pointer"> &nbsp; Click Here</p>
</div>


<div className={staffloginhead ? 'flex justify-center pb-4 pt-4 mb-4' : 'hidden' }>
  <p>For student Login ? </p><p onClick={openLogin} className="text-red-950 cursor-pointer"> &nbsp; Click Here</p>
</div>



</div>  
</div>



    
    </>
  )
}

export default Login