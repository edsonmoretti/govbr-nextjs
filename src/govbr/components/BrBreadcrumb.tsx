'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type BrBreadcrumbProps = {}
type Breadcrumb = {
  isHome?: boolean
  label: string
  href: string
}
const BrBreadcrumb = ({}: BrBreadcrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)
  const [crumbs, setCrumbs] = React.useState<Breadcrumb[]>([])
  useEffect(() => {
    const crumbsTmp: Breadcrumb[] = [
      {
        href: '/',
        label: 'Página inicial',
        isHome: true,
      },
    ]
    pathNames.forEach((link, index) => {
      const href = `/${pathNames.slice(0, index + 1).join('/')}`
      const label = link[0].toUpperCase() + link.slice(1, link.length)
      crumbsTmp.push({ href, label })
    })
    setCrumbs(crumbsTmp.flat())
  }, [paths])

  return (
    <>
      {/*<BrBreadcrumbs crumbs={crumbs} />*/}
      <nav className="br-breadcrumb">
        <ol className="crumb-list" role="list">
          {crumbs.map((breadcrumb, index) => {
            return (
              <>
                {breadcrumb.isHome && (
                  <li className="crumb home" key={index}>
                    <Link href={'/'}>
                      <i className="fas fa-home"></i> Página inicial
                    </Link>
                  </li>
                )}
                {!breadcrumb.isHome && (
                  <li className={'crumb'} key={index}>
                    <i className={'icon fas fa-chevron-right'}></i>
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  </li>
                )}
              </>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default BrBreadcrumb
