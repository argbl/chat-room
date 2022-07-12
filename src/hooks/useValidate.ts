import Message from '@/components/base-message'
import validators from '../validator/index'
interface RulesProps {
  [key: string]: string
}
export default function (form: any, rules: RulesProps) {
  for (const key in rules) {
    const k = rules[key]
    if (form[key] && !validators[k].reg.test(form[key])) {
      const tip = validators[k].errorMsg
      Message.error(tip)
      return false
    }
  }
  return true
}
