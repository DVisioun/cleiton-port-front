import { useAtom } from 'jotai'
import { useForm } from 'react-hook-form'
import { Button, Input } from 'semantic-ui-react'
import { addSkill } from '@/api/Skill/add-skill'
import { SkillsList } from '@/components/Atom/SkillList/SkillList'
import { skillAtom } from '@/states/skillAtom'
import { API } from '@/@types/api'
import { notifyFailure, notifySuccess } from '@/utils/toastify'

function SkillsEdit() {
  const [skills, setSkills] = useAtom(skillAtom)
  const { register, reset, handleSubmit } = useForm<API.SkillCreateProps>()

  const onSubmit = async (data: API.SkillCreateProps) => {
    const response: API.CreateAndUpdateSkillResponseProps = await addSkill(data)
    if (response?.success) {
      setSkills([...skills, response.data])
      notifySuccess(response.message)
      reset()
    } else {
      notifyFailure(response.message)
    }
  }

  return (
    <div className="mb-5">
      <h3>Skills</h3>
      <SkillsList />
      <div className="w- mt-10 gap-2 lg:flex">
        <form
          className="flex flex-wrap gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input placeholder="New Software...">
            <input type="text" {...register('name')} />
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

export default SkillsEdit
