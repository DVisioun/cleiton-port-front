import { TeamLogo } from '@/components/Atom/TeamLogo/TeamLogo'
import Image from 'next/image'

interface FooterProps {
  position: string
}

export const Footer = ({ position }: FooterProps) => {
  return (
    <footer className={`flex w-full justify-center p-8 ${position}  bottom-0 `}>
      {position === '' && <TeamLogo />}
      {position === 'absolute' && (
        <div className="sm-0.2:flex-col sm-0.2:items-center flex gap-3 sm-1:justify-center">
          <span className="text-lg text-[var(--white)]">
            © 2024 - Developed by{' '}
          </span>
          <Image
            src="/images/dvision-logo-white.svg"
            alt=""
            width={120}
            height={120}
            className="max-w-28"
          />
        </div>
      )}
    </footer>
  )
}
