# Frontend - Aplicação de Usuários

Aplicação frontend desenvolvida em **React + Vite** para gerenciamento de usuários, com páginas de cadastro, login e listagem de usuários.

## 🚀 Tecnologias Utilizadas

- **React** 19.2.0 - Biblioteca JavaScript para construção de interfaces
- **Vite** 7.3.1 - Build tool rápido e moderno
- **React Router DOM** 7.13.1 - Roteamento no frontend
- **Tailwind CSS** 4.2.1 - Framework CSS utility-first
- **Axios** 1.13.6 - Cliente HTTP para requisições à API
- **ESLint** 9.39.1 - Linter para código JavaScript

## 📋 Pré-requisitos

- Node.js 16.0.0 ou superior
- npm 7.0.0 ou superior
- Backend rodando em `http://localhost:3000`

## 📦 Instalação

1. Navegue até a pasta do projeto:

```bash
cd "api - react/vite-project"
```

2. Instale as dependências:

```bash
npm install
```

## 🎯 Rodando o Projeto

### Desenvolvimento

Para iniciar o servidor de desenvolvimento em modo watch:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Para criar o build otimizado:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist/`

### Preview do Build

Para visualizar como a produção ficará:

```bash
npm run preview
```

### Verificar Código (Lint)

Para verificar problemas no código:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── pages/
│   ├── Cadastro/          # Página de cadastro de novos usuários
│   ├── Login/             # Página de autenticação
│   └── Lista/             # Página para listar todos os usuários
├── services/
│   └── api.js             # Configuração do cliente Axios para requisições
├── App.jsx                # Componente raiz da aplicação
├── main.jsx               # Ponto de entrada da aplicação
├── index.css              # Estilos globais com Tailwind CSS
└── assets/                # Imagens e outros assets estáticos
```

## 🔗 Integração com Backend

A aplicação se comunica com a API backend através do Axios. As requisições são feitas para:

- **Cadastro**: `POST /cadastro` - Registra um novo usuário
- **Login**: `POST /login` - Autentica um usuário
- **Listar Usuários**: `GET /usuarios/todos` - Lista todos os usuários (requer token)
- **Deletar Usuário**: `DELETE /usuarios/deletar/:id` - Remove um usuário (requer token)

## 🔐 Autenticação

A aplicação usa JWT (JSON Web Tokens) para autenticação:

1. Usuário faz login e recebe um token
2. O token é armazenado (localStorage ou estado)
3. Nas requisições protegidas, o token é enviado no header `Authorization: Bearer <token>`

## 🎨 Tailwind CSS

O Tailwind CSS está configurado e importado em `src/index.css`. Certifique-se de que o plugin `@tailwindcss/vite` está configurado em `vite.config.js`.

## 🐛 Troubleshooting

### Tailwind CSS não funciona?

Verifique se o plugin está em `vite.config.js`:

```javascript
import tailwindcss from "@tailwindcss/vite"
```

### Erros de conexão com backend?

- Certifique-se de que o backend está rodando em `http://localhost:3000`
- Verifique o arquivo `src/services/api.js` para a URL da API

### Porta já em uso?

Se a porta 5173 estiver em uso, o Vite atribuirá automaticamente outra porta. Verifique o terminal para confirmar.

## 📝 Variáveis de Ambiente

Se necessário, crie um arquivo `.env.local` na raiz do projeto:

```
VITE_API_URL=http://localhost:3000
```

## 🔄 Próximos Passos

- Implementar persistência de autenticação com localStorage
- Adicionar validações de formulário mais robustas
- Melhorar tratamento de erros
- Adicionar testes unitários
