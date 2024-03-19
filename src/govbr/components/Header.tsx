'use client'
import React, { Suspense, useEffect } from 'react'
import { BrButton, BrItem, BrList } from '@govbr-ds/react-components'
import Link from 'next/link'
import { MenuItemModel } from '@/govbr/models'
import { BrHeaderSearch } from '@/govbr/components/BrHeaderSearch'
import {
  FaAdjust,
  FaChartBar,
  FaComment,
  FaHeadset,
} from '@/govbr/components/icons/fa'
import HeaderLogin from '@/govbr/components/menu/HeaderLogin'
import { Image, Tooltip } from '@chakra-ui/react'

type BrHeaderProps = {}

const Header = (props: BrHeaderProps) => {
  const [menuItens, setMenuItens] = React.useState<MenuItemModel[]>([])
  const [logo, setLogo] = React.useState<string>('')
  const [functionalityMenuItens, setFunctionalityMenuItens] = React.useState<
    MenuItemModel[]
  >([])

  useEffect(() => {
    setLogo('/images/logo-govbr.png')
    setMenuItens([
      {
        label: 'Início',
        href: '/',
      },
      {
        label: 'Sobre',
        href: '/sobre',
      },
      {
        label: 'Desing System',
        href: '/ds',
      },
      {
        label: 'Contato',
        href: '/contato',
      },
    ])

    setFunctionalityMenuItens([
      {
        label: 'Funcionalidade 1',
        href: '/funcionalidade1',
        icon: FaChartBar,
      },
      {
        label: 'Funcionalidade 2',
        href: '/funcionalidade2',
        icon: FaHeadset,
      },
      {
        label: 'Funcionalidade 3',
        href: '/funcionalidade3',
        icon: FaComment,
      },
      {
        label: 'Funcionalidade 4',
        href: '/funcionalidade4',
        icon: FaAdjust,
      },
    ])
  }, [])
  return (
    <>
      <header className="br-header mb-4" id="header" data-sticky="data-sticky">
        <div className="container-fluid">
          <div className="header-top">
            <div className="header-logo">
              <Image src={logo} alt="logo" />
              <span className="br-divider vertical"></span>
              <Tooltip label={'Assinatura'} aria-label={'Assinatura'}>
                <div className="header-sign pointer">Assinatura</div>
              </Tooltip>
            </div>
            <div className="header-actions">
              <div className="header-links dropdown">
                {/*<button*/}
                {/*  className="br-button circle small"*/}
                {/*  type="button"*/}
                {/*  data-toggle="dropdown"*/}
                {/*  aria-label="Abrir Acesso Rápido"*/}
                {/*>*/}
                {/*  <i className="fas fa-ellipsis-v" aria-hidden="true"></i>*/}
                {/*</button>*/}
                <BrButton
                  data-toggle="dropdown"
                  aria-label="Abrir Acesso Rápido"
                >
                  <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                </BrButton>
                <div className="br-list">
                  <div className="header">
                    <div className="title">Acesso Rápido</div>
                  </div>
                  <>
                    {menuItens.map((menu, index) => (
                      <BrItem key={index}>
                        <Link key={index} href={menu.href}>
                          {menu.label}
                        </Link>
                      </BrItem>
                    ))}
                  </>
                </div>
              </div>
              <span className="br-divider vertical mx-half mx-sm-1"></span>
              <div className="header-functions dropdown">
                <BrButton
                  className="br-button circle small"
                  type="button"
                  data-toggle="dropdown"
                  aria-label="Abrir Funcionalidades do Sistema"
                >
                  <i className="fas fa-th" aria-hidden="true"></i>
                </BrButton>
                <BrList title={'Funcionalidades do Sistema'}>
                  <>
                    {functionalityMenuItens.map((menu, index) => (
                      <Link key={index} href={menu.href}>
                        <BrItem key={index}>
                          <BrButton
                            className="br-button circle small"
                            title={menu.label}
                            aria-label={menu.label}
                          >
                            {menu.icon && menu.icon()}
                            <span className="text">{menu.label}</span>
                          </BrButton>
                        </BrItem>
                      </Link>
                    ))}
                  </>
                </BrList>
              </div>
              <div className="header-search-trigger">
                <button
                  className="br-button circle"
                  type="button"
                  aria-label="Abrir Busca"
                  data-toggle="search"
                  data-target=".header-search"
                >
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <Suspense>
                <HeaderLogin />
              </Suspense>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-menu">
              <div className="header-menu-trigger" id="header-navigation">
                <button
                  className="br-button small circle"
                  type="button"
                  aria-label="Menu"
                  data-toggle="menu"
                  data-target="#main-navigation"
                  id="navigation"
                >
                  <i className="fas fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <div className="header-info">
                <div className="header-title">Template básico</div>
                <div className="header-subtitle">Subtítulo do Header</div>
              </div>
            </div>
            <BrHeaderSearch />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
