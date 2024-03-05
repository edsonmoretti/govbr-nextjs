import React from 'react'
import { BrButton } from '@govbr-ds/react-components'
import { FaSearch, FaTimes } from '@/govbr/cadsia/govbr/components/icons/fa'

export const BrHeaderSearch = () => {
  const [searchText, setSearchText] = React.useState('')
  const search = () => {
    alert(
      `TODO: adicione sua lógica de busca aqui! Você digitou: ${searchText}`,
    )
  }
  return (
    <div className="header-search" id="main-searchbox">
      <div className="br-input has-icon">
        <label htmlFor="searchbox">Texto da pesquisa</label>
        <input
          id="searchbox"
          type="text"
          placeholder="O que você procura?"
          onChange={e => {
            setSearchText(e.target.value)
          }}
          onKeyUp={e => {
            if (e.key === 'Enter') {
              search()
            }
          }}
          value={searchText}
        />
        <BrButton
          className="br-button circle small"
          type="button"
          aria-label="Pesquisar"
          onClick={search}
        >
          <FaSearch />
        </BrButton>
      </div>
      <BrButton
        className="br-button circle search-close ml-1"
        type="button"
        aria-label="Fechar Busca"
        data-dismiss="search"
      >
        <FaTimes />
      </BrButton>
    </div>
  )
}
