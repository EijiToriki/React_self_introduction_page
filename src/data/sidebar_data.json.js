import BasicInfo from '../components/MainContent/BasicInfo'
import School from '../components/MainContent/School'
import Work from '../components/MainContent/Work'
import Skill from '../components/MainContent/Skill'

const basicData =  [
    {
      "id":1,
      "title":"基本情報",
      "content":"氏名・出身地・趣味等",
      "componentName":"BasicInfo"
    },
    {
      "id":2,
      "title":"学歴",
      "content":"出身校と主な実績",
      "componentName":"School"
    },
    {
      "id":3,
      "title":"職歴",
      "content":"現在の業務内容",
      "componentName":"Work"
    },
    {
      "id":4,
      "title":"保有スキル",
      "content":"資格・プログラミング言語",
      "componentName":"Skill"
    }
  ]

const componentDict = {
  "BasicInfo" : BasicInfo,
  "School" : School,
  "Work" : Work,
  "Skill" : Skill
}

export default basicData
export { componentDict }