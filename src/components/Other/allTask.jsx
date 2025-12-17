import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)

    
    console.log(authData.userData);
  return (
    <div className='w-[50%] h-[85vh] bg-[black] gap-2 mt-4 p-5 rounded-lg shadow-2xl shadow-[white]/60 overflow-y-auto '>

        <div className='w-[100%] h-[10%] bg-[#FDF0F6] p-5 rounded-lg flex flex-row justify-between gap-3 mt-10'>
            <h3 className='text-black font-semibold'>Name</h3>
            <h2 className='text-[#771144] font-bold'>New Task</h2>
            <h5 className='text-[#771144] font-bold'>Active Status</h5>
            <h5 className='text-[#771144] font-bold'>Completed</h5>
            <h5 className='text-[#771144] font-bold'>Failed</h5>
        </div>

        <div className='overflow-auto'>
            {authData.userData.map((e,idx) => (

                <div key={idx} className='w-[100%] h-[8%] bg-blue-500 p-3 rounded-lg flex flex-row justify-between gap-2 mt-5 '>
                    <h3 className='text-black font-semibold'>{e.name}</h3>
                    <h2>{e.taskCount.newTask}</h2>
                    <h5>{e.taskCount.active}</h5>
                    <h5>{e.taskCount.completed}</h5>
                    <h5>{e.taskCount.failed}</h5>
                </div>

            ))}
        </div>
       
          

        
    </div>
  )
}

export default AllTask