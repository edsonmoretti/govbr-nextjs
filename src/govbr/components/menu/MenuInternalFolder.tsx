import React from 'react'
import Link from 'next/link'
import { MenuProps } from '@/govbr/models'

const MenuInternalFolder = ({ label, icon, href, children }: MenuProps) => {
  return (
    <li>
      <Link className="menu-item" href={href ?? '#'}>
        {icon && icon()}
        <span className="content">{label}</span>
      </Link>
      <ul>{children}</ul>
    </li>
  )
}
export default MenuInternalFolder
