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

export default function Carousel() {
  const progressCircle: React.RefObject<any> = React.createRef()
  const progressContent: React.RefObject<any> = React.createRef()
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  const [homePost, setHomePost] = useState<API.HomePostProps[]>()

  const handleHomePostsFetch = async () => {
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
  }

  useEffect(() => {
    handleHomePostsFetch()
  }, [])

  return (
    <>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="realtive"
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
        <div className="autoplay-progress absolute sm-0:!bottom-10">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}
