import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/home/home';
import Header from './components/header/header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Account from './pages/account/Account';
import { UserData } from './context/UserContext';
import Loading from './components/loading/Loading';
import Courses from './pages/courses/Courses';
import CourseDescription from './pages/coursedescription/CourseDescription';
import PaymentSuccess from './pages/paymentsuccess/PaymentSuccess';
import Dashboard from './pages/dashboard/Dashboard';
import CourseStudy from './pages/coursestudy/CourseStudy';



const App = () => {
 
  const {isAuth,user,loading}=UserData()

  return (
    <>
    { loading?(<Loading></Loading>):(
    <BrowserRouter>
    <Header isAuth={isAuth} />
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>

      <Route path="/courses" element={<Courses></Courses>}/>
      <Route path="/account" element={isAuth?<Account user={user}></Account>:<Login></Login>}/>
      <Route path="/login" element={isAuth?<Home></Home>:<Login></Login>}/>
      <Route path="/register" element={isAuth?<Home></Home>:<Register></Register>}/>
      <Route path="/verify" element={isAuth?<Home></Home>:<Verify></Verify>}/>
      <Route path="/course/:id" element={isAuth?<CourseDescription user={user}/>:<Login/>}/>
     <Route path='/payment-success/:id' element={
      isAuth?<PaymentSuccess user={user}/>:(<Login></Login>)
     }></Route>
      <Route path='/:id/dashboard' element={
      isAuth?<Dashboard user={user}/>:(<Login></Login>)
     }></Route>

     <Route path='/course/study/:id' element={
      isAuth?<CourseStudy user={user}/>:(<Login></Login>)
     }></Route>

    </Routes>

    <Footer></Footer>
    </BrowserRouter>
    )
  
}
    </>
  )
}

export default App