import React from 'react'
import { MenuItemProps } from '@/govbr/govbr/models'
import Link from 'next/link'

const MenuItem = ({ children, icon, href }: MenuItemProps) => {
  return (
    <ul>
      <li>
        <Link className="menu-item" href={href ?? '#'}>
          {icon && icon()}
          <span className="content">{children}</span>
        </Link>
      </li>
    </ul>
  )
}
export default MenuItem
