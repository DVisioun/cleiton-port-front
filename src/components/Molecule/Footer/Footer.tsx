import { TeamLogo } from '@/components/Atom/TeamLogo/TeamLogo'
import Image from 'next/image'

interface FooterProps {
  position: string
}

export const Footer = ({ position }: FooterProps) => {
  return (
    <footer
      className={`flex w-full justify-center p-8 sm-0:py-2 ${position} bottom-0 `}
    >
      {position === '' && <TeamLogo />}
      {position === 'absolute' && (
        <div className="flex items-center justify-center gap-3">
          <span className="text-lg text-[var(--white)] sm-0:text-xs">
            © 2024 - Developed by{' '}
          </span>
          <Image
            src="/images/dvision-logo-white.svg"
            alt=""
            width={120}
            height={120}
            className="max-w-28 sm-0:w-20"
          />
        </div>
      )}
    </footer>
  )
}
