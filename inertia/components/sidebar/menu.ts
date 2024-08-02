import { Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react'

export const menus = [
  {
    href: '/admin/dashboard',
    label: 'Dashboard',
    icon: Home,
  },
  {
    href: '/admin/orders',
    label: 'Orders',
    icon: ShoppingCart,
  },
  {
    href: '/admin/products',
    label: 'Products',
    icon: Package,
  },
  {
    href: '/admin/customers',
    label: 'Customers',
    icon: Users,
  },
  {
    href: '/admin/analytics',
    label: 'Analytics',
    icon: LineChart,
  },
]
