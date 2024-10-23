import { cakes } from '../util/data'
import { Card } from './Card/Card'

export const Gallery = () => {
  return (
    <section className='py-10 grid grid-cols-[repeat(auto-fill,_100%)] sm:grid-cols-[repeat(auto-fill,_320px)] gap-8 justify-center'>
      {cakes.map((cake, index) => (
        <Card 
          key={index}
          cakeData={cake}
        />
      ))}
    </section>
  )
}