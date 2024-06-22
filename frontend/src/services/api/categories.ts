import { TCategory } from '@/types/types'
import { API_URL } from '@/utils/consts'
import axios from 'axios'

export const getCategories = async () => {
  const res = await axios.get<TCategory[]>(`${API_URL}/categories`)

  return res.data
}

export const createCategory = async (category: { name: string }) => {
  await axios.post(`${API_URL}/categories`, category)
}

export const deleteCategory = async (categoryId: string) => {
  await axios.delete(`${API_URL}/categories/${categoryId}`)
}
