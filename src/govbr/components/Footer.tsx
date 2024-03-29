import React from 'react'

type BrFooterProps = {}

const Footer = (props: BrFooterProps) => {
  return (
    <footer className="br-footer pt-3" id="footer">
      <div className="container-fluid">
        <div className="info">
          <div className="text-down-01 text-medium pb-3">
            Texto destinado a exibição de informações relacionadas à&nbsp;
            <strong>
              <a href="#">licença de uso</a>.
            </strong>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
