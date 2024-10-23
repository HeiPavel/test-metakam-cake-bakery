import Image from 'next/image'
import footer_logo from '@/assets/image/footer_logo.webp'

export const Footer = () => {
  return (
    <footer className='py-3 flex justify-center border-t border-brown'>
      <Image
        src={footer_logo}
        alt='footer logo image'
        className='h-14 tablet:h-16 laptop:h-20 w-auto'
      />
    </footer>
  )
}