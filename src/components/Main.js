import React from 'react'
import "./css/Main.css"
import { componentDict } from '../data/sidebar_data.json'


export default function Main({ActiveComponet}) {
  if(ActiveComponet !== ''){
    ActiveComponet = componentDict[ActiveComponet]
  }
  console.log(ActiveComponet)  
  return (
    <div className='app-main'>
      {
        ActiveComponet === '' ? 
          <div className='app-main-none-content'>Contens から閲覧したい情報を選択してください</div> :
          <ActiveComponet />
      }
    </div>
  )
}
