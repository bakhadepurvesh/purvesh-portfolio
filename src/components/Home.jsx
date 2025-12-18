import React, { useEffect, useRef } from 'react'

import pdf from './pdf/Purvesh_Resume_Color.pdf'
import photo from './Photo/photos.jpeg'
import Typed from 'typed.js'


export const Home = () => {
 const typedRef = useRef(null)
 useEffect(() => {
  
const option ={
  strings:["I am Purvesh, Full Stack Java Developer.", "I am Purvesh, Full Stack Java Developer.","I am Purvesh, Full Stack Java Developer."],
  typedSpeed:50,
  backSpeed:50,
  loop:true
}
const typed = new Typed(typedRef.current ,option)
   return () => {
     typed.destroy()
   }
 }, [])
 

  return (
    <>
     <div className="container home">
      <div className="left">
        <h1 ref={typedRef}>
         
        </h1>
         <a href={pdf} download="resume.pdf" className="btn btn-outline-warning">Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
          <img src={photo} alt="Photo"/>
        </div>
      </div>
     </div>
    </>
  )
}
