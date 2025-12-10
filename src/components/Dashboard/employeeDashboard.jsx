import React from 'react'
import Header from '../Other/header'
import TaskCount from '../Other/taskCount'
import TaskList from '../Tasklist/taskList'

const EmployeeDashboard = ({data}) => {

  console.log(data);

  if (!data) {
    return <div>Loading...</div>
  }

  
  return (
    <div className='p-10 bg-[#000000]' >
     
      <Header data={data}/>
      <TaskCount data = {data} />
      <TaskList tasks = {data.tasks} />
    </div>
    
  )
}

export default EmployeeDashboard