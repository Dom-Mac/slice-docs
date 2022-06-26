import Link from 'next/link'
import clsx from 'clsx'

type ButtonType = {
  children: JSX.Element | string
  variant?: 'primary' | 'secondary'
  className?: string
  [x: string]: any
}

interface ButtonLinkType extends ButtonType {
  href: string
}

const styles = {
  primary:
    'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 active:bg-sky-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 active:text-slate-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50',
}

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonType) {
  return <button className={clsx(styles[variant], className)} {...props} />
}

export function ButtonLink({
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonLinkType) {
  return (
    <Link href={href}>
      <a className={clsx(styles[variant], className)} {...props} />
    </Link>
  )
}
