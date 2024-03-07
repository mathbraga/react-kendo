# Last.fm Top 120 feed
Este projeto consiste no desenvolvimento de uma interface front-end com React/Next.js para a integração com a API de músicas do [Last.fm](https://www.last.fm/pt/home).

## Requisitos de Sistema
- [Node.js 18.17](https://nodejs.org/en) ou superior.

## Como executar o projeto localmente

### Clone o projeto
- A partir do seu terminal, execute:
```
git clone https://github.com/mathbraga/react-kendo.git
```

### Requisitar uma chave de API
- O primeiro passo é criar uma conta no Last.fm (https://www.last.fm/join)
- Depois de criar e confirmar o email, seguindo os passos em (https://www.last.fm/api/webauth) (**apenas o primeiro passo é necessário para este caso**), crie uma conta de API em https://www.last.fm/api/account/create
  ![image](https://github.com/mathbraga/react-kendo/assets/31048764/7543215a-2f0e-4dc2-890b-8b1b5b738785)
- Escolha um nome e descrição, e em `Callback URL` e `Application homepage` pode preencher com `http://localhost:3000/`
- Depois de confirmar, sua conta de API será criada e terá uma `API Key`, também tendo acesso a essas informações em https://www.last.fm/api/accounts
  ![image](https://github.com/mathbraga/react-kendo/assets/31048764/91e1393e-7d5f-4ee1-a17e-9ca5a48e92af)

### Criar arquivo `.env`
- Renomeie o arquivo `.env.example` do diretório raiz do projeto para `.env`.
- Copie a sua `API Key` do passo anterior e cole no valor de `API_KEY` do seu novo `.env`
- Apenas a chave, sem qualquer aspas ou outro caractere especial, por exemplo:
  ```
  API_ENDPOINT=https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks
  API_KEY=1234
  ```

### Instalar pacotes
- No seu terminal, a partir do diretório raiz, execute:
  ```
  npm install
  ```
- Todos os pacotes necessários para o funcionamento da aplicação serão instalados.

### Executar a aplicação em ambiente de desenvolvimento
- A partir do diretório raiz:
  ```
  npm run dev
  ```
- O ambiente de desenvolvimento será configurado:
  
  ![image](https://github.com/mathbraga/react-kendo/assets/31048764/ac8fc41e-d548-4662-9233-6794f838982c)
- Se tudo estiver correto, basta acessar `http://localhost:3000/` no seu navegador.

### Executar testes
- A partir do diretório raiz:
  ```
  npm test
  ```



