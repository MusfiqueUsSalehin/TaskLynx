import React, { useContext,  useState , useEffect } from 'react'
import "tailwindcss";

import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/employeeDashboard';
import AdminDashboard from './components/Dashboard/adminDashboard'; 
import { AuthContext } from './context/AuthProvider';

import AcceptTask from './components/Tasklist/acceptTask';




const App = () => {

  const [user , setUser] = useState ('');
  const [loggedInUserData, setLogged] = useState('');
  const { userData } = useContext (AuthContext);
  const [showSuccess, setshowSuccess] = useState(false)

  console.log(loggedInUserData);
  

//   useEffect(() => {
//    if (data) {
//       const loggedInUser = localStorage.getItem('loggedInUser');
//       if (loggedInUser) {
//          setUser(loggedInUser.role);
//       }
//   }
//   }, [data])
  


  const handleLogin = (email , password) => {
   if (email === "admin@example.com" && password === "123") {

      setshowSuccess(true);

      setTimeout (() => {
         setUser ('admin');
         setshowSuccess(false);
      } , 1500);

      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
     
   }
   else if(userData && userData.length > 0) {

      const employee = userData.find((e) => e.email === email && e.password === password)
      if (employee) {

         setshowSuccess(true);
         setTimeout (() => {
            setUser ('employee');
            setLogged (employee);
            setshowSuccess(false);
         } , 1500);
         localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}));
      }

   }

   else {
      alert ("Invalid credentials");
   }  

  }




 const SuccessAnimation = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
    <div className="bg-black rounded-2xl shadow-2xl p-10 w-[350px] text-center animate-scaleCard">
      
      {/* Tick Circle */}
      <div className="w-20 h-20 rounded-full border-4 border-green-600 flex items-center justify-center mx-auto mb-4 animate-scaleTick">
        <span className="text-green-600 text-5xl font-bold">✓</span>
      </div>

      <h2 className="text-2xl font-semibold text-white">Login Successful</h2>
      <p className="text-white mt-1 text-sm">Redirecting...</p>

    </div>
  </div>
);




 
  return (


  <>
      {showSuccess && <SuccessAnimation />}
      {!user ? <Login handleLogin= {handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : ''}
      {user === 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : ''} 
    
  </>

  )
  
}


export default App 