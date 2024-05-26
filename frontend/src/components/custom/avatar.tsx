import Avvvatars from 'avvvatars-react'

interface IAvatarProps {
  value: string
  style?: 'character' | 'shape'
  size?: number
}

export const Avatar = ({ value, style, size }: IAvatarProps) => {
  return <Avvvatars value={value} style={style} size={size} />
}
