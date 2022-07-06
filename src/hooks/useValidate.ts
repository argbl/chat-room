import validators from '../validator/index'
interface RulesProps {
  [key: string]: string
}
export default function (form: any, rules: RulesProps) {
  for (const key in rules) {
    const k = rules[key]
    if (!validators[k].reg.test(form[key])) {
      alert('无法提交')
      return false
    }
  }
  return true
}
