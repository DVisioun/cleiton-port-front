import React from 'react'
import Image from 'next/image'

const CardPortfolioSession = () => {
  return (
    <div className="relative flex w-[90%] flex-col items-center justify-center rounded-2xl bg-secondary p-4 shadow-card sm-cardPortfolio-0:w-[39rem] sm-cardPortfolio-0:flex-row-reverse sm-cardPortfolio-0:items-start sm-cardPortfolio-0:pl-6 sm-cardPortfolio-0:pr-0">
      <div className="absolute right-4 top-4 flex cursor-pointer items-center justify-end gap-1 sm-cardPortfolio-0:right-[35.5rem] sm-cardPortfolio-0:top-72">
        <Image
          alt="Favorite Button"
          aria-label="Favorite Button"
          src="/images/portfolio/heart.png"
          width={24}
          height={24}
          className="h-3 w-3"
        />
        <span className="text-xs font-normal">25</span>
      </div>

      <Image
        alt="Char One"
        aria-label="Char One"
        width={345}
        height={358}
        src="/images/portfolio/char1.png"
        className="h-72 w-72 object-cover object-center"
      />
      <p className="text-xl font-medium sm-cardPortfolio-0:leading-[5rem]">
        Geraldão{' '}
        <span className="hidden text-sm font-normal sm-cardPortfolio-0:block">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </span>
      </p>
    </div>
  )
}

export default CardPortfolioSession
