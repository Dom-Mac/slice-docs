import { LinkGrid } from '@/components/LinkGrid'

export const linkGridLink = {
  selfClosing: true,
  render: LinkGrid.Link,
  attributes: {
    title: { type: String },
    description: { type: String },
    icon: { type: String },
    href: { type: String },
  },
}
