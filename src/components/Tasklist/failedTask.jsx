import React from 'react'

export const FailedTask = ({data}) => {
  return (
        <div className='flex-shrink-0 w-1/4 h-full p-5 border-2 border-red-500 bg-black rounded-[30px]'>
            <div className='flex flex-row justify-between p-3'>
              <h3 className='text-sm bg-[#CF0F47] text-[#FFDEDE] p-2 rounded-2xl '>{data.category}</h3>
              <h4 className='text-sm text-[#FFDEDE]'>{data.date}</h4>

            </div>
            <h2 className='mt-2 ml-3 text-2xl font-semibold'>{data.title}</h2>
            <p className='mt-2 ml-3 text-sm mr-2'>
                {data.description}
            </p>
            <div>
                <button className='bg-[#FF0303] text-[#F9DBBB] font-bold p-2 m-3 rounded-lg border border-[#F9DBBB] '>Failed</button>
            </div>  

        </div>

  )
}


export default FailedTask