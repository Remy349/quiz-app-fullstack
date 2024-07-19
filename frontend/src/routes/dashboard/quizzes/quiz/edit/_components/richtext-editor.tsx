import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Toolbar } from './toolbar'

interface IRichTextEditorProps {
  content: string
  onChange(text: string): void
}

export const RichTextEditor = ({ content, onChange }: IRichTextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        class:
          'min-h-[200px] bg-background rounded-md border border-input px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className='space-y-2'>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
