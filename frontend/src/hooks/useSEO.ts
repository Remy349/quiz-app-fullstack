import { useEffect } from 'react'

export const useSEO = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title

    if (title) {
      document.title = `${title} | Quiz App`
    }

    return () => {
      document.title = prevTitle
    }
  }, [title])
}
