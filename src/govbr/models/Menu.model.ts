import React from 'react'

export type MenuItemProps = {
  href?: string
  icon?: () => React.ReactNode | React.JSX.Element
} & Readonly<{ children: React.ReactNode }>

export type MenuProps = MenuItemProps & Readonly<{ label: string }>

export type MenuItemModel = {
  href: string
  icon?: () => React.ReactNode | React.JSX.Element
  label: string
}
