import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Carousel() {
  const navigationNextRef = useRef(null)
  const navigationPrevRef = useRef(null)
  const progressCircle: React.RefObject<any> = React.createRef()
  const progressContent: React.RefObject<any> = React.createRef()
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    },
  }

  const handlePrevClick = () => {
    // Swiper.get('.home').slidePrev();
  }

  const handleNextClick = () => {
    // Swiper.get('.home').slideNext();
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
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="home"
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
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="absolute bottom-[1.8rem] left-12">
        <button ref={navigationPrevRef} onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="icon_navigation" />
        </button>
      </div>
      <div className="absolute bottom-[1.8rem] left-[9.5rem]">
        <button ref={navigationNextRef} onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} className="icon_navigation" />
        </button>
      </div>
    </>
  )
}
