import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    console.log(authData.userData);
  return (
    <div className='w-[50%] h-[85vh] bg-slate-200 gap-2 mt-4 p-5 rounded-lg '>

        <div className='w-[100%] h-[10%] bg-blue-500 p-3 rounded-lg flex flex-row justify-between gap-3 mt-10'>
            <h3 className='text-black font-semibold'>Name</h3>
            <h2>New Task</h2>
            <h5>Active Status</h5>
            <h5>Completed</h5>
            <h5>Failed</h5>
        </div>

        <div className='overflow-auto'>
            {authData.userData.map((e,idx) => (

                <div key={idx} className='w-[100%] h-[10%] bg-blue-500 p-3 rounded-lg flex flex-row justify-between gap-3 mt-10'>
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