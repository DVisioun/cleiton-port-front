import AboutCard from '@/components/Atom/AboutCard/AboutCard'
import Image from 'next/image'
import React from 'react'

const BodyPortfolioPost = () => {
  return (
    <div className="flex w-full items-start justify-around md-1.5:flex-col md-1.5:items-center md-1.5:justify-center md-1.5:gap-12">
      <section className="flex w-2/3 flex-col items-start justify-start gap-4 md-1.5:!w-full md-1.5:items-center md-2:w-1/2 md-3:items-center">
        <Image
          alt="Portfólio Image"
          className="mt-4"
          width={800}
          height={450}
          src="/images/portfolio/posts/img1.png"
          aria-label="Portfólio Image"
        />
        <Image
          alt="Portfólio Image"
          width={800}
          height={450}
          src="/images/portfolio/posts/img2.png"
          aria-label="Portfólio Image"
        />
        <Image
          alt="Portfólio Image"
          width={800}
          height={886}
          src="/images/portfolio/posts/img3.png"
          aria-label="Portfólio Image"
        />
        <Image
          alt="Portfólio Image"
          width={800}
          height={320}
          src="/images/portfolio/posts/img4.png"
          aria-label="Portfólio Image"
        />
      </section>
      <div className="flex w-[30%] flex-col items-start justify-center gap-6 sm-2.1:!flex-col sm-2.1:items-center md-1.5:!w-[82%] md-1.5:flex-row md-2:w-[35%] md-3:items-center">
        <div className="flex w-full flex-col items-center justify-start bg-secondary px-8 py-4 shadow-card sm-0:px-2 md-3:!w-[385px]">
          <AboutCard />
          <h2 className="w-full text-left text-primary">Geraldão</h2>
          <p className="w-full text-left text-primary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <section className="mt-4 flex w-full items-center justify-start gap-8">
            <div className="flex w-20 cursor-pointer items-center justify-start gap-3 text-primary">
              <Image
                className="h-5 w-5 cursor-pointer"
                src="/images/In.png"
                alt="LinkedIn Icon"
                width={40}
                height={40}
                aria-label="LinkedIn Icon"
              ></Image>
              Share
            </div>
            <div className="flex cursor-pointer items-center justify-start gap-3 text-primary">
              <Image
                className="h-5 w-5 cursor-pointer"
                src="/images/x.png"
                alt="LinkedIn Icon"
                width={40}
                height={40}
                aria-label="LinkedIn Icon"
              ></Image>
              Share
            </div>
          </section>
          <section className="m-10 flex w-full flex-col items-center justify-center">
            <h3 className="w-full text-left text-primary">Softwares</h3>
            <div className="flex w-full items-center justify-start gap-4">
              <div className="flex cursor-default items-center justify-center gap-2 rounded bg-content px-3 py-1 shadow-software">
                <Image
                  className="h-8 w-8"
                  src="/images/softwares/blender.png"
                  alt="Blender Icon"
                  aria-label="Blender Icon"
                  width={40}
                  height={40}
                ></Image>
                <p className="text-white">Blender</p>
              </div>
              <div className="flex cursor-default items-center justify-center gap-2 rounded bg-content px-3 py-1 shadow-software">
                <Image
                  className="h-8 w-8"
                  src="/images/softwares/photoshop.png"
                  alt="Photoshop Icon"
                  aria-label="Photoshop Icon"
                  width={40}
                  height={40}
                ></Image>
                <p className="text-white">Photoshop</p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-8 bg-secondary px-12 py-10 shadow-card sm-0:px-4 sm-2:!w-full sm-2.1:w-1/2 md-3:!w-[385px]">
          <h3 className="m-0 w-full text-left text-3xl text-primary">
            Outras postagens
          </h3>
          <div className="relative w-full">
            <Image
              src="/images/anotherr.png"
              alt="Another post"
              width={300}
              height={300}
              aria-label="Another post"
            ></Image>
            <div className="absolute bottom-0 flex w-full items-center justify-start gap-3 bg-opacity p-4">
              <Image
                className="rounded-full"
                alt="Cleiton Avatar"
                aria-label="Cleiton Avatar"
                src="/images/avatar.jpg"
                width={56}
                height={56}
              ></Image>
              <div className="flex flex-col items-start justify-center">
                <h2 className="m-0 text-xl text-primary">Nome do personagem</h2>
                <h6 className="text-secondary">Cleiton Moreira</h6>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              src="/images/anotherr.png"
              alt="Another post"
              width={300}
              height={300}
              aria-label="Another post"
            ></Image>
            <div className="absolute bottom-0 flex w-full items-center justify-start gap-3 bg-opacity p-4">
              <Image
                className="rounded-full"
                alt="Cleiton Avatar"
                aria-label="Cleiton Avatar"
                src="/images/avatar.jpg"
                width={56}
                height={56}
              ></Image>
              <div className="flex flex-col items-start justify-center">
                <h2 className="m-0 text-xl text-primary">Nome do personagem</h2>
                <h6 className="text-secondary">Cleiton Moreira</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyPortfolioPost
