import { Head, Link } from '@inertiajs/react'
import { Bell, Package2 } from 'lucide-react'
import { PropsWithChildren } from 'react'

import Header from '../header'
import Sidebar from '../sidebar'
import { SidebarMobile } from '../sidebar/sidebar_mobile'
import { Button } from '../ui/button'

type Props = PropsWithChildren & {
  title: string
}

export function AdminLayout({ title, children }: Props) {
  return (
    <>
      <Head title={title} />
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Acme Inc</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <SidebarMobile />
            <Header />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
            </div>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
