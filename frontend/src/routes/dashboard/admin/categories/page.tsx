import { useSEO } from '@/hooks/useSEO'
import { useEffect, useState } from 'react'
import { EmptyState } from './_components/empty-state'
import { TCategory } from '@/types/types'

export default function DashboardAdminCategoriesPage() {
  useSEO('Dashboard')

  const [categories, setCategories] = useState<TCategory[]>([])

  useEffect(() => {
    setCategories([])
  }, [])

  return (
    <div>
      <div className='mb-8'>
        <h1 className='font-semibold text-xl md:text-2xl'>Categories</h1>
      </div>
      <div>
        {categories.length === 0 ? (
          <EmptyState />
        ) : (
          <div>
            <h2>CONTENIDO</h2>
          </div>
        )}
      </div>
    </div>
  )
}
