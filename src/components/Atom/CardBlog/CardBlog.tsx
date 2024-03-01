import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { Segment } from 'semantic-ui-react'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Blog } from '@/@types/blog'

dayjs.locale(ptBr)

function CardBlog({ data }: Blog.CardBlogProps) {
  return (
    <div className="relative w-full px-4">
      <Segment
        raised
        className="!relative h-[350px] overflow-hidden !rounded-2xl !bg-secondary !p-[50px] sm-1:p-[20px]"
      >
        <h1>{data.name}</h1>
        <span
          className="line-clamp-6"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        <div className="mt-20 h-[2px] w-full bg-[var(--gold)] sm-1:mt-14"></div>
        <div className="mb-4 flex justify-between">
          <div>
            <p className="m-0">
              Cleiton Moreira
              <FontAwesomeIcon
                icon={faCircle}
                className="mx-2 align-middle text-[4px] sm-1:hidden"
              />
              <span className="sm-1:hidden">
                {dayjs(data.created_at).format('D[ de ]MMMM[, ]YYYY')}
              </span>
            </p>
            <p className="hidden sm-1:inline">
              {dayjs(data.created_at).format('D[ de ]MMMM[, ]YYYY')}
            </p>
          </div>
        </div>
      </Segment>
    </div>
  )
}

export default CardBlog
