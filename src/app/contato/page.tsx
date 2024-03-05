'use client'
import React from 'react'
import {
  BrButton,
  BrCard,
  BrInput,
  BrSelect,
  BrTextarea,
} from '@govbr-ds/react-components'

export default function Contato() {
  return (
    <div>
      <BrCard title={'Contato'} subtitle={'Formulário de contato'}>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <BrInput id="nome" value="Fulano (input preenchido)" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <BrInput id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="assunto">Assunto</label>
            <BrInput id="assunto" />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <BrTextarea id="mensagem" />
          </div>

          <BrSelect
            label={'select'}
            options={['option 1', 'option 2']}
            value={'option 1'}
            onClick={e => alert('Clicou na opção' + (e.target as any).value)}
          />

          <span className="feedback warning" role="alert">
            <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
            Texto auxiliar Função de prevenir erros.
          </span>

          <br />
          <br />
          <BrButton className={'primary'}>Enviar</BrButton>
        </form>
      </BrCard>
    </div>
  )
}
