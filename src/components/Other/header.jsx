import React from 'react'

const Header = ({data}) => {

  console.log("Header data",data);
  const LogOut = () => {
    localStorage.removeItem ('loggedInUser');
    window.location.reload();}
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className="text-3xl font-extrabold bg-[#ff4d6d] text-black p-3 rounded-[10px]">{data?.name}</h1>
      <button onClick={LogOut} className='bg-red-500 w-30 p-3 rounded-full shadow-[0_6px_0_#b91c1c] active:shadow-[0_2px_0_#b91c1c] active:translate-y-1 transition-all '>Logout</button>
    </div> 
    )

}

export default Header