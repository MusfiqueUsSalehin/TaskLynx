import React from 'react'
import Header from '../Other/header'
import CreateTask from '../Other/createTask'
import AllTask from '../Other/allTask'
import { getLocalStorage } from '../../utils/localStorage' 
import ChatBot from '../Chatbox/chatBot'

const AdminDashboard = () => {
  const admin = getLocalStorage().admins[0];

  console.log(admin);


  console.log();
  return (
    <div className='h-screen w-full p-8 bg-[#1B211A]'>
        <Header data={admin}/>
        <div className='flex flex-row gap-10 '>
            <CreateTask/>
            <AllTask/>
        </div>
        
        <div><ChatBot/></div>
    </div>
  )
}

export default AdminDashboard