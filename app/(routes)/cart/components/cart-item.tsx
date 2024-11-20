/* eslint-disable @next/next/no-img-element */
import { useCart } from '@/hooks/use-cart'
import { formartPrice } from '@/lib/formatPrice'
import { cn } from '@/lib/utils'
import { ProductType } from '@/types/product'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CartItemProps {
  product: ProductType
}

const CartItem = (props: CartItemProps) => {
  const { product } = props
  const router = useRouter()
  const { removeItem } = useCart()

  return (
    <li className="flex py-6 border-b">
      <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND}${product.images[0].url}`}
          alt="Product"
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold"> {product.productName} </h2>
          <p className="font-bold">{formartPrice(product.price)}</p>
          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit ">
              {product.taste}
            </p>
            <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
              {product.origin}
            </p>
          </div>
        </div>
        <div>
          <button
            className={cn(
              'rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition'
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} className="text-black" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
