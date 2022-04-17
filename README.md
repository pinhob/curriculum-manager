# 🗒️ Sandy&Junior: Gerenciador de currículos de pessoas desenvolvedoras júnior | Desafio Técnico da Ilegra
![image](https://user-images.githubusercontent.com/20286747/163733405-8df53f2d-75c1-40e5-80ad-261f15d83a1a.png)

Neste repositório está o **desafio técnico de Front-end da Ilegra**. É uma aplicação de **gerenciamento de currículos que permite que o usuário visualize e crie currículos na plataforma**.

---
## Sumário
- [Tecnologias utlizadas](#tecnologias-utilizadas)
- [Rodando o projeto](#rodando-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando o repositório](#clonando-o-repositório)
  - [Instalando as dependências](#instalando-as-dependências)
  - [Rodando o projeto](#rodando-o-projeto)
  - [Rodando a suíte de testes](#rodando-a-suíte-de-testes)
- [Próximos passos](#próximos-passos)

## Tecnologias utilizadas
Este desafio foi criado utilizando React, React Router, React Hook Forms e Styled Components como bibliotecas principais.

## Rodando o projeto
### Pré-requisitos: 

Para rodar este projeto é necessário que você tenha instalado:
* **Node**, na versão `14.6` ou maior;
* **NPM**, na versão `7.21`ou maior;

### Clonando o repositório

Clone o repositório inserindo os seguintes comandos em seu terminal: 
```
git clone git@github.com:pinhob/ilegra-desafio.git
cd ilegra-desafio
```
### Instalando as dependências
Dentro do diretório do projeto, rode em seu terminal o comando para instalar as dependências: 
```
npm install
```
Com isso será descarregado o `node_modules` e todas as dependências.

### Rodando o projeto
Execute o projeto com o comando:
```
npm start
```
### Rodando a suíte de testes
Foram criados diferentes testes para validar a funcionalidade e usabilidade da aplicação. Você pode rodá-los utilizando o comando:

```
npm run test
```

## Próximos passos
Alguns dos próximos passos para a aplicação são:

### Features Princiapis
* **Criar a opção de deletar currículos da aplicação**
* **Criar a opção de exportar currículos em PDF e importá-los para a aplicação**
* **Criar e integrar com o back-end e armazenar os currículos em um banco de dados usando MongoDB**
* **Fazer o deploy da aplicação**


### Formulário
* Permitir adicionar mais experiências, outras formações e atividades voluntárias durante a criação do currículo
* Desabilitar a data de término se o checkbox "Ainda empregado?" for selecionado.
* Aprimorar a lógica de como as tecnologias que o usuário domina são passadas para a aplicação.

### Estilo
* Arrumar detalhes de estilo.
* Tornar a aplicação mais visual, utilzando ícones (como dentro da página de formulário para as redes e contato da pessoa) e animações Lottie em algumas ações da página. 

### Testes
* Implementar testes unitários para os arquivos e linhas que restam, seguindo o coverage.
* Implementar testes de integração utilizando o Cypress.

### Outros
* Implementar uma página inicial explicando o propósito da aplicação.
* Adicionar footer com os créditos pela aplicação.
