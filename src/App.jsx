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
      setUser ('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
     
   }
   else if(userData && userData.length > 0) {

      const employee = userData.find((e) => e.email === email && e.password === password)
      if (employee) {
         setUser ('employee');
         setLogged (employee);
         localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}));
      }

   }

   else {
      alert ("Invalid credentials");
   }  

  }



 
  return (


  <>
      {!user ? <Login handleLogin= {handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : ''}
      {user === 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : ''} 
    
  </>

  )
  
}


export default App 