import React from 'react'
import "../css/BasicInfo.css"
import basicInfo from '../../data/BasicInfo_data.json'

export default function BasicInfo() {
  return (
    <div className='app-basic-info'>
      <div className='app-basic-info-title'>プロフィール</div>
      <div className='app-basic-info-content'>
        <div className='app-basic-info-img-place'>
          <img className='app-basic-info-img' src='myimg.jpg'></img>
        </div>
        <div className='app-basic-info-description'>
          {basicInfo.map((info) => {
            return (
              <div key={info.id}>
                <div className='app-basic-info-desc-title'>
                〈{info.title}〉
                </div>
                <div className='app-basic-info-desc-content'>
                  {info.content}
                </div>
                <div className='app-basic-info-desc-detail'>
                  {info.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
