import { API } from '../../@types/api'
import { fetchLabels } from './fetch-labels'
import fs from 'fs'

const en: { [label: string]: string } = {}
const pt: { [label: string]: string } = {}

const fetchAndSaveLabels = async () => {
  const response: API.FetchLabelsResponseProps = await fetchLabels()

  if (response?.success) {
    const data = response.data

    data?.forEach((el) => {
      en[el.label] = el.en_content
      pt[el.label] = el.pt_content
    })

    await writeFile('default-en', 'en', en)
    await writeFile('default-pt', 'pt', pt)
  }
}

const writeFile = async (filename: string, language: string, content: any) => {
  const json = `export const ${language} = ${JSON.stringify(content)};`
  await fs.promises.writeFile(
    `./src/dictionaries/defaultLanguageCollections/${filename}.ts`,
    json,
  )
}

export default fetchAndSaveLabels
