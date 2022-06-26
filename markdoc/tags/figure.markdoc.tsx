import { Figure, FigureProps } from '@/components/Figure'

export const figure = {
  selfClosing: true,
  attributes: {
    src: { type: String },
    alt: { type: String },
    caption: { type: String },
    height: { type: String, default: 'short' },
  },
  render: ({ src, alt = '', caption = '', height = 'medium' }: FigureProps) => {
    return <Figure src={src} alt={alt} caption={caption} height={height} />
  },
}
