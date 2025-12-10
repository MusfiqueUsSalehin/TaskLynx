import React , {useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {


  const authData = useContext(AuthContext);


  const [taskTitle, setTitle] = useState("");
  const [taskDesc, setDesc] = useState("");
  const [taskDate, setDate] = useState("");
  const [taskAsign, setAsign] = useState("");
  const [taskCategory, setCategory] = useState("");

  

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
    title:taskTitle,
    description:taskDesc,
    date:taskDate,
    category:taskCategory,
    active: false,
    newTask: true,
    completed: false,
    failed: false
    };
    const data = authData.userData;
    console.log(data);


    data.forEach((elem) => {
      if (elem.name === taskAsign) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask += 1;
      }
    });

    authData.setUserData(data);

    localStorage.setItem("employees", JSON.stringify(data));

   

    

    setTitle("");
    setDesc("");
    setDate("");
    setAsign("");
    setCategory("");  
  }
  return (
    <div className='w-[50%] h-[85vh] bg-slate-200 p-5 rounded-lg'>
          <form onSubmit={(e) =>
            submitHandler(e)
          } className='flex flex-col gap-2 w-[100%] bg-slate-300 p-3 rounded-lg mt-4'>
              <h3>Task Title</h3>
              <input 
               value ={taskTitle}
               onChange={(e) => {
                setTitle(e.target.value)
               }}
               type="text" placeholder='Give a title' className='bg-black' />


              <h3>Description</h3>
              <textarea 
              value={taskDesc}
              onChange={(e) => {
                setDesc(e.target.value)
              }}
              cols='30' rows='10' className='bg-black'></textarea>


              <h3>Date</h3>
              <input 
                value ={taskDate}
                onChange={(e) => {
                  setDate(e.target.value)
                }}
                type="date" className='bg-black' />


              <h3>Assigned to</h3>
              <input 
                value ={taskAsign}
                onChange={(e) => {
                  setAsign(e.target.value)
                }}
                type="text" placeholder='Employee name' className='bg-black'/>


              <h3>Category</h3>
              <input 
                value ={taskCategory}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                type="text" placeholder='dev,design' className='bg-black'/>

                
              <button className='bg-amber-600'>Create Task</button>
          </form>
    </div>
  )
}

export default CreateTask