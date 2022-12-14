import React from 'react'
import "./css/Main.css"
import { componentDict } from '../data/sidebar_data.json'


export default function Main({ActiveComponet, isAuth}) {
  if(ActiveComponet !== ''){
    ActiveComponet = componentDict[ActiveComponet]
  }

  return (
    <div className='app-main'>
      {
        !isAuth ?
          <div className='app-no-login'>ログインしてください</div>
        :
        ActiveComponet === '' ? 
          <div className='app-main-none-content'>Contens から閲覧したい情報を選択してください</div> :
          <ActiveComponet />
      }
    </div>
  )
}
