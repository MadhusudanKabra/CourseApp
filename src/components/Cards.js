import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses , category}) => {
    // console.log(courses);

    const [likedCourses ,setLikedCourses] = useState([]);

    // Takes All the courses Received from api call (in App.js) into a single array called allCourses
    const getCourses = () =>{
        if(category==="All"){
            let allCourses = []; 
            Object.values(courses).forEach( array =>{
                array.forEach( courseData =>{
                    allCourses.push(courseData);
                })
            })
            return allCourses; 
        }

        else{
            return  courses[category];      //https://www.w3schools.com/js/js_objects.asp
        }
        
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map((course) => {
                return  <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} ></Card>
            })
        }
        </div>
  )
}

export default Cards