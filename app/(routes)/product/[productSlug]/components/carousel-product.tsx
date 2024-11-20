/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

interface CarouselProdctProps {
  images: {
    id: number
    url: string
  }[]
}

const CarouselProdct = (props: CarouselProdctProps) => {
  const { images } = props
  console.log('images', images)

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map(image => (
            <CarouselItem key={image.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND}${image.url}`}
                alt="Image product"
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  )
}

export default CarouselProdct
