import React from 'react'
import { componentDictSmart } from '../data/sidebar_data.json'
import "./css/Main.css"

export default function Main({ActiveComponet, isAuth}) {
  if(ActiveComponet !== ''){
    ActiveComponet = componentDictSmart[ActiveComponet]
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
