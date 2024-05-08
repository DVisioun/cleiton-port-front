import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.css'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

export default function Carousel() {
  const progressCircle: React.RefObject<any> = React.createRef()
  const progressContent: React.RefObject<any> = React.createRef()
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

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
        <SwiperSlide>
          <Image
            src={'/images/background_home.jpg'}
            className="h-screen w-screen sm-1:!object-center"
            fill={true}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/background_home_2.jpg'}
            alt=""
            className="h-screen w-screen sm-1:!object-center"
            fill={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/background_home_3.jpg'}
            className="h-screen w-screen sm-1:!object-center"
            fill={true}
            alt=""
          />
        </SwiperSlide>
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
