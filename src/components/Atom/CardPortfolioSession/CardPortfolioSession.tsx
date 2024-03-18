import React from 'react'
import Image from 'next/image'

const CardPortfolioSession = () => {
  return (
    <div className="relative flex w-[90%] cursor-pointer flex-col items-center justify-center rounded-2xl bg-secondary p-4 shadow-card duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 sm-cardPortfolio-0:w-[39rem] sm-cardPortfolio-0:flex-row-reverse sm-cardPortfolio-0:items-start sm-cardPortfolio-0:pl-6 sm-cardPortfolio-0:pr-0">
      <Image
        alt="Char One"
        aria-label="Char One"
        width={345}
        height={358}
        src="/images/portfolio/char1.png"
        className="h-72 w-72 object-cover object-center"
      />
      <p className="text-xl font-medium sm-cardPortfolio-0:leading-[5rem]">
        Geraldão
        <span className="hidden text-sm font-normal sm-cardPortfolio-0:block">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s. industry. Lorem Ipsum has been the industry&#39;s
          standard dummy text ever since the 1500s.
        </span>
      </p>
    </div>
  )
}

export default CardPortfolioSession
