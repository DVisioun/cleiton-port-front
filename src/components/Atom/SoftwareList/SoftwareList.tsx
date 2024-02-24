import { API } from '@/@types/api'
import { deleteSoftwares } from '@/api/Software/delete-software'
import { fetchSoftwares } from '@/api/Software/fetch-softwares'
import { softwareAtom } from '@/states/softwareAtom'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export const SoftwareList = () => {
  const [softwares, setSoftwares] = useAtom(softwareAtom)

  const handleFetchSoftwares = async () => {
    const response: API.FetchSoftwareResponseProps = await fetchSoftwares()
    if (response?.success) {
      return response.data
    }
  }

  const handleDeleteSoftware = async (id: string) => {
    const response = await deleteSoftwares(id)
    if (response?.success) {
      setSoftwares(softwares.filter((item) => item.id !== id))
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await handleFetchSoftwares()
      if (data) {
        setSoftwares(data)
      }
    }
    fetchData()
  }, [setSoftwares])

  return (
    <ul className="flex flex-wrap gap-3">
      {softwares.map((item) => {
        return (
          <li key={item.id} className="relative mb-2 border py-2 pl-2 pr-10">
            {item.name}
            <button
              onClick={() => handleDeleteSoftware(item.id)}
              className="absolute right-3"
            >
              x
            </button>
          </li>
        )
      })}
    </ul>
  )
}
