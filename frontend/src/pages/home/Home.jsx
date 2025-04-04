import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import Testimonials from '../../components/testimonials/Testimonials'
const Home = () => {
    const navigate =useNavigate()
  return (
    <div>
        <div className="home">
            <div className="home-content">
                <h1>welcome to our e learning platform</h1>
                <p>  learn , Grow , Excel   </p>
                <button  onClick={()=>navigate("/courses")} className='common-btn' >Get started</button>
            </div>
        </div>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home