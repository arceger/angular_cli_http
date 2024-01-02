# MSA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

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

## for pwa
ng add @angular/pwa

## build for production
ng build --configuration=production

### carregar module.ts

ng new --no-standalone


## para o docker /podman

#### construir a imagem
podman build -t ffb .
#### executar
podman run -p 3000:80 --name ffb --rm ffb
#### copiar arquivos -- se necessario alguma validacao
podman cp ffb:/usr/share/nginx/html .
### logar na vm
podman exec -it ffb /bin/bash

### remover iamgem
podman rmi NOME_DA_IMAGEM