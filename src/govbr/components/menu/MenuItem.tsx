import React from 'react'

import Link from 'next/link'
import { MenuItemProps } from '@/govbr/models'

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
