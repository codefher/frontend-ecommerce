/* eslint-disable @next/next/no-img-element */
import { CardContent } from '@/components/ui/card'
import { Carousel, CarouselItem } from '@/components/ui/carousel'

interface CarouselProdctProps {
  images: {
    id: number
    url: string
  }[]
}

const CarouselProdct = (props: CarouselProdctProps) => {
  const { images } = props
  console.log(images)

  return (
    <div className="sm:px-16">
      <Carousel>
        <CardContent>
          {images.map(image => (
            <CarouselItem key={image.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND}${image.url}`}
                alt="Image product"
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CardContent>
      </Carousel>
    </div>
  )
}

export default CarouselProdct
