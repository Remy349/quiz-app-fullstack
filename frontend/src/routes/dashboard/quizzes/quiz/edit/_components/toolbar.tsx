import { Toggle } from '@/components/ui/toggle'
import { type Editor } from '@tiptap/react'
import { Bold, Heading2, Italic, List, ListOrdered } from 'lucide-react'

interface IToolbarProps {
  editor: Editor | null
}

export const Toolbar = ({ editor }: IToolbarProps) => {
  if (!editor) return null

  return (
    <div className='border border-input p-1 rounded-md'>
      <Toggle
        size='sm'
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className='w-4 h-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className='w-4 h-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('heading', { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className='w-5 h-5' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className='w-4 h-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className='w-4 h-4' />
      </Toggle>
    </div>
  )
}
