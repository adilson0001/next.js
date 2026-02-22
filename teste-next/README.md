# 🚀 Meu Laboratório de Next.js

## 👋 Introdução

Fala aí! Este repositório é o meu **laboratório pessoal** focado em **Next.js**. O objetivo aqui é centralizar tudo o que estou praticando e documentar a minha evolução com esse framework. 

Aqui eu guardo desde as estruturas mais simples até os experimentos mais complexos. Se você está explorando este código, sinta-se à vontade para ver como estou organizando meus estudos e as soluções que encontrei pelo caminho!

---

## 🛠️ O que você vai precisar (Pré-requisitos)

Para rodar este projeto, o seu computador precisa entender a linguagem JavaScript fora do navegador. Para isso, usamos o **Node.js**. Sem ele, os comandos de visualização do projeto não vão funcionar.

### 1. Instalando o Node.js
* **Site oficial:** [nodejs.org](https://nodejs.org/)
* **Qual baixar?** Escolha sempre a versão **LTS** (é a mais estável e garantida).
* **Por que?** O Node vem com uma ferramenta chamada **NPM**, que é como uma "loja de aplicativos" para programadores. É através dele que vamos baixar o Next.js e todas as bibliotecas que este projeto usa.

> **Teste se deu certo:** Abra o seu terminal (CMD ou PowerShell) e digite `node -v`. Se aparecer uma versão (ex: v20.10.0), você está pronto para o próximo passo!

---
### 2. Next.js (Dependências do projeto)
O Next.js já vem configurado dentro das dependências do projeto. Então, basta instalar o que está no arquivo `package.json`.

Com o Node instalado, abra a pasta do projeto no terminal e rode:
```bash
npm install
```


## 🏗️ Como baixar e preparar o projeto

Agora que você tem o Node, siga estes passos para colocar o projeto para rodar:

### 1. Baixe o código
Se você tiver o Git instalado, rode o comando abaixo no terminal. Se não, pode baixar o arquivo `.zip` aqui no GitHub e extrair na sua pasta de preferência.

```bash
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
```

Se você não quiser usar o Git agora, pode baixar o código diretamente:
1. Clique no botão verde **"<> Code"** no topo desta página.
2. Selecione **"Download ZIP"**.
3. Extraia o arquivo em uma pasta de sua preferência.

---

### 📂 Passo 2: Entrar na pasta pelo Terminal

O terminal precisa saber em qual pasta o projeto está para poder trabalhar corretamente.

1. Abra o seu terminal (**CMD** ou **PowerShell**).
2. Digite `cd` e dê um **espaço**.
3. **Arraste a pasta do projeto** para dentro da janela do terminal e aperte **Enter**.
> **Dica:** O comando `cd` significa *Change Directory* (Mudar de Diretório).

---


### 🚦 Passo 3: Como rodar o projeto

Com tudo preparado, agora é só colocar para funcionar!

### 💻 Modo de Desenvolvimento (Para ver alterações ao vivo)

Este é o modo ideal para estudo, pois ele atualiza a página sozinho sempre que você altera e salva o código. 

1. No terminal, digite o comando abaixo para iniciar o servidor:
   ```bash
   npm run dev

