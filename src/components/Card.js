import React from 'react'
import {FcLike , FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'

const Card = ({course , setLikedCourses , likedCourses}) => {

  function clickHandler() {

    // Pehle Se Course Liked hein
    if(likedCourses.includes(course.id)){
      setLikedCourses( prev => prev.filter( cid =>  cid !==course.id ))
      toast.warning("Like removed")
    }

    // Pehle Se Like Nahi heim
    else{
      if(likedCourses.length ===0){
        setLikedCourses([course.id]);
      }

      else{
        setLikedCourses((prev)=>[...prev,course.id])
      }

      toast.success("Liked Successfully")
    }
  }
  return (
    <div className='w-[300px] bg-bgDark opacity-80 rounded-md overflow-hidden'>

        <div className='relative '>
            <img src={course.image.url}></img>

            <div className=' w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center'>
              <button onClick={clickHandler}>
              {
                (likedCourses.includes(course.id)) ? (<FcLike fontSize={"1.5rem"}/>) : (<FcLikePlaceholder fontSize={"1.5rem"}/>) 
              }
              </button>
            </div>
        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>

            <p className='mt-2 text-white'>
            {
              (course.description.length >100) ? 
              (course.description.substr(0,100) + "..." ) : 
              (course.description)
            }
              
            </p>
        </div>

    </div>
  )
}

export default Card