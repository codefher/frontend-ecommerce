import BannerDiscount from '@/components/banner-discount'
import BannerProduct from '@/components/banner-product'
import CarouselTextBanner from '@/components/carousel-text-banner'
import ChooseCategory from '@/components/choose-category'
import FeaturedProducts from '@/components/featured-product'

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </main>
  )
}
