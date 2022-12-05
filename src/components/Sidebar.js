import React from 'react'
import "./css/Sidebar.css"

export default function Sidebar({basicData, activeContentId, setActiveContentId}) {
  return (
    <div className='app-sidebar'>
      <h2>Contents</h2>
      {basicData.map((data) => {
        return (
          <div 
            className={`app-sidebar-card ${data.id === activeContentId ? 'active' : ''}`}
            key={data.id}
            onClick={() => setActiveContentId(data.id)}
          >
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
