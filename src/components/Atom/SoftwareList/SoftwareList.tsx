import { useEffect } from 'react'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteSoftwares } from '@/api/Software/delete-software'
import { fetchSoftwares } from '@/api/Software/fetch-softwares'
import { softwareAtom } from '@/states/softwareAtom'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { API } from '@/@types/api'

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
      notifySuccess(response.message)
    } else {
      notifyFailure(response.message)
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
                <FontAwesomeIcon
                  icon={faXmark}
                  height={12}
                  className="duration-300 hover:scale-125"
                />
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
