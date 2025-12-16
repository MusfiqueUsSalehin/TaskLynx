import React from 'react'
import Header from '../Other/header'
import CreateTask from '../Other/createTask'
import AllTask from '../Other/allTask'
import { getLocalStorage } from '../../utils/localStorage' 

const AdminDashboard = () => {
  const admin = getLocalStorage().admins[0];

  console.log(admin);


  console.log();
  return (
    <div className='h-screen w-full p-8 bg-[#951555]'>
        <Header data={admin}/>
        <div className='flex flex-row gap-10 '>
            <CreateTask/>
            <AllTask/>
        </div>
    </div>
  )
}

export default AdminDashboard