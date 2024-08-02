import { Link, usePage } from '@inertiajs/react'
import { Menu, Package2 } from 'lucide-react'

import { cn } from '~/utils/cn'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { menus } from './menu'

export function SidebarMobile() {
  const { url } = usePage()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={cn(
                'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground',
                {
                  'text-muted-foreground': !url.startsWith(menu.href),
                  'bg-muted text-foreground': url.startsWith(menu.href),
                }
              )}
            >
              <menu.icon className="h-5 w-5" />
              {menu.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
