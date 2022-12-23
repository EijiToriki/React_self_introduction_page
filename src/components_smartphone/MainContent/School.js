import React from 'react'
import "../css/School.css"
import { schoolInfo, outComeInfo } from '../../data/School_data.json'

export default function School() {
  return (
    <div className='school-app'>
      <div className='school-app-title'>
        学歴
      </div>
      <table>
        <tbody>
          <tr>
            <th>卒業年</th>
            <th>卒業月</th>
            <th>学校・学科名</th>
          </tr>
          {schoolInfo.map((school) => {
            return (
              <tr key={school.id}>
                <td>{school.year}</td>
                <td>{school.month}</td>
                <td>{school.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='school-app-title'>
        実績
      </div>
      {outComeInfo.map((outcome) => {
        return (
          <table className='table-outcome' key={outcome.id}>
            <tbody className='tbody-outcome'>
              <tr>
                <th className={`th-outcome ${outcome.id % 2 === 0 ? 'odd' : 'even'}`}>年・月</th>
                <td>{outcome.year}年 / {outcome.month}月</td>
              </tr>
              <tr>
                <th className={`th-outcome ${outcome.id % 2 === 0 ? 'odd' : 'even'}`}>成果</th>
                <td className='td-outcome'>{outcome.outcome}</td>
              </tr>
              <tr>
                <th className={`th-outcome ${outcome.id % 2 === 0 ? 'odd' : 'even'}`}>テーマ</th>
                <td className='td-title'>{outcome.title}</td>
              </tr>
            </tbody>
          </table>
        )
      })}
    </div>
  )
}
