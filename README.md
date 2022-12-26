# API de modelos de carro

## 🪧 Sobre

API com CRUD desenvolvido para modelos de carro

---

## 🚀 Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/)
- [Insomnia](https://insomnia.rest/) - para o teste da API
- [typescript](https://www.typescriptlang.org/play)
- [prisma](https://www.prisma.io/)

---

## 📦 Como baixar o projeto

```bash
  # Clonar o repositório
  $ git clone https://github.com/devgiovannimota/CarAPI

  # Entrar no repositório
  $ cd CarApi

  # Instalar as dependências
  $ npm install

  # Iniciar o projeto
  $ npm run dev
```

# Usando a API

Voce pode acessar a API usando os seguintes endpoints:

## `/car`

### `POST`

- `/car` : Criação do carro
  - Body:
    - `model: String` Nome do modelo
    - `color: String` Cor do modelo
    - `brand: String` Marca do carro
    - `year: number` Ano de criação
    - `plate: String` Placa do carro

### `PUT`

- `/car/:id` : Update do carro"
  - Body:
    - `model: String` Nome do modelo
    - `color: String` Cor do modelo
    - `brand: String` Marca do carro
    - `year: number` Ano de criação
    - `plate: String` Placa do carro

### `DELETE`

- `/car/:id` : Delete do carro"

### `GET`

- `/car` : Ver carros
