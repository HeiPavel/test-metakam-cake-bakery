import { StaticImageData } from 'next/image'
import berry_choc_bliss from '@/assets/image/berry_choc_bliss.webp'
import berry_cocao_delight from '@/assets/image/berry_cocoa_delight.webp'
import berry_whip_cake from '@/assets/image/berry_whip_cake.webp'
import choco_berry_fusion from '@/assets/image/choco_berry_fusion.webp'
import choco_berry_whip from '@/assets/image/choco_berry_whip.webp'
import cocoa_berry_dream from '@/assets/image/cocoa_berry_dream.webp'
import creamy_choc_burst from '@/assets/image/creamy_choc_burst.webp'
import velvet_berry_cake from '@/assets/image/velvet_berry_cake.webp'

export type CakeType = {
  title: string
  image: StaticImageData
  price: string
}

export const cakes: CakeType[] = [
  {
    title: 'Berry Choc Bliss',
    image: berry_choc_bliss,
    price: '12.50'
  },
  {
    title: 'Berry Cocoa Delight',
    image: berry_cocao_delight,
    price: '37.50'
  },
  {
    title: 'Berry Whip Cake',
    image: berry_whip_cake,
    price: '40.00'
  },
  {
    title: 'Choco Berry Fusion',
    image: choco_berry_fusion,
    price: '33.50'
  },
  {
    title: 'Choco Berry Whip',
    image: choco_berry_whip,
    price: '35.00'
  },
  {
    title: 'Cocoa Berry Dream',
    image: cocoa_berry_dream,
    price: '10.00'
  },
  {
    title: 'Creamy Choco Burst',
    image: creamy_choc_burst,
    price: '45.00'
  },
  {
    title: 'Velvet Berry Cake',
    image: velvet_berry_cake,
    price: '35.00'
  },
]