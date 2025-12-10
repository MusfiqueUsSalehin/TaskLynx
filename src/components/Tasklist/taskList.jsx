import React from 'react'
import AcceptTask from './acceptTask';
import NewTask from './newTask';
import CompleteTask from './completeTask';
import FailedTask from './failedTask';

const TaskList = ({tasks}) => {
  return (
    <div id="tasklist" className='flex flex-nowrap overflow-x-auto items-center h-[48vh] justify-start gap-4 p-5 bg-[#FF0B55] mt-9 rounded-xl'>
      {(tasks ?? []).map((e,idx)=> {
        if (e.active){return <AcceptTask key={idx} data={e} />}
        if (e.completed){return <CompleteTask key={idx} data={e} />}
        if (e.failed){return <FailedTask key={idx} data={e} />}
        if (e.newTask){return <NewTask key={idx} data={e} />}
       
        })
      }


    </div> 
        
 
   
  )
}

export default TaskList