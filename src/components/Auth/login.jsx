import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin (email , password);
        
        setEmail("");
        setPassword("");   
    }
    return (

    <div className='flex flex-row'>

        <div className='bg-[#CF0F47] border-r-4 border-[#670D2F] rounded-r-[400px] h-screen w-1/2 flex justify-center items-center shadow-[5px_0px_30px_#ffffff] '>

            <h1 className='text-[#3A0519] text-6xl font-bold p-20 '>Office Management System</h1>


        </div>

        
        <div className='flex h-screen w-screen justify-center items-center '>
        
            <div className='bg-[#3A0519] border-2 border-[#A53860] rounded-[40px] p-6 shadow-[5px_0px_30px_#A53860]'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex flex-col gap-4 p-6'>
                    <input 
                    value={email}
                    onChange={(e) =>{
                        setEmail(e.target.value)
                      }

                    }
                    required className='px-8 py-4 border-2 bg-black text-white  rounded-full ' type="email" placeholder='Enter your email' />
                    <input 
                    value={password}
                    onChange={(e) =>{
                        setPassword(e.target.value)
                      }
                    }
                    required className='border-2 bg-black text-white px-8 py-4 rounded-full' type="password" placeholder='Enter your password' />
                    <button className=' px-3 py-2 w-40 border-transparent bg-blue-400 text-black rounded-full mt-8 ml-13'>Login</button>
                </form>
            </div>

        </div>
    </div>
    )
}

export default Login 