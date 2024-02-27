import { Controller, Control } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'
import { API } from '@/@types/api'

interface BlogTextEditorProps {
  name: string
  control: Control<API.BlogPostCreateFormProps>
  defaultValue: string
}

export const BlogTextEditor = ({
  control,
  defaultValue,
  name,
}: BlogTextEditorProps) => {
  return (
    <div className="w-full">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINY_KEY}
            initialValue={defaultValue}
            init={{
              height: 300,
              width: '100%',
              menubar: false,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                ' image ' +
                ' anchor ' +
                ' Table ' +
                ' media ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              images_file_types: 'jpg,svg,webp,png,jpeg,ico',
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}
