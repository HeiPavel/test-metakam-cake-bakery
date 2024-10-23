import { Button } from '@radix-ui/themes'
import { BsCart2 } from 'react-icons/bs'

export const CardButton = () => {
  return (
    <Button
      type='button'
      variant='solid'
      color='pink'
      radius='full'
      className='cursor-pointer text-base drop-shadow-button will-change-[transform,filter] transition-all ease-linear hover:scale-110 active:scale-95 active:drop-shadow-none'
    >
      <BsCart2
        className='size-5'
      />
      <span>Add to Cart</span>
    </Button>
  )
}