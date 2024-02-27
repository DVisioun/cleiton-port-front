import { API } from '@/@types/api'
import { deleteSoftwares } from '@/api/Software/delete-software'
import { fetchSoftwares } from '@/api/Software/fetch-softwares'
import { softwareAtom } from '@/states/softwareAtom'
import { useAtom } from 'jotai'
import { X } from 'lucide-react'
import Image from 'next/image'
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
          <li key={item.id} className="relative mb-2 border p-2 px-4">
            <div className="flex items-center gap-3">
              <Image
                src={'data:image/png;base64,' + item.image}
                alt={`${item.name} software image`}
                width={24}
                height={24}
              />
              <p className="m-0">{item.name}</p>
              <button onClick={() => handleDeleteSoftware(item.id)}>
                <X
                  size={18}
                  strokeWidth={2.5}
                  className="duration-300 hover:scale-110"
                />
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
