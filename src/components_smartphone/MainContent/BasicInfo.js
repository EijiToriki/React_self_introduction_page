import React from 'react'
import "../css/BasicInfo.css"
import basicInfo from '../../data/BasicInfo_data.json'

export default function BasicInfo() {
  return (
    <div className='app-basic-info-smart'>
      <div className='app-basic-info-title-smart'>プロフィール</div>
      <div className='app-basic-info-content-smart'>
        <div className='app-basic-info-img-place-smart'>
          <img className='app-basic-info-img-smart' src='myimg.jpg'></img>
        </div>
        <div className='app-basic-info-description-smart'>
          {basicInfo.map((info) => {
            return (
              <div key={info.id}>
                <div className='app-basic-info-desc-title-smart'>
                〈{info.title}〉
                </div>
                <div className='app-basic-info-desc-content-smart'>
                  {info.content}
                </div>
                <div className='app-basic-info-desc-detail-smart'>
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
