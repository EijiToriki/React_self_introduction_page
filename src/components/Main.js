import React from 'react'
import "./css/Main.css"
import BasicInfo from './MainContent/BasicInfo'
import School from './MainContent/School'
import Work from './MainContent/Work'
import Skill from './MainContent/Skill'


export default function Main({activeContentId}) {
  return (
    <div className='app-main'>
      {
        activeContentId === 1 ? <BasicInfo></BasicInfo> :
        activeContentId === 2 ? <School></School> :
        activeContentId === 3 ? <Work></Work> :
        activeContentId === 4 ? <Skill></Skill> :
        `Contens から閲覧したい情報を選択してください`
      }
      
      
    </div>
  )
}
