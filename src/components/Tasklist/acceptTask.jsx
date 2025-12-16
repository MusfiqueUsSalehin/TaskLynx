import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const AcceptTask = ({data}) => {


  const authData = useContext(AuthContext);



  const markFailed = () => {
    // Logic to mark the task as failed
    console.log(`Task "${data.title}" marked as failed.`);

    const taskData = [...authData.userData];

    taskData.forEach((e) => {
      e.tasks.forEach((task) => {
        if (task.title === data.title && task.date === data.date) {
          task.failed = true;
          task.active = false;
        }
      }); 
    });


    authData.setUserData(taskData);

    localStorage.setItem("employees", JSON.stringify(taskData));
  } 


  const markCompleted = () => {
    // Logic to mark the task as completed
    console.log(`Task "${data.title}" marked as completed.`);

    const taskData = [...authData.userData];

    taskData.forEach((e) => {
      e.tasks.forEach((task) => {
        if (task.title === data.title && task.date === data.date) {
          task.completed = true;
          task.active = false;
        }
      }); 
    });

    authData.setUserData(taskData);
    localStorage.setItem("employees", JSON.stringify(taskData));
  }   




  return (
        console.log(data),
        <div className='flex-shrink-0 w-1/4 h-full p-5 border-2 border-red-500 bg-black rounded-[30px]'>
            <div className='flex flex-row justify-between p-3'>
              <h3 className='text-sm bg-[#CF0F47] text-[#FFDEDE] p-2 rounded-2xl  '>{data.category}</h3>
              <h4 className='text-sm text-[#FFDEDE] '>{data.date}</h4>

            </div>
            <h2 className='mt-2 ml-3 text-2xl font-semibold'>{data.title}</h2>
            <p className='mt-2 ml-3 text-sm mr-2'>
                {data.description}
            </p>
            <div>
                <button onClick={markCompleted} className='bg-[#8BAE66] text-[#1B211A] p-2 m-3 rounded-[40px] hover:bg-[#628141] font-bold shadow-[0_6px_0_#EBD5AB] active:shadow-[0_2px_0_#EBD5AB] active:translate-y-1 transition-all cursor-pointer'>Mark as completed</button>
                <button onClick={markFailed} className='bg-[#FF0303] text-[#F9DBBB] font-bold p-2 m-3 rounded-[40px] hover:bg-red-700 shadow-[0_4px_0_#F9DBBB] active:shadow-[0_2px_0_#F9DBBB] active:translate-y-1 transition-all cursor-pointer'>Mark as Failed</button>
            </div>

        </div>

  )
}


export default AcceptTask