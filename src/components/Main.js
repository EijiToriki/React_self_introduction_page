import React from 'react'
import "./css/Main.css"
import { componentDict } from '../data/sidebar_data.json'


export default function Main({ActiveComponet}) {
  if(ActiveComponet !== ''){
    ActiveComponet = componentDict[ActiveComponet]
  }
  
  return (
    <div className='app-main'>
      {
        ActiveComponet === '' ? 
          `Contens から閲覧したい情報を選択してください` :
          <ActiveComponet />
      }
    </div>
  )
}
