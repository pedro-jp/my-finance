# Sistema de Gerenciamento Financeiro

## Requisitos Funcionais

### Autenticação de Usuário:

- Permitir que os usuários se cadastrem, façam login e alterem suas informações pessoais.

### Gerenciamento de Usuários:

- Possibilitar a criação, edição e exclusão de informações do perfil do usuário (nome, sobrenome, idade, e-mail, CEP, profissão, salário).

### Gerenciamento de Carteiras:

- Permitir a criação, edição e exclusão de carteiras financeiras.
- Rastrear renda mensal esperada, saldo, criador e participantes de cada carteira.

### Registro de Formas de Pagamento:

- Registrar informações sobre formas de pagamento, como categoria, nome, valor gasto e limite.

### Registro de Despesas:

- Permitir a adição, edição e exclusão de despesas.
- Incluir informações como valor, categoria, data de abertura, data de pagamento, nome e comprovante de pagamento.

### Registro de Caixinha:

- Possibilitar a criação, edição e exclusão de caixinhas.
- Incluir informações como nome, saldo, data de criação, investimento feito, investimento esperado e juros.

### Registro de Investimento em Caixinha:

- Permitir a adição, edição e exclusão de investimentos em caixinhas.
- Incluir informações como valor, data e comprovante de investimento.

## Requisitos Não Funcionais

### Segurança:

- Garantir a segurança dos dados do usuário e das transações financeiras.
- Implementar autenticação segura, como HTTPS.

### Desempenho:

- O sistema deve ser responsivo e garantir tempos de resposta rápidos, mesmo com grandes conjuntos de dados.

### Escalabilidade:

- Planejar o sistema para lidar com um aumento significativo no número de usuários e transações.

### Compatibilidade:

- Garantir que o webapp seja compatível com os principais navegadores e dispositivos.

### Usabilidade:

- Projetar uma interface de usuário intuitiva e amigável para facilitar a navegação e compreensão do aplicativo.

### Disponibilidade:

- Garantir alta disponibilidade do sistema, minimizando o tempo de inatividade não planejado.

### Backup e Recuperação:

- Implementar políticas de backup regular para garantir a recuperação de dados em caso de falhas.

### Regulamentações:

- Cumprir regulamentações financeiras e de privacidade relevantes ao lidar com informações financeiras pessoais.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.