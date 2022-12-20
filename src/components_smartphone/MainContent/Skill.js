import React from 'react'
import "../css/Skill.css"
import { certificationInfo, skillInfo } from '../../data/Skill_data.json'

export default function Skill() {
  return (
    <div className='skill-app'>
      <div className='skill-app-title'>
        保有資格
      </div>
      <table>
        <tbody>
          <tr>
            <th>取得年</th>
            <th>取得月</th>
            <th>資格名</th>
          </tr>
          {certificationInfo.map((certification) => {
            return (
              <tr key={certification.id}>
                <td>{certification.year}</td>
                <td>{certification.month}</td>
                <td>{certification.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='skill-app-title'>
        保有スキル
      </div>
      <table>
        <tbody>
          <tr>
            <th>スキル名</th>
            <th>継続期間</th>
            <th>学生時代・実務での利用経験</th>
          </tr>
          {skillInfo.map((skill) => {
            return (
              <tr key={skill.id}>
                <td className='td-name'>{skill.name}</td>
                <td className='td-span'>{skill.span}</td>
                <td className='td-experience'>{skill.experience}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
