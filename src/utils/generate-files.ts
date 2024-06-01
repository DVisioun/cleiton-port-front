export const generateFiles = async () => {
  const response = await fetch('/api/generate-files', {
    method: 'GET',
  })

  console.log(response)
}
