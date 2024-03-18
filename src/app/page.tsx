import React from 'react'
import Link from 'next/link'
import { Tooltip } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className="col mb-5">
      <div className="main-content pl-sm-3 mt-4" id="main-content">
        <h1>Home Page</h1>
        <p>
          Você pode utilizar os components do Chapra-UI para criar a interface
          do seu projeto.
        </p>
        <Tooltip
          label={'Clique para acessar a documentação do Chakra-UI'}
          aria-label={'Clique para acessar a documentação do Chakra-UI'}
          hasArrow={true}
          placement={'top-start'}
          bg={'#063691'}
          color={'#f7fafc'}
        >
          <Link
            target={'_blank'}
            href={'https://chakra-ui.com/docs/components'}
          >
            Documentação do Chakra-UI
          </Link>
        </Tooltip>
        <p>
          Chakra UI é uma biblioteca de componentes simples, modular e acessível
          que fornece os blocos de construção necessários para criar suas
          aplicações React.
        </p>
        <p>
          Menos código. Mais velocidade Passe menos tempo escrevendo código de
          interface do usuário e mais tempo construindo uma ótima experiência
          para seus clientes.
        </p>
      </div>
    </div>
  )
}
