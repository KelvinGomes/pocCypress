
# < NOME DO PROJETO>

## Setup

### 1. Setup inicial

Configuração do ambiente, instalar:
  ```
  node 16.14.2
  yarn 1.22.15
  ```
Dica: Para gerenciar várias versões do node, yarn, maven, golang, etc., é possível utilizar o gerenciador asdf: https://asdf-vm.com/#/core-manage-asdf

### 2. Instalar as extensões no Visual Studio Code

Extensões:

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### 3. Clone <nome> project

```
git clone <url>
```

### 4. Instalar dependências

```
yarn install

```

### Execução dos testes

1. Acesse a raiz do projeto
	```
	cd /<pasta>
	```
    
2. Execução dos testes por ambiente
    - Ambiente de ephemeral:
        ```
        yarn run cy:run:ephemeral
        ```
    - Ambiente de testing:
        ```
        yarn run cy:run:testing
        ```
    - Ambiente de staging:
        ```
        yarn run cy:run:staging
        
3. Descrição das tags:
    - `@regression`: execução de todos os testes no ambiente de testing - cenários de sucesso e falha.
    - `@ignore`: não executa o cenário com esta tag.

4. Alterar o nome e descrição no arquivo `package.json`

### Depuração dos testes com o Visual Studio Code

  **Debug pela interface do Visual Studio Code**
  
  1. Abrir a view "Run", por meio do menu `View > Run` (também é possível acessá-la por meio do atalho `Ctrl + Shift + D`).
  2. Com a view "Run" aberta, selecionar a configuração "Run Script: debug" (cujas definições encontram-se em `.vscode/lauch.js`).
  3. Clicar no botão "Start Debugging" (por padrão, o script de debug irá executar os cenários anotados com a tag `@debug` no ambiente de `testing`, para alterar essas configurações basta editar o script "debug" no arquivo `package.json`).

  **Debug pelo Terminal JS do Visual Studio Code**
  
  1. Abrir o terminal do Visual Studio Code e selecionar a aba "TERMINAL"
  2. Clicar no menu "+v" no topo do lado direito (Launch profile)
  3. Selecionar o terminal JavaScript Debug Terminal
  4. Executar o debug com o comando: ENV=staging TAGS=@login yarn run debug

**Observação:** Os parâmetros ENV e TAGS são opcionais, por padrão ENV e TAGS sempre serão `testing` e `@debug`, respectivamente.

**Lembrete:** Antes de fazer push de um commit para o repositório, lembre-se de remover as tags usadas para a depuração.

**Documentação do Cypress:** https://docs.cypress.io/guides/overview/why-cypress