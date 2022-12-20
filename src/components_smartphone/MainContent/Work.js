import React from 'react'
import workInfo from '../../data/Work_data.json'
import "../css/Work.css"

export default function Work() {
  return (
    <div className='work-app'>
      <div className='work-app-title'>
        勤務先情報
      </div>
      <div className='work-app-content'>
        会社名：{workInfo.companyName}
      </div>
      <div className='work-app-content'>
        拠点：{workInfo.companyLocation}
      </div>
      <div className='work-app-title'>
        業務紹介
      </div>
      {workInfo.workIntro.map((work) => {
        return(
          <div key={work.id}>
            <div className='work-app-mini-title'>
              {work.title}
            </div>
            <div className='work-app-description'>
              {work.description}
            </div>
          </div>    
        )
      })}
    </div>
  )
}
