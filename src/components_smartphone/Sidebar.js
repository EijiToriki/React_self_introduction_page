import React, { useState } from 'react'
import {slide as Menu} from 'react-burger-menu'
import "./css/Sidebar.css"

export default function Sidebar({basicData, setActiveContentId}) {
  const [isOpen, setOpen] = useState(false)

  const handleSidebar = (id) => {
    setActiveContentId(id)
    setOpen(false)
  } 

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <Menu 
      width={'100%'}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      {basicData.map((data) => {
        return (
          <div 
            className={'app-sidebar-card'}
            key={data.id}
            onClick={() => handleSidebar(data.id)}
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
      </Menu>
  )
}
