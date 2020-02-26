# Calculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

It provides a calculator custom element with no view encapsulation oriented towards using it with a Bootstrap using page.

## Packaging

This will create a package called `ce.js` which will be able to be used with an HTML script tag.
```shell script
npm run build && npm run package
```
If you are using a es5 supporting browser, pleas euse `ce-es5.js`.

## Custom element usage

```html
<calc-main></calc-main>
<script src="ce.js" type="application/javascript"></script>
```

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
