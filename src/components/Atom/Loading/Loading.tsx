'use client'

import { ThreeCircles } from 'react-loader-spinner'
import { useState, useEffect } from 'react'

export function LoadingScreen({ loading }: { loading: boolean }) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loading ? setIsLoading(true) : setIsLoading(false)
  }, [loading])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-gray-300">
          <ThreeCircles
            height={300}
            width={300}
            color="#218595"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      )}
    </>
  )
}
