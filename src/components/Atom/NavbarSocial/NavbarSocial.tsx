import Link from 'next/link';
import React from 'react';
import { faArtstation, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavbarSocial() {
  return (
    <nav className='flex gap-5'>
        <Link href="https://www.artstation.com/kleytowmoreira" target='_blank'><FontAwesomeIcon className='text-3xl text-primary hover:text-hover hover:underline active:text-hover active:underline' icon={faArtstation} /></Link>
        <Link href="https://www.linkedin.com/in/kleytowmoreira/" target='_blank'><FontAwesomeIcon className='text-3xl text-primary hover:text-hover hover:underline active:text-hover active:underline' icon={faLinkedin} /></Link>
        <Link href="https://www.instagram.com/kleytowmoreirart/" target='_blank'><FontAwesomeIcon className='text-3xl text-primary hover:text-hover hover:underline active:text-hover active:underline' icon={faInstagram} /></Link>
    </nav>
  )
}

export default NavbarSocial