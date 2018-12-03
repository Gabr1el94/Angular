# Angular

 Desenvolvimento é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. O que facilita o desenvolvimento seja entregue de modo responsivo; Criação organizacional nos componentes; Implementação serviços API's; Comunicação REST comercial; e dentre outros aplicações.

**Requisitos:**
  - Instalação Node e NPM;
  - Conhecimento JS e TS;
 
#Instalação Angular: </br>
  Antes de realizar à instalação no angular, é necessário instalar NODE e NPM, cujo são essenciais para criação de um projeto da plataforma.

- **Windows**:
   Para instalação windows Node e NPM: 
     - [Download 10.14.1 LTS](https://nodejs.org/dist/v10.14.1/node-v10.14.1-x64.msi) 
     - [Download 11.3.0 Current](https://nodejs.org/dist/v11.3.0/node-v11.3.0-x64.msi)
   
  - **Linux/Apple**:
   Para instalação Node e NPM vai no terminal: 
     ```
      -> sudo apt-get update
      -> sudo apt-get install nodejs
      -> sudo apt-get install npm
    ```
  **Obs:** Ambos nos SO's poderá verificar via terminal:
   ```
      -> node -v
      -> npm  -v      
   ```
   Caso esteja tendo falhas: 
      [**Como Instalar o Node.js no Ubuntu 16.04**](https://www.digitalocean.com/community/tutorials/como-instalar-o-node-js-no-ubuntu-16-04-pt)
  # 
 **Config 1**: Instalando Angular
 Se passar por todos os procedimentos, já pode instalar Angular CLI na sua máquina. Para fazer este procedimento insere em via terminal:
   ```
   npm install -g @angular/cli
   
   Verificação se foi instalado:
     ng -v
  ```
**Config 2**: Criando a primeira aplicação
   
   
        ng new my-app

     
**Config 3**: Entrando e habilitar o servidor </br>
    ```cd my-app
       ng serve --open(abre automaticamente o seu browser padrão)
    ```
     
   
