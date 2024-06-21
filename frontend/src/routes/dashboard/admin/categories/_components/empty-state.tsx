import { CreateDialog } from './create-dialog'

export const EmptyState = () => {
  return (
    <div className='h-[360px] flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
      <div className='flex flex-col items-center gap-1 text-center'>
        <h2 className='text-xl font-bold tracking-tight'>
          You have no categories
        </h2>
        <p className='text-sm text-muted-foreground'>
          You can start by adding a category
        </p>
        <CreateDialog />
      </div>
    </div>
  )
}
