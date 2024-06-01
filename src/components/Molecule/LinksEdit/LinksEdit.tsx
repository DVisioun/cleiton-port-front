import { API } from "@/@types/api";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, GridColumn, GridRow, Input } from "semantic-ui-react";
import { fetchUser } from "@/api/User/fetch-user";
import { User } from "@/@types/user";
import { editLinksUser } from "@/api/User/edit-user";
import { notifyFailure } from "@/utils/toastify";

function LinksEdit() {
  const [user, setUser] = useState<User.UserProps | null>(null);
  const { register, reset, handleSubmit, setValue } =
    useForm<API.LinksUpdateRequestProps>();

  const onSubmit = async (data) => {
    const requestLinksEditObject = {
      artstation: data.artstation,
      instagram: data.instagram,
      linkedin: data.linkedin,
    };

    const response = await editLinksUser(
        requestLinksEditObject,
        data.id
    );
    if (response?.success) {
      console.log(response);
    } else {
      notifyFailure("Failed to edit project, please try again..");
    }
  };

  useEffect(() => {
    const callUserData = async () => {
      try {
        const response = await fetchUser();
        setUser(response.data);
        reset(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    callUserData();
  }, [reset]);

  useEffect(() => {
    if (user) {
      setValue("artstation", user.artstation);
      setValue("instagram", user.instagram);
      setValue("linkedin", user.linkedin);
    }
  }, [user, setValue]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-6"
      >
        <Grid>
          <GridRow columns={2}>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <h4 className="!mt-6 mb-0">Artstation</h4>
              <Input placeholder="Artstation...">
                <input type="text" {...register("artstation")} />
              </Input>
            </GridColumn>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <h4 className="!mt-6 mb-0">Instagram</h4>
              <Input placeholder="Instagram...">
                <input type="text" {...register("instagram")} />
              </Input>
            </GridColumn>
            <GridColumn mobile={16} computer={8} tablet={16}>
              <h4 className="!mt-6 mb-0">Linkedin</h4>
              <Input placeholder="Linkedin...">
                <input type="text" {...register("linkedin")} />
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
  );
}

export default LinksEdit;