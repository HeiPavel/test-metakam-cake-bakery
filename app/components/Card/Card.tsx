import Image from 'next/image'
import { CakeType } from '@/app/util/data'
import { CardButton } from './CardButton'

export const Card = ({cakeData: {title, image, price}}: {cakeData: CakeType}) => {
  return (
    <div className='p-6 rounded-lg bg-white flex flex-col justify-between items-center h-96 text-brown'>
      <h2 className='text-2xl text-cente font-bold'>{title}</h2>
      <Image
        src={image}
        alt='cake image'
        className='w-10/12'
        fetchPriority='high'
      />
      <div className='px-4 flex justify-between w-full'>
        <p className='text-lg font-semibold'>{`$${price}`}</p>
        <CardButton/>
      </div>
    </div>
  )
}