import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { ProductType } from '@/types/product'
import { toast } from './use-toast'

interface UseLovedProductsType {
  lovedItems: ProductType[]
  addLovedItem: (data: ProductType) => void
  removeLovedItem: (id: number) => void
}

export const useLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: ProductType) => {
        const currentItems = get().lovedItems
        const existingItem = currentItems.find(item => item.id === data.id)

        if (existingItem) {
          return toast({
            title: 'Producto ya existe en tus favoritos 💔',
            variant: 'destructive'
          })
        }

        set({
          lovedItems: [...get().lovedItems, data]
        })
        toast({
          title: 'Producto añadido a tus favoritos 💛'
        })
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: [...get().lovedItems.filter(item => item.id !== id)]
        })
        toast({
          title: 'Producto eliminado de tus favoritos ❤️‍🔥'
        })
      }
    }),
    {
      name: 'loved-products-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
