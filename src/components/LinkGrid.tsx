import NextLink from 'next/link'

import { Icon, IconType } from '@/components/Icon'

type LinkProps = {
  title: string
  description: string
  href: string
  icon: IconType
}

export function LinkGrid({ children }: { children: JSX.Element }) {
  return (
    <div className="grid grid-cols-1 gap-6 my-12 not-prose sm:grid-cols-2">
      {children}
    </div>
  )
}

LinkGrid.Link = function Link({ title, description, href, icon }: LinkProps) {
  return (
    <div className="relative border group rounded-xl border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.sky.50)),var(--link-grid-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--link-grid-hover-bg:theme(colors.slate.800)]" />
      <div className="relative p-6 overflow-hidden rounded-xl">
        <Icon icon={icon} className="w-8 h-8" />
        <h2 className="mt-4 text-base font-display text-slate-900 dark:text-white">
          <NextLink href={href}>
            <a>
              <span className="absolute -inset-px rounded-xl" />
              {title}
            </a>
          </NextLink>
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}
