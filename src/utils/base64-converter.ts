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

export function readBase64ToFile(base64String: string): Promise<File> {
  return new Promise((resolve, reject) => {
    // Converter a string base64 em um ArrayBuffer
    const byteCharacters = atob(base64String)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const arrayBuffer = byteArray.buffer

    // Criar um Blob a partir do ArrayBuffer
    const blob = new Blob([arrayBuffer], { type: 'image/png' })

    // Criar um objeto File a partir do Blob
    const fileName = `file_${Date.now()}.png`
    const file = new File([blob], fileName, { type: 'image/png' })

    resolve(file)
  })
}
