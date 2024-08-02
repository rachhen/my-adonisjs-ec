import { Link, usePage } from '@inertiajs/react'

import { cn } from '~/utils/cn'
import { menus } from './menu'

function Sidebar() {
  const { url } = usePage()

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {menus.map((menu) => (
        <Link
          href={menu.href}
          key={menu.href}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary',
            {
              'text-muted-foreground': !url.startsWith(menu.href),
              'bg-muted text-primary': url.startsWith(menu.href),
            }
          )}
        >
          <menu.icon className="h-4 w-4" />
          {menu.label}
        </Link>
      ))}
    </nav>
  )
}

export default Sidebar
