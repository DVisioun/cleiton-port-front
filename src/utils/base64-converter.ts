export function readFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const base64String = reader.result.split(',')[1]
        resolve(base64String)
      } else {
        reject(new Error('Error reading file'))
      }
    }
    reader.onerror = (error) => reject(error)
  })
}
