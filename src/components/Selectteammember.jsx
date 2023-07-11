import React from 'react'

const Selectteammember = () => {
  // const [Teamname, setTeamname] = useState(true)
  // const setTeamname=(e)=>{
  //   e.preventDefault();

  // }
  return (
    <>
      
        <div id='loginbg'>
        <div className=' lg:w-1/3 md:w-2/5 xs:w-1/2 border bg-white bg-opacity-50 backdrop-filter  p-6 rounded-lg shadow-lg'>




          {/* //Select team member */}
         <div>
            <h1 className='p-4 font-semibold text-center'>Select Team member</h1>

                   <div className='flex justify-center'>
                     <button className='bg-red-900 text-white px-6 py-2 rounded-md m-5'>1</button>
     
                     <button className='bg-red-900 text-white px-6 py-2 rounded-md m-5'>2</button>
         </div>
         </div>
   



         {/* //if on click 2 display this */}
         <div>
            <h1 className='p-4 font-semibold text-center'>Verifying Mails</h1>
             
                 {/* display  the first member mail id  */}

                 <div className='flex justify-center'>
          <input className='py-2 my-4 border-2 rounded-md w-3/4 bg-red-50 p-4' placeholder='Enter Email of Team member 2' type='mail' required='true'></input>
          </div>
          <div className='flex justify-center'>
                     <button className='bg-red-900 text-white px-6 py-2 rounded-md m-5'>Submit Query</button>
     
         </div>

         </div>







          </div>




        </div>

    
    </>
  )
}

export default Selectteammember