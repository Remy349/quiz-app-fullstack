import { useSEO } from '@/hooks/useSEO'
import { EmptyState } from './_components/empty-state'

export default function DashboardHomePage() {
  const quizzes = []

  useSEO('Dashboard')

  return (
    <div>
      {quizzes.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          <p>DATA HERE</p>
        </div>
      )}
    </div>
  )
}
