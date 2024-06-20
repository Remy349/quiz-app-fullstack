export const logoLink: {
  ADMIN: string
  USER: string
} = {
  ADMIN: '/dashboard/admin',
  USER: '/dashboard',
}

export const navLinks: {
  ADMIN: {
    href: string
    name: string
  }[]
  USER: {
    href: string
    name: string
  }[]
} = {
  ADMIN: [
    { href: '/dashboard/admin', name: 'Dashboard' },
    { href: '/dashboard/admin/categories', name: 'Categories' },
  ],
  USER: [{ href: '/dashboard', name: 'Dashboard' }],
}
