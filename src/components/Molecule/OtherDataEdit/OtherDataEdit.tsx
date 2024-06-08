import { API } from '@/@types/api'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Grid, GridColumn, GridRow, Input } from 'semantic-ui-react'
import { fetchUser } from '@/api/User/fetch-user'
import { User } from '@/@types/user'
import { editUserOtherInfo } from '@/api/User/edit-user'
import { notifyFailure, notifySuccess } from '@/utils/toastify'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'

function OtherDataEdit() {
  const [user, setUser] = useState<User.UserProps | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, setValue } =
    useForm<API.OtherInfoUpdateRequestProps>()

  const onSubmit = async (data) => {
    setLoading(true)
    const requestOtherDataEditObject = {
      location: data.location,
      role: data.role,
      company: data.company,
    }

    const response = await editUserOtherInfo(
      requestOtherDataEditObject,
      user.id,
    )

    if (response && response.success) {
      notifySuccess(response.message)
    } else {
      notifyFailure('Failed editing description. Try again, please!')
    }
    setLoading(false)
  }

  useEffect(() => {
    const callUserData = async () => {
      try {
        const response = await fetchUser()
        setUser(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    callUserData()
  }, [])

  useEffect(() => {
    if (user) {
      setValue('location', user.location)
      setValue('role', user.role)
      setValue('company', user.company)
    }
  }, [user, setValue])

  return (
    <>
      <LoadingScreen loading={loading} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-6"
      >
        <Grid>
          <GridRow columns={2}>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <h4 className="!mt-6 mb-0">Location</h4>
              <Input>
                <input type="text" {...register('location')} />
              </Input>
            </GridColumn>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <h4 className="!mt-6 mb-0">Role</h4>
              <Input>
                <input type="text" {...register('role')} />
              </Input>
            </GridColumn>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <h4 className="!mt-6 mb-0">Company</h4>
              <Input>
                <input type="text" {...register('company')} />
              </Input>
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn mobile={16} computer={16} tablet={16}>
              <Button
                content="Save"
                primary
                className="!mt-4 sm-1:!mt-5 sm-1:!w-full md-1:!mt-5 md-1:!w-full"
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </form>
    </>
  )
}

export default OtherDataEdit
