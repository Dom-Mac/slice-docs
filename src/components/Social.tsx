import { FC } from 'react'
import {
  Twitter,
  Facebook,
  Instagram,
  Reddit,
  Linkedin,
  Mail,
  Github,
  Discord,
  Blog,
  Juicebox,
  Notion,
  Slice,
} from './icons/Social'

type Props = {
  className?: string
  wrapperClassName?: string
}

const Social: FC<Props> = ({ wrapperClassName }, props) => {
  const { children, className, ...rest } = props

  const accounts = {
    slice: 'https://slice.so',
    twitter: 'https://twitter.com/slice__so',
    discord: 'https://discord.gg/CdyHUzdZks',
    notion: 'https://slicedao.notion.site',
    // github: 'https://github.com/slice-so',
    blog: '/blog',
    juicebox: 'https://juicebox.money/#/p/slice',
    // reddit: "https://reddit.com/r/slice",
  }

  const components = {
    slice: {
      color: 'hover:text-yellow-600 dark:hover:text-yellow-300',
      element: Slice,
    },
    twitter: {
      color: 'hover:text-blue-500 dark:hover:text-blue-400',
      element: Twitter,
    },
    discord: {
      color: 'hover:text-indigo-500 dark:hover:text-indigo-400',
      element: Discord,
    },
    github: {
      color: 'hover:text-purple-500 dark:hover:text-purple-400',
      element: Github,
    },
    notion: {
      color: 'hover:text-gray-500 dark:hover:text-gray-400',
      element: Notion,
    },
    blog: {
      color: 'hover:text-green-500 dark:hover:text-green-400',
      element: Blog,
    },
    juicebox: {
      color: 'hover:text-yellow-600 dark:hover:text-yellow-300',
      element: Juicebox,
    },
    facebook: {
      color: 'hover:text-blue-700 dark:hover:text-blue-200',
      element: Facebook,
    },
    instagram: {
      color: 'hover:text-pink-500 dark:hover:text-pink-400',
      element: Instagram,
    },
    reddit: {
      color: 'hover:text-red-500 dark:hover:text-red-400',
      element: Reddit,
    },
    linkedin: {
      color: 'hover:text-blue-700 dark:hover:text-blue-200',
      element: Linkedin,
    },
    mail: {
      color: 'hover:text-gray-500 dark:hover:text-gray-400',
      element: Mail,
    },
  }

  const size = 'h-6'

  return (
    <div className={`${wrapperClassName} flex justify-center`}>
      {Object.entries(accounts).map(([key, val]) => {
        // @ts-ignore
        const DynamicComponent = components[key].element
        // @ts-ignore
        const componentColor = components[key].color
        return (
          <a
            key={key}
            className={`${componentColor} ${size} mx-[18px]`}
            href={val}
            target="_blank"
            rel="noreferrer"
            aria-label={`${val} logo`}
          >
            <DynamicComponent />
          </a>
        )
      })}
    </div>
  )
}

export default Social
