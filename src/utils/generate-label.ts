export function generateLabel(fieldName: string) {
  const labelParameter = `label-${fieldName}-${Math.random() * 10000}`
  return labelParameter
}
