import React from 'react'
import Link from 'next/link'
import { MenuProps } from '@/govbr/cadsia/govbr/models'

const MenuFolder = ({ label, icon, href, children }: MenuProps) => {
  return (
    <div className="menu-folder">
      <Link className="menu-item" href={href ?? '#'}>
        {icon && icon()}
        <span className="content">{label}</span>
      </Link>
      <ul>{children}</ul>
    </div>
  )
}
export default MenuFolder
