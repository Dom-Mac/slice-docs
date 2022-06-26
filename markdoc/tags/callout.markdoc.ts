import { Callout } from '@/components/Callout'

export const callout = {
  render: Callout,
  description: 'Display the enclosed content in a callout box',
  attributes: {
    title: {
      type: String,
      description: 'The title displayed at the top of the callout',
    },
    type: {
      type: String,
      default: 'note',
      matches: ['note', 'warning', 'caution', 'check'],
      errorLevel: 'critical',
    },
  },
}
