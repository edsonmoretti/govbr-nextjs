import React from 'react'

export default function Home() {
  return (
    <div className="col mb-5">
      <nav className="br-breadcrumb">
        <ol className="crumb-list" role="list">
          <li className="crumb home">
            <a className="br-button circle" href="#">
              <span className="sr-only">Página inicial</span>
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="crumb">
            <i className="icon fas fa-chevron-right"></i>
            <a href="#">Tela Anterior</a>
          </li>
          <li className="crumb">
            <i className="icon fas fa-chevron-right"></i>
            <a href="#">Tela Anterior2</a>
          </li>
          <li className="crumb">
            <i className="icon fas fa-chevron-right"></i>
            <a href="#">Tela Anterior3</a>
          </li>
          <li className="crumb">
            <i className="icon fas fa-chevron-right"></i>
            <a href="#">Tela Anterior4</a>
          </li>
          <li className="crumb" data-active="active">
            <i className="icon fas fa-chevron-right"></i>
            <span tabIndex={0} aria-current="page">
              Tela Atual
            </span>
          </li>
        </ol>
      </nav>
      <div className="main-content pl-sm-3 mt-4" id="main-content">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}
