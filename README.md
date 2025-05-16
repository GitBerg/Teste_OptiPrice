# 📘 Posts Manager App 

Aplicação desenvolvida como parte de um desafio técnico de front-end. O projeto simula a gestão de posts com funcionalidades como listagem, busca em tempo real, edição inline.

---

## 🧠 Funcionalidades

- 🔍 Filtro em tempo real por título e conteúdo
- 📝 Edição inline de título e corpo do post
- 👤 Exibição do nome do usuário autor de cada post
- 📄 Paginação de 10 em 10 itens
- ⚙️ Skeleton loader com cor personalizada
- ✅ Validação de campos antes da edição
- 💡 Organização modular com separação por serviços e hooks

---

## 🛠 Tecnologias Utilizadas

- **React + Vite**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **React Loading Skeleton**

---

## 🗂 Estrutura de Pastas

- src/
- ├── components/ # Componentes reutilizáveis (tabela, input, skeleton)
- ├── hooks/ # Hook para buscar e mapear usuários
- ├── pages/ # Página principal da aplicação
- ├── services/ # Chamada centralizada para APIs externas
- ├── types/ # Tipagens do projeto
- ├── utils/ # Funções utilitárias
- ├── App.tsx
- ├── main.tsx

---

## 🚀 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/posts-app.git
   cd posts-app
   ```
2. Instale as dependências:
  ```bash
npm install
Acesse em http://localhost:5173
```

3. Rode a aplicação:
  ```bash
npm run dev
  ```
4.Acesse em http://localhost:5173

---

## 📡 Fontes de dados
Os dados utilizados são fornecidos pelas APIs públicas do JSONPlaceholder:

- /posts → Lista de publicações

- /users → Lista de autores

---

## 👨‍💻 Autor

Desenvolvido por Gutemberg Filho
- 💼 linkedin.com/in/gutembergfilho

## 📌 Observações
- O projeto não realiza escrita na API (edições são mantidas apenas em memória).

- A interface foi desenvolvida com foco em responsividade, performance e clareza visual.
