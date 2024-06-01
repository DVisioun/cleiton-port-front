import { API } from '@/@types/api'

export const getLabel = (labelName: string, language: string): string => {
  const labels: API.LabelSchema[] = JSON.parse(localStorage.getItem('labels'))

  if (!labels) return ''

  const labelMap = labels.reduce((map, label) => {
    map.set(label.label, label)
    return map
  }, new Map())

  return labelMap.get(labelName)[`${language}_content`]
}
