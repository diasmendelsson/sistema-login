This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## ✅ 1. Instalando as dependências do Sequelize + Postgres

npm install sequelize pg pg-hstore

## ✅ 2. Criando a conexão com Sequelize

# Crie um arquivo em:
# 📁 lib/sequelize.ts

// lib/sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false, // remove isso se quiser ver os logs SQL
  }
);

export default sequelize;

## ✅ 3. Criando o modelo de User

# 📁 models/User.ts

// models/User.ts

import { DataTypes } from 'sequelize';
import sequelize from '@/lib/sequelize';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // certifique-se que esse nome bate com a tabela no banco
  timestamps: false,  // ou true se tiver campos createdAt/updatedAt
});

export default User;

## ✅ 4. Criando as variáveis no .env.local

DB_NAME=nome_do_banco
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=192.168.1.XX   # IP do servidor que tá rodando o Postgres
DB_PORT=5432

## ✅ 5. Sincronizando (apenas para desenvolvimento/testes)

# Em algum momento do código (como no início da app ou durante desenvolvimento), rode:

await sequelize.sync(); // isso cria a tabela se não existir


