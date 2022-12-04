import React from 'react'
import "./css/Sidebar.css"

export default function Sidebar({basicData}) {
  return (
    <div className='app-sidebar'>
      <h2>Contents</h2>
      {basicData.map((data) => {
        return (
          <div className='app-sidebar-card' key={data.id}>
            <div className='app-sidebar-title'>
              {data.title}
            </div>
            <div className='app-sidebar-content'>
              {data.content}
            </div>
          </div>
        )
      })}

    </div>
  )
}
