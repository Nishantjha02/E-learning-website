import React from 'react'
import './courses.css'
import { CourseData } from '../../context/CourseContext'
import CourseCard from '../../components/coursecard/Coursecard';


const Courses = () => {
    const {courses}=CourseData();
    console.log(courses);
  return (
    <div className="Courses">
        <h2>Available Courses</h2>

        <div className="course-container">
            {
                courses && courses.length>0 ?courses.map((e)=><CourseCard key={e._id} course={e} />) : <p>No courses yet!</p>
            }
        </div>
    </div>
  )
}

export default Courses