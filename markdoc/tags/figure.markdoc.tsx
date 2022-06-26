type Props = {
  src: string
  caption?: string
  alt?: string
}

export const figure = {
  selfClosing: true,
  attributes: {
    src: { type: String },
    alt: { type: String },
    caption: { type: String },
  },
  render: ({ src, alt = '', caption = '' }: Props) => (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  ),
}
