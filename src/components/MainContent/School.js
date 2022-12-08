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
      </table>
      <div className='school-app-title'>
        実績
      </div>
      <table>
        <tr>
          <th>年</th>
          <th>月</th>
          <th>成果</th>
          <th>発表タイトル</th>
        </tr>
        {outComeInfo.map((outcome) => {
          return (
            <tr key={outcome.id}>
              <td className='td-year'>{outcome.year}</td>
              <td className='td-month'>{outcome.month}</td>
              <td className='td-outcome'>{outcome.outcome}</td>
              <td className='td-title'>{outcome.title}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
