import Message from '@/components/base-message'
import validators from '../validator/index'
interface RulesProps {
  [key: string]: string
}
export default function (form: any, rules: RulesProps) {
  for (const key in rules) {
    const k = rules[key]
    if (form[key] && !validators[k].reg.test(form[key])) {
      Message.error('无法提交')
      return false
    }
  }
  return true
}
