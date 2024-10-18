import { useEffect, useState } from 'react'
import { ResultFilterType } from '@/types/filters'

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND}/api/content-type-builder/content-types/api::product.product`
  const [result, setResult] = useState<ResultFilterType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setResult(json.data)
        setLoading(false)
      } catch (error: any) {
        setLoading(false)
      }
    })()
  }, [url])

  return { loading, result, error }
}
