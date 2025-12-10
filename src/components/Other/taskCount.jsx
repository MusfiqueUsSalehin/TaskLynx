import React from "react";

const TaskCount = ({data}) => {
  return (
    <div className=" flex flex-wrap bg-[#CF0F47] border border-white-500 mt-12 p-4 rounded-[90px] justify-between gap-3 screen shadow-[0px_0px_40px_rgba(255,255,255,0.3)]">  
        <div className="  bg-[#ffdede] rounded-[90px] py-10 px-30 ">
            <h2 className="text-[#CF0F47] text-3xl font-semibold">{data?.taskCount?.newTask}</h2>
            <h1 className="text-[#CF0F47] font-medium text-xl">New Task</h1>
        </div>
        <div className=" bg-[#ffdede] rounded-[90px] py-10 px-30">
            <h2 className=" text-[#CF0F47] text-3xl font-semibold">{data?.taskCount?.active}</h2>
            <h1 className="text-[#CF0F47] font-medium text-xl">Active Task</h1>
        </div>
        <div className="  bg-[#ffdede] rounded-[90px] py-10 px-22">
            <h2 className="text-[#CF0F47] text-3xl font-semibold">{data?.taskCount?.completed}</h2>
            <h1 className="text-[#CF0F47] font-medium text-xl">Completed Task</h1>
        </div>
        <div className=" bg-[#ffdede] rounded-[90px] py-10 px-25">
            <h2 className="text-[#CF0F47] text-3xl font-semibold">{data?.taskCount?.failed}</h2>
            <h1 className="text-[#CF0F47] font-medium text-xl">Failed Task</h1>
        </div>
        
    </div>
    )
};

export default TaskCount;