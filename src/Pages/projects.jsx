// projects.jsx

import React from 'react'
import ProjectCard from '../Components/Projects/ProjectCard'

const projects = () => {

  const projectData = [
    {
      title: "MEHROZA",
      image: "/Pics/Pic6.png"
    },
    {
      title: "AARZOO",
      image: "/Pics/Pic7.png"
    },
    {
      title: "NOOR",
      image: "/Pics/Pic8.png"
    },
    {
      title: "RANG",
      image: "/Pics/Pic9.png"
    },
    {
      title: "SITARA",
      image: "/Pics/Pic10.png"
    },
    {
      title: "NAZAKAT",
      image: "/Pics/Pic11.png"
    },
    {
      title: "ROSHNI",
      image: "/Pics/Pic12.png"
    },
    {
      title: "AYAAN",
      image: "/Pics/Pic13.png"
    },
    {
      title: "KHWAAB",
      image: "/Pics/Pic14.png"
    },
    {
      title: "ZARI",
      image: "/Pics/Pic5.png"
    }
  ]

  return (
    <div>

      <div className=' pt-[40vh]'>
        <h2 className='font-[font2] text-[10vw] uppercase'>
          Catalog
        </h2>
      </div>

      <div className='-mt-12'>

        {
          projectData.map((item, index) => {

            if(index % 2 === 0 && projectData[index + 1]) {

              return (
                <ProjectCard
                  key={index}
                  item1={item}
                  item2={projectData[index + 1]}
                />
              )
            }

          })
        }

      </div>

    </div>
  )
}

export default projects