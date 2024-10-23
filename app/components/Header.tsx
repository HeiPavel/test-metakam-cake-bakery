import Image from 'next/image'
import logo from '@/assets/image/logo.webp'
import { FaCartArrowDown } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className='py-2 border-b border-brown'>
      <div className='h-full container grid grid-cols-[1fr_auto] items-center'>
        <Image
          src={logo}
          priority={true}
          alt='logo image'
          className='h-24 tablet:h-28 laptop:h-32 w-auto justify-self-start laptop:justify-self-center'
        />
        <FaCartArrowDown
          className='justify-self-end size-8 text-brown cursor-pointer'
        />
      </div>
    </header>
  )
}