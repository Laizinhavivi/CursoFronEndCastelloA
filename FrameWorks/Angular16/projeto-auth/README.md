# ProjetoAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



Caso o npm seja bloqueado ->

Abrir o PowerShell como adm

set-executionpolicy unrestricted 
autorizar tudo

------------------------------------------------------------------------
~Verificar se o node está instalado: 
node --version, caso não esteja node install

~Verificar se os pacotes estão instalados:
npm --version, caso não esteja npm install

~Instalar o angular :
 npx npm install -g @angular/cli@16
~Criar um projeto : 
npx ng new projeto-auth --routing --style=scss
~Abrir o projeto em uma nova janela
~Instalar o json server simultaneamente : 
 npm install json-server concurrently --save-dev 
~start o servidor -> package.json -> "start": "concurrently \"ng server\" \"json-server --watch db.json --port 3008\"",



service -> reponsável para fazer a conexão com o banco de dados.
