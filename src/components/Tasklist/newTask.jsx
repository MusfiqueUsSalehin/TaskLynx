import React  from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'; 






const NewTask = ({data}) => {



  const authdata = useContext(AuthContext);

  


  const acceptedTask = () => {
    // Functionality to accept the task can be implemented here
    console.log(`Task "${data.title}" accepted!`);

    const taskData = [...authdata.userData];

    taskData.forEach((e) => {
      e.tasks.forEach((task) => {
        if (task.title === data.title && task.date === data.date) {
          task.active = true;
          task.newTask = false;
        }
      }); 
    });

    authdata.setUserData(taskData);

    localStorage.setItem("employees", JSON.stringify(taskData));
  } 




  return (
        <div className='flex-shrink-0 w-1/4 h-full border-2 border-red-500 bg-black rounded-[30px] p-5 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
            <div className='flex flex-row justify-between p-3'>
              <h3 className='text-sm bg-[#CF0F47] text-[#FFDEDE] p-2 rounded-2xl '>{data.category}</h3>
              <h4 className='text-sm text-[#FFDEDE]'>{data.date}</h4>

            </div>
            <h2 className='mt-2 ml-3 text-2xl font-semibold text-green-500'>{data.title}</h2>
            <p className='mt-2 ml-3 text-sm mr-2'>
                {data.description}
            </p>
            <div>
                <button onClick={acceptedTask} className='bg-[#8BAE66] text-[#1B211A] font-bold p-2 m-3 rounded-[40px] hover:bg-[#628141] shadow-[0_6px_0_#EBD5AB] active:shadow-[0_2px_0_#EBD5AB] active:translate-y-1 transition-all cursor-pointer'>Accept task</button>
            </div>

        </div>
  )
}


export default NewTask