import { API } from '@/@types/api'
import { addSoftware } from '@/api/Software/add-software'
import { SoftwareList } from '@/components/Atom/SoftwareList/SoftwareList'
import { softwareAtom } from '@/states/softwareAtom'
import { useAtom } from 'jotai'
import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import { readFileToBase64 } from '@/utils/base64-converter'
import { notifyFailure } from '@/utils/toastify'

function SoftwareEdit() {
  const [softwares, setSoftwares] = useAtom(softwareAtom)
  const { register, reset, handleSubmit } =
    useForm<API.SoftwareCreateFormProps>()

  const onSubmit = async (data: API.SoftwareCreateFormProps) => {
    const file = data.image[0]
    const fileConverted = await readFileToBase64(file)

    if (!fileConverted.includes('Error')) {
      const requestSoftwareObject = {
        name: data.name,
        image: fileConverted,
      }

      const response: API.CreateAndUpdateSoftwareResponseProps =
        await addSoftware(requestSoftwareObject)
      if (response && response.success) {
        setSoftwares([...softwares, response.data])
        reset()
      }
    } else {
      notifyFailure(fileConverted)
    }
  }

  return (
    <div className="mb-5">
      <h3>Softwares</h3>
      <SoftwareList />
      <div className="w- mt-10 gap-2 lg:flex">
        <form
          className="flex flex-wrap gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input placeholder="New Software...">
            <input type="text" {...register('name')} />
          </Input>
          <Input placeholder="">
            <input type="file" {...register('image')} />
          </Input>
          <Button
            type="submit"
            content="Gravar"
            primary
            className="sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
          />
        </form>
      </div>
    </div>
  )
}

export default SoftwareEdit
