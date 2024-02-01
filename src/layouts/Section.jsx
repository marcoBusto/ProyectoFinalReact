import React from 'react'
import { Outlet } from 'react-router-dom'


const Section = () => {
  return (
    <div>
      <section id='contenidos'>
        <Outlet></Outlet>
      </section>
    </div>
  )
}

export default Section
