
# Health ON - Triagem Virtual
- RM:98460 - Felipe Capriotti da Silva Santos 

- RM:99679 - Gustavo Kawamura Cristofani

## Github :https://github.com/gukawamura/gs-react-GS-2
### login - test ( utilizado durante a realização do site)
email: test0@gmail -
senha : G

para criar,primeiro para o registre utilize os passos a a seguir para rodar o backend e o site, após registrar irá redirecionar para o login, entre com o que criou e está logado. para sair basta dar "logout" 

O projeto Health ON, é um sistema de triagem virtual desenvolvido usando React com Vite no frontend e uma simulação de backend utilizando JSON Server. Abaixo estão um tutorial com as informações sobre como executar o projeto, inicializar o servidor JSON, e informações sobre o armazenamento seguro de senhas.

## Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

## Inicializando o Projeto

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://seu-repositorio/health-id.git
```
2. Instale as dependências:

```bash
npm install
```

## Inicializando o Backend (JSON Server)

O backend é simulado usando o JSON Server. Para iniciar o servidor, execute o seguinte comando no terminal:

```bash
npm run backend
```
## Inicializando o Backend (JSON Server)

O backend é simulado usando o JSON Server. Para iniciar o servidor, execute o seguinte comando no terminal:

```bash
npm run backend
```

Isso iniciará o servidor JSON na porta 3001, utilizando os dados presentes no arquivo `dados.json`. Certifique-se de ter o JSON Server instalado globalmente ou substitua `npx` por `npm run` caso seja parte de um script no seu projeto.

## Armazenamento Seguro de Senhas

As senhas dos usuários são armazenadas no formato hash utilizando SHA-256. Por exemplo, a senha "password" seria armazenada como:

```plaintext
ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb
```

Isso ajuda a garantir a segurança das informações dos usuários.

## Dados de Exemplo

O arquivo `dados.json` contém dados de exemplo para usuários, pacientes e exames. É possível realizar ajustes ou adicionar mais informações conforme necessário para testes.

## Executando o Projeto

1. Iniciar o servidor JSON (em um terminal separado):

```bash
npm run backend
```

2. Iniciar o aplicativo:

```bash
npm run dev
```

Isso iniciará o aplicativo React na porta padrão (3000) e estará pronto para ser acessado no navegador.

Sinta-se à vontade para explorar e expandir este projeto de acordo com as necessidades específicas do seu ambiente de desenvolvimento e requisitos do sistema Health ID.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
