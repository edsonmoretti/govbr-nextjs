import React from 'react'
import Image from 'next/image'

export default function Sobre() {
  return (
    <div>
      <h1>Sobre o Design System</h1>
      <p>
        O Padrão Digital de Governo apresenta os padrões de interface que devem
        ser seguidos por designers e desenvolvedores para garantir a experiência
        única na interação com os sistemas interativos.
      </p>
      <p>
        <strong>
          Por que unificar a experiência dos cidadãos brasileiros quando estão
          em contato com o Governo por meio digital?
        </strong>
      </p>
      <p>
        A proposta surgiu a partir do sentimento comum acerca da necessidade de
        oferecer uma experiência única ao cidadão que se relaciona com o governo
        para acessar produtos e serviços públicos.
      </p>
      <p>
        A iniciativa potencializa a eficiência e a eficácia dos usuários na
        utilização de interfaces para acesso aos serviços e aos sistemas de
        Governo, possibilitando uma única curva de aprendizado e garantindo a
        previsibilidade na utilização dos diferentes sistemas.
      </p>
      <h3 id="histórico">Histórico</h3>
      <p>
        O projeto atual se refere a uma evolução do trabalho desenvolvido para a
        construção da Identidade Digital de Governo (IDG) e da IDG de Serviços,
        iniciativas que buscavam padronizar os portais dos órgãos públicos
        federais e alinhar as informações para otimizar a comunicação e
        simplificar as interfaces de oferta de informações para o cidadão.
      </p>
      <p>
        O diferencial dessa versão está na possibilidade de realizar download de
        templates, códigos e componentes, propiciando o reaproveitamento de
        diferentes elementos necessários ao desenvolvimento de interfaces. Com
        isso, amplia-se a eficiência e a produtividade de desenvolvedores e
        designers, além de facilitar o desenvolvimento alinhado à experiência
        única do cidadão.
      </p>
      <p>
        Diante dessa visão, o Governo desenvolveu um Design System que tem como
        objetivo guiar todos os responsáveis pela construção de interfaces
        interativas orientadas à experiência única do usuário, considerando a
        acessibilidade e a usabilidade dos sistemas.
      </p>
      <p>
        A iniciativa foi desenvolvida no âmbito do Projeto de Unificação de
        Canais Digitais do Governo, que envolveu a participação da Secretaria de
        Governo Digital do Ministério da Economia (<strong>SGD</strong>), a
        Secretaria Especial de Modernização do Estado (<strong>SEME</strong>), a
        Secretaria Especial de Comunicação Social da Presidência da República (
        <strong>SECOM</strong>) e o Serviço Federal de Processamento de Dados (
        <strong>SERPRO</strong>).
      </p>
      <h2 id="afinal-o-que-é-design-system">Afinal, o que é Design System?</h2>
      <blockquote>
        <p>
          <em>
            Um Design System não é um projeto, é um produto que serve produtos
          </em>
          <br />– <cite>[Natan curtis]</cite>
        </p>
      </blockquote>
      <p>
        Este é um documento vivo com diversos componentes e propriedades de um
        produto ou serviço para facilitar a comunicação com os diversos times.
      </p>
      <p>
        Isso beneficia tanto o resultado que se almeja alcançar com o software
        como a comunicação, as pessoas, os negócios e as empresas.
      </p>
      <p>
        A ideia é que esse produto seja utilizado para consulta, para se tomar
        decisões, para novas features, novas interfaces e novas propriedades dos
        produtos do governo.
      </p>
      <p>
        <strong>Atenção</strong>
        <br />
        Este não é um documento estático, ele pode sofrer constantes mudanças e
        a ideia desse Design System é isso. Encaixar diversas formas sem perder
        consistência.
      </p>
      <p>
        Você já está entendendo que o Design System é o conjunto completo de
        padrões do projeto,
        <br />
        documentação e princípios. Utilizando o UI kit (kit de ferramentas de
        design) e o código para atingir
        <br />
        esses padrões.
      </p>
      <h2 id="o-design-system">O Design System</h2>
      <p>
        <Image
          src="https://docs-ds.estaleiro.serpro.gov.br/docs/introducao/sobre/imagens/imagens_ds.png"
          alt="Alguns elementos definidos para compor o Design System - Família Tipográfica, Paleta de Cores, Padronização de Botões e Logotipo."
        />
      </p>
      <p>
        <em>
          Alguns elementos definidos para compor o Design System - Família
          Tipográfica, Paleta de Cores, Padronização de Botões e Logotipo.
        </em>
      </p>
      <p>
        Como Design System oficial de Governo, ele atende a uma ampla gama de
        designers e desenvolvedores que criam produtos e experiências digitais.
        Os objetivos do sistema incluem melhorar a consistência e a qualidade da
        interface, tornando o processo de design e desenvolvimento mais
        eficiente e focado, estabelecendo um vocabulário compartilhado entre
        designer e desenvolvedor, fornecendo orientação clara e identificável
        sobre as melhores práticas de design e desenvolvimento.
      </p>
    </div>
  )
}
