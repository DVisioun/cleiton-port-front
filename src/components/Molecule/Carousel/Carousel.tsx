import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.css'
import { Autoplay } from 'swiper/modules'
import { fetchHomePost } from '@/api/HomePost/fetch-home-post'
import Image from 'next/image'
import { API } from '@/@types/api'
import { readBase64ToFile } from '@/utils/base64-converter'
import { LoadingScreen } from '@/components/Atom/Loading/Loading'
import { notifyFailure } from '@/utils/toastify'

export default function Carousel() {
  const [homePost, setHomePost] = useState<API.HomePostProps[]>()
  const [loading, setLoading] = useState<boolean>(true)

  const handleHomePostsFetch = async () => {
    try {
      const response: API.HomePostProps = await fetchHomePost()
      if (response) {
        const data = response.data
        const homePostAux: API.HomePostProps[] = []

        data.map(async (item: any) => {
          const imageCoverAux = await readBase64ToFile(item.image)
          const previewURL = URL.createObjectURL(imageCoverAux)
          if (previewURL) {
            homePostAux.push({
              id: item.id,
              image: previewURL,
              order: item.order,
            })
          }
        })

        setHomePost(homePostAux)
      }
    } catch (error) {
      notifyFailure(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleHomePostsFetch()
  }, [])

  return (
    <>
      <LoadingScreen loading={loading} />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        style={{ height: '100vh' }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Autoplay]}
        className="relative"
      >
        {homePost &&
          homePost.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.image}
                className="h-screen w-screen sm-1:!object-center"
                fill={true}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
