# GovBR NextJS

Este projeto é uma aplicação Next.js que usa o [Design System do Governo Brasileiro](https://gov.br/ds).

Também foi incluído o modelo de integração com o serviço de [Single Sign-On (SSO) do Governo Brasileiro](https://acesso.gov.br/roteiro-tecnico/).


## Pré-requisitos

- Node.js (versão 20.x)
- npm (versão 10.x)

## Clonar o repositório

Para clonar o repositório, execute o seguinte comando no seu terminal:

```bash
git clone https://github.com/edsonmoretti/govbr-nextjs.git
```

## Instalar dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd govbr-nextjs
npm install
```

## Configuração

O projeto utiliza variáveis de ambiente para configuração. Você pode encontrar um exemplo de configuração no arquivo `.env.example`. Copie este arquivo para um novo arquivo chamado `.env`:

```bash
cp .env.example .env
```

Em seguida, abra o arquivo `.env` e substitua os espaços reservados pelos seus valores reais:

```dotenv
NODE_ENV=development
NEXT_PUBLIC_API_URL=https://localhost/api

# GOVBR
NEXT_PUBLIC_GOVBR_URL_PROVIDER=https://sso.staging.acesso.gov.br
GOVBR_URL_SERVICE=https://api.staging.acesso.gov.br
GOVBR_REDIRECT_URI=<SUA_URL_DE_REDIRECIONAMENTO>
GOVBR_SCOPES=openid+email+phone+profile
GOVBR_CLIENT_ID=<ID_DA_APLICAÇÃO>
GOVBR_SECRET=<CHAVE_PRIVADA>
```

## Iniciar a aplicação

Você pode iniciar a aplicação no modo de desenvolvimento com:

```bash
npm run dev
```
OBS.: O comando `npm run dev` inicia a aplicação com https e com o certificado auto-assinado. Caso queira iniciar a aplicação sem https, execute o comando `npm run dev-http`.

Para produção, primeiro construa a aplicação:

```bash
npm run build
```

Em seguida, inicie a aplicação:

```bash
npm start
```

## Uso

Depois que a aplicação estiver em execução, você pode acessar `https://localhost` (ou seu host e porta configurados) em seu navegador. Você verá a página inicial da aplicação, onde poderá fazer login usando o serviço Gov.br SSO.

## Contribuições

Contribuições são bem-vindas. Por favor, abra uma issue ou envie um pull request no GitHub.

### Imagens
Tela completa com conteúdo
![image](https://github.com/edsonmoretti/govbr-nextjs/assets/7455473/fcf81a7c-99e4-44c6-8657-6a30d457110c)

Menu aberto
![image](https://github.com/edsonmoretti/govbr-nextjs/assets/7455473/e6d31db3-e1f4-4853-b962-175476ab2364)

Header com usuário logado
![image](https://github.com/edsonmoretti/govbr-nextjs/assets/7455473/7a9ba9db-d693-4469-9329-bcae9fa1151e)

Exemplo de página de perfil
![image](https://github.com/edsonmoretti/govbr-nextjs/assets/7455473/28b017a2-226a-4a03-aade-19e7c62e5543)

Conteúdo em tela pequena
![image](https://github.com/edsonmoretti/govbr-nextjs/assets/7455473/3aedb9cd-933c-471e-8765-43df90a36f2d)

Header Menu aberto em tela pequena
![image](https://github.com/edsonmoretti/govbr-nextjs/assets/7455473/77f89577-16d1-4343-98d9-06971c307075)

Profile Menu aberto em tela pequena
![image](https://github.com/edsonmoretti/govbr-nextjs/assets/7455473/f855bceb-5b6d-4564-bf46-214535a9de29)
