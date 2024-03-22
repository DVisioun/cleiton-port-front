import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import en from 'dayjs/locale/en'
import { Segment } from 'semantic-ui-react'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Blog } from '@/@types/blog'
import { useParams } from 'next/navigation'

function CardBlog({ data }: Blog.CardBlogProps) {
  const { lang } = useParams()

  lang === 'pt' ? dayjs.locale(ptBr) : dayjs.locale(en)

  return (
    <div className="w-full px-4">
      <Segment
        raised
        className="!sm-1:p-5 !flex h-[350px] w-[550px] !flex-col !justify-between overflow-hidden !rounded-2xl !bg-secondary !p-10"
      >
        <div className="flex flex-col gap-2">
          <h1 className="m-0">{data.name}</h1>
          <span
            className="line-clamp-6"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <div className="mt-14 h-[2px] w-full bg-[var(--gold)] sm-1:mt-14"></div>
          <div>
            <p className="m-0">
              Cleiton Moreira
              <FontAwesomeIcon
                icon={faCircle}
                className="mx-2 align-middle text-[4px] sm-1:hidden"
              />
              <span className="sm-1:hidden">
                {dayjs(data.created_at).format(
                  `D[ ${lang === 'pt' ? 'de' : 'of'} ]MMMM[, ]YYYY`,
                )}
              </span>
            </p>
          </div>
        </div>
      </Segment>
    </div>
  )
}

export default CardBlog
