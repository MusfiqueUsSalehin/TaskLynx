import React from 'react'
import Header from '../Other/header'
import CreateTask from '../Other/createTask'
import AllTask from '../Other/allTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>
        <div className='flex flex-row gap-10 '>
            <CreateTask/>
            <AllTask/>
        </div>
    </div>
  )
}

export default AdminDashboard