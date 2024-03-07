# Last.fm Top 120 feed
Este projeto consiste no desenvolvimento de uma interface front-end com React/Next.js para a integração com a API de músicas do [Last.fm](https://www.last.fm/pt/home).

## Requisitos de Sistema
- [Node.js 18.17](https://nodejs.org/en) ou superior.

## Como executar o projeto localmente

### Requisitar uma chave de API
- O primeiro passo é criar uma conta no Last.fm (https://www.last.fm/join)
- Depois de criar e confirmar o email, seguindo os passos em (https://www.last.fm/api/webauth), crie uma conta de API em https://www.last.fm/api/account/create
  ![image](https://github.com/mathbraga/react-kendo/assets/31048764/7543215a-2f0e-4dc2-890b-8b1b5b738785)
- Escolha um nome e descrição, e em `Callback URL` e `Application homepage` pode preencher com `http://localhost:3000/`
- Depois de confirmar, sua conta de API será criada e terá uma `API key`, também tendo acesso a essas informações em https://www.last.fm/api/accounts
  ![image](https://github.com/mathbraga/react-kendo/assets/31048764/91e1393e-7d5f-4ee1-a17e-9ca5a48e92af)

### Criar arquivo `.env`
- Copie o arquivo `.env.example` no diretório raiz do projeto e crie seu `.env`.
- Copie a sua chave de API do passo anterior e cole no valor de `API_KEY` do seu novo `.env`
- Apenas a chave, sem qualquer aspas ou outro caractere especial, por exemplo:
  ```
  API_ENDPOINT=https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks
  API_KEY=1234
  ```

### Instalar pacotes
- Execute o comando `npm install` a partir do diretório raiz do projeto.
- Todos os pacotes necessários para o funcionamento da aplicação serão instalados.

### Executar a aplicação
- Para executar a aplicação localmente em ambiente de desenvolvimento, execute o comando `npm run dev` a partir do diretório raiz.
- O ambiente de desenvolvimento será configurado:
  
  ![image](https://github.com/mathbraga/react-kendo/assets/31048764/ac8fc41e-d548-4662-9233-6794f838982c)
- Se tudo estiver correto, basta acessar `http://localhost:3000/` no seu navegador.

### Executar testes
- Para executar testes, basta executar o comando `npm test` a partir do diretório raiz.



