'use client'

import { useGetCategoryProduct } from '@/api/getCategoryProduct'

export default function Page() {
  const { result } = useGetCategoryProduct('capsula')

  const dato = {}
  console.log(result)
  return <>From page category</>
}
