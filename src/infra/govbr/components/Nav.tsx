import React from 'react'

type BrHeaderProps = {}

const Nav = (props: BrHeaderProps) => {
  return (
    <nav className="br-skiplink" role="menubar">
      <a
        className="br-item"
        href="#main-content"
        role="menuitem"
        accessKey="1"
        key={'1'}
      >
        Ir para o conteúdo <span aria-hidden="true">(1/4)</span>{' '}
        <span aria-hidden="true" className="br-tag text ml-1">
          1
        </span>
      </a>
      <a
        className="br-item"
        href="#header-navigation"
        role="menuitem"
        accessKey="2"
        key={'2'}
      >
        Ir para o menu <span aria-hidden="true">(2/4)</span>{' '}
        <span aria-hidden="true" className="br-tag text ml-1">
          2
        </span>
      </a>
      <a
        className="br-item"
        href="#main-searchbox"
        role="menuitem"
        accessKey="3"
        key={'3'}
      >
        Ir para a busca <span aria-hidden="true">(3/4)</span>{' '}
        <span aria-hidden="true" className="br-tag text ml-1">
          3
        </span>
      </a>
      <a
        className="br-item"
        href="#footer"
        role="menuitem"
        accessKey="4"
        key={'4'}
      >
        Ir para o rodapé <span aria-hidden="true">(4/4)</span>{' '}
        <span aria-hidden="true" className="br-tag text ml-1">
          4
        </span>
      </a>
    </nav>
  )
}

export default Nav
