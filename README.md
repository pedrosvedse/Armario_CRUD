md# Sistema de Venda de Armários

Aplicativo mobile com CRUD completo de armários, desenvolvido com React Native (Expo) e API Node.js.

## Estrutura
armarios-app/

├── backend/   # API REST em Node.js + Express

└── mobile/    # App React Native com Expo

## Tecnologias

| Camada   | Tecnologias                          |
|----------|--------------------------------------|
| Frontend | React Native, Expo, Axios, React Navigation |
| Backend  | Node.js, Express, Cors               |
| Dados    | JSON em memória (array)              |

## Funcionalidades

- Listar armários cadastrados
- Cadastrar novo armário
- Editar armário existente
- Excluir armário

## Campos do Armário

| Campo           | Tipo   |
|-----------------|--------|
| id              | number |
| nome            | string |
| material        | string |
| cor             | string |
| quantidadePortas| number |
| preco           | number |
| descricao       | string |

## Rotas da API

| Método | Rota          | Descrição     |
|--------|---------------|---------------|
| GET    | /armarios     | Listar todos  |
| GET    | /armarios/:id | Buscar por ID |
| POST   | /armarios     | Cadastrar     |
| PUT    | /armarios/:id | Atualizar     |
| DELETE | /armarios/:id | Excluir       |

## Instalação e Execução

### Backend
```bash
cd backend
npm install
npm run dev
```

### Mobile
```bash
cd mobile
npm install
npm start
```

> Em `mobile/services/api.js`, substitua o IP pelo IP local da sua máquina.
> Para descobrir: `ipconfig` (Windows) ou `ifconfig` (Linux/Mac).

## Pré-requisitos

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Expo Go instalado no celular ou emulador configurado
