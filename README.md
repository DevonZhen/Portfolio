# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Website code setup in Visual Studio Code
   Go to Top menu
   1. File/Open Folder...
      Select the RegistrationWeb which you have cloned from the GITHUB.
   2. Terminal/New Terminal
      Execute the following installation in New Terminal
      a) npm install     
      b) npm install -g @angular/cli         (sudo)
      c) npm install -g typescript
      d) npm install bootstrap --save
         copy @import '~bootstrap/dist/css/bootstrap.min.css'; to styles.css
      e) npm install --save font-awesome angular-font-awesome
         copy @import "~font-awesome/css/font-awesome.css"; to styles.css
      f) npm install --save @angular/cdk @angular/material @angular/animations hammers
         copy @import "~@angular/material/prebuilt-themes/indigo-pink.css"; to style.css
      g) npm install @material-extended/mde    
      j) npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons --save
      k) matIcon:
         copy @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

To Localize:
ng add @angular/localize

List of Libraries:
OverlayScrollBars
Bootstrap
Bootstrap Jquery
Jquery
Popperjs/core
Animate.css
FontAwesome
Angular Material

Display global packages:
npm -g ls --depth=0
Display Local packages:
npm ls --depth=0